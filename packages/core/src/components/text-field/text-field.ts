import { MEElement } from '../../base/me-element.js';
import sheet from './text-field.styles.js';

export class METextField extends MEElement {
  static formAssociated = true;
  static observedAttributes = [
    'variant', 'label', 'placeholder', 'value', 'type', 'disabled', 'readonly',
    'required', 'error', 'helper-text', 'color', 'size', 'multiline', 'rows',
    'start-adornment', 'end-adornment', 'name', 'autocomplete', 'autofocus',
    'min', 'max', 'minlength', 'maxlength', 'pattern', 'step',
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
    const input = this.shadow.querySelector<HTMLInputElement | HTMLTextAreaElement>('.me-text-field__input');
    if (input) input.value = v;
    this._internals.setFormValue(v);
    this._updateFloating();
  }

  get disabled(): boolean { return this.hasAttribute('disabled'); }

  protected render(): void {
    const variant = this.getAttribute('variant') ?? 'outlined';
    const label = this.getAttribute('label') ?? '';
    const type = this.getAttribute('type') ?? 'text';
    const placeholder = this.getAttribute('placeholder') ?? '';
    const disabled = this.hasAttribute('disabled');
    const readonly = this.hasAttribute('readonly');
    const required = this.hasAttribute('required');
    const helperText = this.getAttribute('helper-text') ?? '';
    const multiline = this.hasAttribute('multiline');
    const rows = this.getAttribute('rows') ?? '4';
    const startAdornment = this.getAttribute('start-adornment') ?? '';
    const endAdornment = this.getAttribute('end-adornment') ?? '';
    const autocomplete = this.getAttribute('autocomplete') ?? '';
    const name = this.getAttribute('name') ?? '';
    const hasLabel = label.length > 0;

    // Toggle :host state classes before innerHTML so CSS is already correct when
    // the shadow DOM is built. _updateNotchWidth must run after innerHTML (below).
    // Always float when a start-adornment is present — resting label overlaps the adornment.
    const isFloating = this._focused || this._value.length > 0 || placeholder.length > 0 || startAdornment.length > 0;
    this.classList.toggle('me-text-field--floating', isFloating);
    this.classList.toggle('me-text-field--focused', this._focused);

    const inputAttrs = [
      `class="me-text-field__input"`,
      multiline ? '' : `type="${type}"`,
      `value="${this._value.replace(/"/g, '&quot;')}"`,
      placeholder ? `placeholder="${placeholder}"` : '',
      disabled ? 'disabled' : '',
      readonly ? 'readonly' : '',
      required ? 'required' : '',
      name ? `name="${name}"` : '',
      autocomplete ? `autocomplete="${autocomplete}"` : '',
      this.getAttribute('minlength') ? `minlength="${this.getAttribute('minlength')}"` : '',
      this.getAttribute('maxlength') ? `maxlength="${this.getAttribute('maxlength')}"` : '',
      this.getAttribute('pattern') ? `pattern="${this.getAttribute('pattern')}"` : '',
      this.getAttribute('min') ? `min="${this.getAttribute('min')}"` : '',
      this.getAttribute('max') ? `max="${this.getAttribute('max')}"` : '',
      this.getAttribute('step') ? `step="${this.getAttribute('step')}"` : '',
      this.getAttribute('autofocus') !== null ? 'autofocus' : '',
    ].filter(Boolean).join(' ');

    const inputEl = multiline
      ? `<textarea ${inputAttrs} rows="${rows}"></textarea>`
      : `<input ${inputAttrs}/>`;

    // For outlined: three border divs whose gap (missing top border on the notch div)
    // is sized precisely by JS — label.offsetWidth * 0.75 + 10px.
    const notch = variant === 'outlined' ? `
      <div class="me-notched-outline" aria-hidden="true">
        <div class="me-notched-outline__leading"></div>
        <div class="me-notched-outline__notch"></div>
        <div class="me-notched-outline__trailing"></div>
      </div>` : '';

    // The label is rendered OUTSIDE .me-text-field so it is positioned relative to
    // :host — not to the input wrapper. This prevents border-bottom (standard) or the
    // filled background from ever intersecting the label text.
    this.shadow.innerHTML = `
      ${hasLabel ? `<label class="me-text-field__label">${label}</label>` : ''}
      <div class="me-text-field">
        ${notch}
        ${startAdornment ? `<div class="me-text-field__adornment-start">${startAdornment}</div>` : ''}
        ${inputEl}
        ${endAdornment ? `<div class="me-text-field__adornment-end">${endAdornment}</div>` : ''}
      </div>
      ${helperText ? `<p class="me-text-field__helper">${helperText}</p>` : ''}
    `;

    // Notch measurement must happen after innerHTML — the div must exist in the DOM.
    this._updateNotchWidth(isFloating);
    this._bindInput();
  }

  private _bindInput(): void {
    const input = this.shadow.querySelector<HTMLInputElement | HTMLTextAreaElement>('.me-text-field__input');
    if (!input) return;

    input.addEventListener('focus', () => {
      this._focused = true;
      this._syncStateClasses();
    });

    input.addEventListener('blur', () => {
      this._focused = false;
      this._syncStateClasses();
    });

    input.addEventListener('input', () => {
      this._value = input.value;
      this._internals.setFormValue(this._value);
      this._updateFloating();
      this.dispatchEvent(new Event('input', { bubbles: true }));
    });

    input.addEventListener('change', () => {
      this._value = input.value;
      this._internals.setFormValue(this._value);
      this.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }

  // State is tracked via :host classes so CSS transitions work without re-rendering.
  private _syncStateClasses(): void {
    const placeholder = this.getAttribute('placeholder') ?? '';
    const startAdornment = this.getAttribute('start-adornment') ?? '';
    const isFloating = this._focused || this._value.length > 0 || placeholder.length > 0 || startAdornment.length > 0;
    this.classList.toggle('me-text-field--floating', isFloating);
    this.classList.toggle('me-text-field--focused', this._focused);
    this._updateNotchWidth(isFloating);
  }

  // Sets the outlined notch div width to exactly match the floating label's visual width.
  // offsetWidth gives the layout width (unaffected by CSS transform), so multiply by 0.75
  // to get the visual width at scale(0.75). Add 10px: the leading div ends at x=9px while
  // the label starts at x=14px, leaving a natural 5px left buffer; we add 5px right buffer.
  private _updateNotchWidth(isFloating: boolean): void {
    if ((this.getAttribute('variant') ?? 'outlined') !== 'outlined') return;
    const notch = this.shadow.querySelector<HTMLElement>('.me-notched-outline__notch');
    if (!notch) return;
    const label = this.shadow.querySelector<HTMLElement>('.me-text-field__label');
    if (isFloating && label && label.offsetWidth > 0) {
      notch.style.width = `${label.offsetWidth * 0.75 + 10}px`;
    } else {
      notch.style.width = '';
    }
  }

  private _updateFloating(): void {
    this._syncStateClasses();
  }

  protected onAttributeChanged(name: string, _oldVal: string | null, newVal: string | null): void {
    if (name === 'value') {
      this._value = newVal ?? '';
      this._internals.setFormValue(this._value);
    }
  }

  formResetCallback(): void {
    this._value = this.getAttribute('value') ?? '';
    this._internals.setFormValue(this._value);
    this.render();
  }
}

customElements.define('me-text-field', METextField);
