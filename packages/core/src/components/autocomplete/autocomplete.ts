import { MEElement } from '../../base/me-element.js';
import sheet from './autocomplete.styles.js';

type Option = string | { label: string; value: string };

function optLabel(o: Option): string { return typeof o === 'string' ? o : o.label; }

export class MEAutocomplete extends MEElement {
  static observedAttributes = ['options', 'value', 'label', 'placeholder', 'disabled', 'free-solo', 'multiple'];

  private _focusedIndex = -1;
  private _inputVal = '';

  constructor() {
    super({ mode: 'open', delegatesFocus: true });
    this.shadow.adoptedStyleSheets = [sheet];
  }

  get options(): string { return this.getAttribute('options') ?? ''; }
  set options(v: string | Option[]) {
    this.setAttribute('options', typeof v === 'string' ? v : JSON.stringify(v));
  }

  get value(): string { return this.getAttribute('value') ?? ''; }
  set value(v: string) { this.setAttribute('value', v); }

  private get _options(): Option[] {
    const attr = this.getAttribute('options');
    if (!attr) return [];
    try { return JSON.parse(attr) as Option[]; } catch { return []; }
  }

  private get _filtered(): Option[] {
    const q = this._inputVal.toLowerCase();
    if (!q) return this._options;
    return this._options.filter(o => optLabel(o).toLowerCase().includes(q));
  }

  private get _value(): string { return this.getAttribute('value') ?? ''; }

  private _labelForValue(val: string): string {
    const opt = this._options.find(o => (typeof o === 'string' ? o : o.value) === val);
    return opt ? optLabel(opt) : val;
  }

  protected render(): void {
    if (this.shadow.querySelector('.me-autocomplete__input')) {
      this._syncListbox();
      return;
    }
    const label = this.getAttribute('label') ?? '';
    const placeholder = this.getAttribute('placeholder') ?? '';
    const disabled = this.hasAttribute('disabled');
    const wrap = document.createElement('div');
    wrap.className = 'me-autocomplete__input-wrap';
    wrap.innerHTML = `
      <input class="me-autocomplete__input" type="text" autocomplete="off"
             placeholder="${placeholder}" ${disabled ? 'disabled' : ''}
             role="combobox" aria-autocomplete="list" aria-expanded="false">
      ${label ? `<label class="me-autocomplete__label">${label}</label>` : ''}
      <button class="me-autocomplete__clear" type="button" tabindex="-1" aria-label="Clear">
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
      </button>
      <span class="me-autocomplete__arrow">
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M7 10l5 5 5-5z"/></svg>
      </span>
    `;
    const listbox = document.createElement('ul');
    listbox.className = 'me-autocomplete__listbox';
    listbox.setAttribute('role', 'listbox');
    this.shadow.appendChild(wrap);
    this.shadow.appendChild(listbox);

    if (this._value) {
      const inp = this.shadow.querySelector<HTMLInputElement>('.me-autocomplete__input');
      if (inp) {
        const display = this._labelForValue(this._value);
        inp.value = display;
        this._inputVal = display;
      }
      wrap.classList.add('me-autocomplete--has-value');
    }
    this._syncListbox();
  }

  protected addEventListeners(): void {
    const inp = this.shadow.querySelector<HTMLInputElement>('.me-autocomplete__input');
    if (!inp) return;
    inp.addEventListener('input', this._onInput);
    inp.addEventListener('focus', this._onFocus);
    inp.addEventListener('blur', this._onBlur);
    inp.addEventListener('keydown', this._onKeyDown);
    this.shadow.querySelector('.me-autocomplete__clear')?.addEventListener('click', this._onClear);
    this.shadow.querySelector('.me-autocomplete__listbox')?.addEventListener('mousedown', this._onOptionMouseDown as EventListener);
  }

  private _onInput = (): void => {
    const inp = this.shadow.querySelector<HTMLInputElement>('.me-autocomplete__input');
    if (!inp) return;
    this._inputVal = inp.value;
    this._focusedIndex = -1;
    const wrap = this.shadow.querySelector('.me-autocomplete__input-wrap');
    wrap?.classList.toggle('me-autocomplete--has-value', this._inputVal.length > 0);
    this.toggleAttribute('open', true);
    this._syncListbox();
  };

  private _onFocus = (): void => {
    this.toggleAttribute('open', true);
    this._syncListbox();
  };

