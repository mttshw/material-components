import { MCElement } from '../../base/mc-element.js';
import { RippleController, rippleSheet } from '../../utils/ripple.js';
import sheet from './radio.styles.js';

export class MCRadio extends MCElement {
  static formAssociated = true;
  static observedAttributes = ['checked', 'disabled', 'value', 'color', 'required', 'name'];

  private _internals: ElementInternals;
  private _ripple = new RippleController();

  constructor() {
    super({ mode: 'open', delegatesFocus: true });
    this._internals = this.attachInternals();
    this.shadow.adoptedStyleSheets = [sheet, rippleSheet];
  }

  get checked(): boolean { return this.hasAttribute('checked'); }
  set checked(val: boolean) { val ? this.setAttribute('checked', '') : this.removeAttribute('checked'); }

  get disabled(): boolean { return this.hasAttribute('disabled'); }

  get value(): string { return this.getAttribute('value') ?? ''; }
  get name(): string { return this.getAttribute('name') ?? ''; }

  protected render(): void {
    const checked = this.hasAttribute('checked');
    const disabled = this.hasAttribute('disabled');

    this._internals.setFormValue(checked ? this.value : null);
    this.setAttribute('role', 'radio');
    this.setAttribute('aria-checked', String(checked));
    this.setAttribute('tabindex', disabled ? '-1' : '0');

    this.shadow.innerHTML = `
      <div class="mc-radio">
        <input
          class="mc-radio__input"
          type="radio"
          tabindex="-1"
          ${checked ? 'checked' : ''}
          ${disabled ? 'disabled' : ''}
        />
        <span class="mc-radio__icon">
          ${checked ? ICON_CHECKED : ICON_UNCHECKED}
        </span>
      </div>
    `;

    this._ripple.detach();
    if (!disabled) {
      const dot = this.shadow.querySelector<HTMLElement>('.mc-radio')!;
      this._ripple.attach(dot, { centered: true });
    }
  }

  protected addEventListeners(): void {
    this.addEventListener('click', this._handleClick);
    this.addEventListener('keydown', this._handleKeydown);
  }

  protected cleanup(): void {
    this._ripple.detach();
    this.removeEventListener('click', this._handleClick);
    this.removeEventListener('keydown', this._handleKeydown);
  }

  private _handleClick = (e: Event): void => {
    if (this.disabled || this.checked) return;
    e.preventDefault();
    this._select();
  };

  private _handleKeydown = (e: KeyboardEvent): void => {
    if (e.key === ' ') { e.preventDefault(); if (!this.checked) this._select(); }
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); this._moveFocus(1); }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); this._moveFocus(-1); }
  };

  _select(): void {
    this.dispatchEvent(new CustomEvent('mc-radio-select', { bubbles: true, detail: { value: this.value } }));
    this.checked = true;
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }

  private _moveFocus(dir: 1 | -1): void {
    const group = this.closest('mc-radio-group');
    if (!group) return;
    const radios = Array.from(group.querySelectorAll<MCRadio>('mc-radio:not([disabled])'));
    const idx = radios.indexOf(this);
    const next = radios[(idx + dir + radios.length) % radios.length];
    if (next) { next.focus(); next._select(); }
  }
}

const ICON_UNCHECKED = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`;
const ICON_CHECKED = `<svg viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`;

customElements.define('mc-radio', MCRadio);
