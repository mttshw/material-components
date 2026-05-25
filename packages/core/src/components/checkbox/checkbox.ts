import { MCElement } from '../../base/mc-element.js';
import { RippleController, rippleSheet } from '../../utils/ripple.js';
import sheet from './checkbox.styles.js';

export class MCCheckbox extends MCElement {
  static formAssociated = true;
  static observedAttributes = ['checked', 'indeterminate', 'disabled', 'value', 'color', 'required', 'name'];

  private _internals: ElementInternals;
  private _ripple = new RippleController();

  constructor() {
    super({ mode: 'open', delegatesFocus: true });
    this._internals = this.attachInternals();
    this.shadow.adoptedStyleSheets = [sheet, rippleSheet];
  }

  get checked(): boolean { return this.hasAttribute('checked'); }
  set checked(val: boolean) { val ? this.setAttribute('checked', '') : this.removeAttribute('checked'); }

  get indeterminate(): boolean { return this.hasAttribute('indeterminate'); }
  set indeterminate(val: boolean) { val ? this.setAttribute('indeterminate', '') : this.removeAttribute('indeterminate'); }

  get disabled(): boolean { return this.hasAttribute('disabled'); }

  get value(): string { return this.getAttribute('value') ?? 'on'; }

  protected render(): void {
    const checked = this.hasAttribute('checked');
    const indeterminate = this.hasAttribute('indeterminate');
    const disabled = this.hasAttribute('disabled');

    this._internals.setFormValue(checked ? this.value : null);
    this._internals.ariaChecked = indeterminate ? 'mixed' : String(checked);

    this.setAttribute('role', 'checkbox');
    this.setAttribute('aria-checked', indeterminate ? 'mixed' : String(checked));
    this.setAttribute('tabindex', disabled ? '-1' : '0');

    this.shadow.innerHTML = `
      <div class="mc-checkbox">
        <input
          class="mc-checkbox__input"
          type="checkbox"
          tabindex="-1"
          ${checked ? 'checked' : ''}
          ${indeterminate ? 'data-indeterminate' : ''}
          ${disabled ? 'disabled' : ''}
        />
        <span class="mc-checkbox__icon">
          ${indeterminate ? ICON_INDETERMINATE : checked ? ICON_CHECKED : ICON_UNCHECKED}
        </span>
      </div>
    `;

    const input = this.shadow.querySelector<HTMLInputElement>('input')!;
    if (indeterminate) input.indeterminate = true;

    this._ripple.detach();
    if (!disabled) {
      const box = this.shadow.querySelector<HTMLElement>('.mc-checkbox')!;
      this._ripple.attach(box, { centered: true });
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
    if (this.disabled) return;
    e.preventDefault();
    this._toggle();
  };

  private _handleKeydown = (e: KeyboardEvent): void => {
    if (e.key === ' ') { e.preventDefault(); this._toggle(); }
  };

  private _toggle(): void {
    if (this.indeterminate) {
      this.removeAttribute('indeterminate');
      this.setAttribute('checked', '');
    } else {
      this.toggleAttribute('checked');
    }
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }
}

const ICON_UNCHECKED = `<svg viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>`;
const ICON_CHECKED = `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`;
const ICON_INDETERMINATE = `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/></svg>`;

customElements.define('mc-checkbox', MCCheckbox);
