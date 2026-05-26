import { MEElement } from '../../base/me-element.js';
import { RippleController, rippleSheet } from '../../utils/ripple.js';
import sheet from './switch.styles.js';

export class MESwitch extends MEElement {
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

  get value(): string { return this.getAttribute('value') ?? 'on'; }

  protected render(): void {
    const checked = this.hasAttribute('checked');
    const disabled = this.hasAttribute('disabled');

    this._internals.setFormValue(checked ? this.value : null);
    this.setAttribute('role', 'switch');
    this.setAttribute('aria-checked', String(checked));
    this.setAttribute('tabindex', disabled ? '-1' : '0');

    this.shadow.innerHTML = `
      <div class="me-switch">
        <input class="me-switch__input" type="checkbox" tabindex="-1" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}/>
        <div class="me-switch__track">
          <div class="me-switch__thumb-wrapper">
            <div class="me-switch__ripple"></div>
            <div class="me-switch__thumb"></div>
          </div>
        </div>
      </div>
    `;

    this._ripple.detach();
    if (!disabled) {
      const rippleEl = this.shadow.querySelector<HTMLElement>('.me-switch__ripple')!;
      this._ripple.attach(rippleEl, { centered: true });
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
    this.checked = !this.checked;
    this.dispatchEvent(new Event('change', { bubbles: true }));
  };

  private _handleKeydown = (e: KeyboardEvent): void => {
    if (e.key === ' ') {
      e.preventDefault();
      this.checked = !this.checked;
      this.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };
}

customElements.define('me-switch', MESwitch);