  private _onBlur = (): void => {
    setTimeout(() => this.removeAttribute('open'), 150);
  };

  private _onClear = (): void => {
    const inp = this.shadow.querySelector<HTMLInputElement>('.me-autocomplete__input');
    if (!inp) return;
    inp.value = '';
    this._inputVal = '';
    this._focusedIndex = -1;
    this.removeAttribute('value');
    this.shadow.querySelector('.me-autocomplete__input-wrap')?.classList.remove('me-autocomplete--has-value');
    this.removeAttribute('open');
    this.dispatchEvent(new CustomEvent('me-change', { detail: { value: '' }, bubbles: true, composed: true }));
  };

  private _onKeyDown = (e: KeyboardEvent): void => {
    const opts = this._filtered;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this.toggleAttribute('open', true);
        this._focusedIndex = Math.min(this._focusedIndex + 1, opts.length - 1);
        this._syncListbox();
        break;
      case 'ArrowUp':
        e.preventDefault();
        this._focusedIndex = Math.max(this._focusedIndex - 1, 0);
        this._syncListbox();
        break;
      case 'Enter':
        if (this._focusedIndex >= 0 && opts[this._focusedIndex]) {
          e.preventDefault();
          this._selectOption(opts[this._focusedIndex]);
        }
        break;
      case 'Escape':
        this.removeAttribute('open');
        break;
    }
  };

  private _onOptionMouseDown = (e: MouseEvent): void => {
    const li = (e.target as Element).closest('.me-autocomplete__option') as HTMLElement | null;
    if (!li) return;
    const idx = parseInt(li.dataset.index ?? '-1');
    const opt = this._filtered[idx];
    if (opt !== undefined) this._selectOption(opt);
  };

  private _selectOption(opt: Option): void {
    const label = optLabel(opt);
    const value = typeof opt === 'string' ? opt : opt.value;
    const inp = this.shadow.querySelector<HTMLInputElement>('.me-autocomplete__input');
    if (inp) { inp.value = label; this._inputVal = label; }
    this.setAttribute('value', value);
    this.shadow.querySelector('.me-autocomplete__input-wrap')?.classList.add('me-autocomplete--has-value');
    this.removeAttribute('open');
    this.dispatchEvent(new CustomEvent('me-change', { detail: { value, label }, bubbles: true, composed: true }));
  }

  private _syncListbox(): void {
    const listbox = this.shadow.querySelector<HTMLElement>('.me-autocomplete__listbox');
    if (!listbox) return;
    const opts = this._filtered;
    if (opts.length === 0) {
      listbox.innerHTML = `<li class="me-autocomplete__no-options">No options</li>`;
    } else {
      listbox.innerHTML = opts.map((o, i) => {
        const label = optLabel(o);
        const val = typeof o === 'string' ? o : o.value;
        const focused = i === this._focusedIndex;
        const selected = val === this._value;
        return `<li class="me-autocomplete__option${focused ? ' focused' : ''}"
                    role="option" aria-selected="${selected}" data-index="${i}">${label}</li>`;
      }).join('');
    }
    if (this.hasAttribute('open')) {
      this._positionListbox();
    }
  }

  private _positionListbox(): void {
    const inp = this.shadow.querySelector<HTMLInputElement>('.me-autocomplete__input');
    const listbox = this.shadow.querySelector<HTMLElement>('.me-autocomplete__listbox');
    if (!inp || !listbox) return;
    const rect = inp.getBoundingClientRect();
    listbox.style.top = `${rect.bottom + 4}px`;
    listbox.style.left = `${rect.left}px`;
    listbox.style.width = `${rect.width}px`;
  }

  protected onAttributeChanged(name: string, _old: string | null, _new: string | null): void {
    if (name === 'open' && _new !== null) this._positionListbox();
    if (name === 'options') this._syncListbox();
    if (name === 'value') {
      const inp = this.shadow.querySelector<HTMLInputElement>('.me-autocomplete__input');
      if (!inp) return;
      const display = _new !== null ? this._labelForValue(_new) : '';
      inp.value = display;
      this._inputVal = display;
      this.shadow.querySelector('.me-autocomplete__input-wrap')
        ?.classList.toggle('me-autocomplete--has-value', !!_new);
    }
  }
}

customElements.define('me-autocomplete', MEAutocomplete);
