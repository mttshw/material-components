import { MCElement } from '../../base/mc-element.js';
import sheet from './select.styles.js';

export class MCSelect extends MCElement {
  static formAssociated = true;
  static observedAttributes = [
    'variant', 'label', 'value', 'disabled', 'required', 'error',
    'helper-text', 'color', 'size', 'name', 'multiple',
  ];

  private _internals: ElementInternals;
  private _focused = false;
  private _value = '';

  constructor() {
    super({ mode: 'open', delegatesFocus: true });
    this._internals = this.attachInternals();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  get value(): string { return this._value; }
  set value(v: string) {
    this._value = v;
    const select = this.shadow.querySelector<HTMLSelectElement>('.mc-select__native');
    if (select) select.value = v;
    this._internals.setFormValue(v);
    this._updateFloating();
  }

  get disabled(): boolean { return this.hasAttribute('disabled'); }

  protected render(): void {
    const variant = this.getAttribute('variant') ?? 'outlined';
    const label = this.getAttribute('label') ?? '';
    const disabled = this.hasAttribute('disabled');
    const required = this.hasAttribute('required');
    const helperText = this.getAttribute('helper-text') ?? '';
    const name = this.getAttribute('name') ?? '';
    const multiple = this.hasAttribute('multiple');

    const isFloating = true; // select always floats when it has a value or is focused
    const hasLabel = label.length > 0;

    const wrapperClass = [
      'mc-select',
      this._focused ? 'mc-select--focused' : '',
      'mc-select--floating',
    ].filter(Boolean).join(' ');

    const notch = variant === 'outlined' ? `
      <div class="mc-notched-outline" aria-hidden="true">
        <div class="mc-notched-outline__leading"></div>
        <div class="mc-notched-outline__notch ${hasLabel ? 'mc-notched-outline__notch--open' : ''}">
          ${hasLabel ? `<legend class="mc-notched-outline__legend"><span>${label}</span></legend>` : ''}
        </div>
        <div class="mc-notched-outline__trailing"></div>
      </div>` : '';

    this.shadow.innerHTML = `
      <div class="${wrapperClass}">
        ${notch}
        ${hasLabel ? `<label class="mc-select__label">${label}</label>` : ''}
        <select
          class="mc-select__native"
          ${disabled ? 'disabled' : ''}
          ${required ? 'required' : ''}
          ${name ? `name="${name}"` : ''}
          ${multiple ? 'multiple' : ''}
        ></select>
        <span class="mc-select__arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
        </span>
      </div>
      <div class="mc-select__slot"><slot></slot></div>
      ${helperText ? `<p class="mc-select__helper">${helperText}</p>` : ''}
    `;

    this._syncOptions();
    this._bindSelect();
  }

  protected addEventListeners(): void {
    this.addEventListener('slotchange', this._onSlotChange);
  }

  protected cleanup(): void {
    this.removeEventListener('slotchange', this._onSlotChange);
  }

  private _onSlotChange = (): void => {
    this._syncOptions();
  };

  private _syncOptions(): void {
    const native = this.shadow.querySelector<HTMLSelectElement>('.mc-select__native');
    if (!native) return;

    const slotEl = this.shadow.querySelector<HTMLSlotElement>('slot');
    const assigned = slotEl ? slotEl.assignedElements({ flatten: true }) : [];
    const lightOptions = assigned.length > 0
      ? assigned
      : Array.from(this.querySelectorAll('option, optgroup'));

    native.innerHTML = '';
    for (const el of lightOptions) {
      if (el.tagName === 'OPTION') {
        const opt = document.createElement('option');
        opt.value = (el as HTMLOptionElement).value ?? el.textContent ?? '';
        opt.textContent = el.textContent ?? '';
        opt.disabled = (el as HTMLOptionElement).disabled;
        opt.selected = (el as HTMLOptionElement).hasAttribute('selected');
        native.appendChild(opt);
      } else if (el.tagName === 'OPTGROUP') {
        const grp = document.createElement('optgroup');
        grp.label = (el as HTMLOptGroupElement).label ?? '';
        for (const child of Array.from(el.querySelectorAll('option'))) {
          const opt = document.createElement('option');
          opt.value = child.value;
          opt.textContent = child.textContent ?? '';
          opt.disabled = child.disabled;
          opt.selected = child.hasAttribute('selected');
          grp.appendChild(opt);
        }
        native.appendChild(grp);
      }
    }

    if (this._value) native.value = this._value;
    this._value = native.value;
    this._internals.setFormValue(this._value);
    this._updateFloating();
  }

  private _bindSelect(): void {
    const native = this.shadow.querySelector<HTMLSelectElement>('.mc-select__native');
    if (!native) return;

    native.addEventListener('focus', () => {
      this._focused = true;
      const wrapper = this.shadow.querySelector<HTMLElement>('.mc-select');
      wrapper?.classList.add('mc-select--focused');
      const label = this.shadow.querySelector<HTMLElement>('.mc-select__label');
      if (label) label.style.color = '';
    });

    native.addEventListener('blur', () => {
      this._focused = false;
      const wrapper = this.shadow.querySelector<HTMLElement>('.mc-select');
      wrapper?.classList.remove('mc-select--focused');
    });

    native.addEventListener('change', () => {
      this._value = native.value;
      this._internals.setFormValue(this._value);
      this._updateFloating();
      this.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }

  private _updateFloating(): void {
    // Select always stays in floating state — has to show label above the dropdown
    const notch = this.shadow.querySelector<HTMLElement>('.mc-notched-outline__notch');
    if (notch) notch.classList.add('mc-notched-outline__notch--open');
  }

  protected onAttributeChanged(name: string, _oldVal: string | null, newVal: string | null): void {
    if (name === 'value') {
      this._value = newVal ?? '';
      const native = this.shadow.querySelector<HTMLSelectElement>('.mc-select__native');
      if (native) { native.value = this._value; }
      this._internals.setFormValue(this._value);
    }
  }

  formResetCallback(): void {
    this._value = this.getAttribute('value') ?? '';
    this._internals.setFormValue(this._value);
    this.render();
  }
}

customElements.define('mc-select', MCSelect);
