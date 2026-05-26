import { MEElement } from '../../base/me-element.js';
import sheet from './select.styles.js';

export class MESelect extends MEElement {
  static formAssociated = true;
  static observedAttributes = [
    'variant', 'label', 'value', 'disabled', 'required', 'error',
    'helper-text', 'color', 'size', 'name', 'multiple',
  ];

  private _internals: ElementInternals;
  private _focused = false;
  private _value = '';
  private _observer: MutationObserver | null = null;

  constructor() {
    super({ mode: 'open', delegatesFocus: true });
    this._internals = this.attachInternals();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  connectedCallback(): void {
    super.connectedCallback();
    // connectedCallback fires before children are parsed; re-sync once the
    // parser has finished the element's subtree.
    requestAnimationFrame(() => this._syncOptions());
    this._observer = new MutationObserver(() => this._syncOptions());
    this._observer.observe(this, { childList: true, subtree: true });
  }

  disconnectedCallback(): void {
    this._observer?.disconnect();
    this._observer = null;
    super.disconnectedCallback();
  }

  get value(): string { return this._value; }
  set value(v: string) {
    this._value = v;
    const select = this.shadow.querySelector<HTMLSelectElement>('.me-select__native');
    if (select) select.value = v;
    this._internals.setFormValue(v);
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
    const hasLabel = label.length > 0;

    // Select always shows a floating label — the native select always displays a value.
    this.classList.add('me-select--floating');
    this.classList.toggle('me-select--focused', this._focused);

    const notch = variant === 'outlined' ? `
      <div class="me-notched-outline" aria-hidden="true">
        <div class="me-notched-outline__leading"></div>
        <div class="me-notched-outline__notch"></div>
        <div class="me-notched-outline__trailing"></div>
      </div>` : '';

    // Label is a sibling of .me-select, positioned relative to :host — same pattern as
    // text-field. This lets it float above the wrapper without border/bg intersection.
    this.shadow.innerHTML = `
      ${hasLabel ? `<label class="me-select__label">${label}</label>` : ''}
      <div class="me-select">
        ${notch}
        <select
          class="me-select__native"
          ${disabled ? 'disabled' : ''}
          ${required ? 'required' : ''}
          ${name ? `name="${name}"` : ''}
          ${multiple ? 'multiple' : ''}
        ></select>
        <span class="me-select__arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
        </span>
      </div>
      ${helperText ? `<p class="me-select__helper">${helperText}</p>` : ''}
    `;

    this._updateNotchWidth();
    this._syncOptions();
    this._bindSelect();
  }

  private _updateNotchWidth(): void {
    if ((this.getAttribute('variant') ?? 'outlined') !== 'outlined') return;
    const notch = this.shadow.querySelector<HTMLElement>('.me-notched-outline__notch');
    if (!notch) return;
    const label = this.shadow.querySelector<HTMLElement>('.me-select__label');
    if (label && label.offsetWidth > 0) {
      notch.style.width = `${label.offsetWidth * 0.75 + 10}px`;
    } else {
      notch.style.width = '';
    }
  }

  protected addEventListeners(): void {}

  private _syncOptions(): void {
    const native = this.shadow.querySelector<HTMLSelectElement>('.me-select__native');
    if (!native) return;

    const lightOptions = Array.from(this.querySelectorAll(':scope > option, :scope > optgroup'));

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
  }

  private _bindSelect(): void {
    const native = this.shadow.querySelector<HTMLSelectElement>('.me-select__native');
    if (!native) return;

    native.addEventListener('focus', () => {
      this._focused = true;
      this.classList.add('me-select--focused');
    });

    native.addEventListener('blur', () => {
      this._focused = false;
      this.classList.remove('me-select--focused');
    });

    native.addEventListener('change', () => {
      this._value = native.value;
      this._internals.setFormValue(this._value);
      this.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }

  protected onAttributeChanged(name: string, _oldVal: string | null, newVal: string | null): void {
    if (name === 'value') {
      this._value = newVal ?? '';
      const native = this.shadow.querySelector<HTMLSelectElement>('.me-select__native');
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

customElements.define('me-select', MESelect);
