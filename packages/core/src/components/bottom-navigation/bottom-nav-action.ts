import { MEElement } from '../../base/me-element.js';
import { RippleController } from '../../utils/ripple.js';
import sheet, { rippleSheet } from './bottom-nav-action.styles.js';

export class MEBottomNavAction extends MEElement {
  static observedAttributes = ['label', 'value', 'selected', 'disabled', 'show-label'];

  private _ripple = new RippleController();

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet, rippleSheet];
  }

  protected render(): void {
    const label = this.getAttribute('label') ?? '';
    const disabled = this.hasAttribute('disabled');

    this.setAttribute('role', 'button');
    this.setAttribute('tabindex', disabled ? '-1' : '0');
    this.setAttribute('aria-label', label);

    this.shadow.innerHTML = `
      <button class="me-bottom-nav-action" ${disabled ? 'disabled' : ''} tabindex="-1" aria-label="${label}">
        <span class="me-bottom-nav-action__icon"><slot name="icon"></slot></span>
        <span class="me-bottom-nav-action__label">${label}</span>
      </button>
    `;

    const btn = this.shadow.querySelector<HTMLButtonElement>('.me-bottom-nav-action');
    if (btn) this._ripple.attach(btn);
  }

  protected cleanup(): void {
    this._ripple.detach();
  }

  protected addEventListeners(): void {
    this.addEventListener('click', this._onClick);
    this.addEventListener('keydown', this._onKeyDown);
  }

  private _onClick = (): void => {
    if (this.hasAttribute('disabled')) return;
    this.dispatchEvent(new CustomEvent('me-nav-action-select', {
      detail: { value: this.getAttribute('value') ?? this.getAttribute('label') ?? '' },
      bubbles: true,
      composed: true,
    }));
  };

  private _onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this._onClick();
    }
  };
}

customElements.define('me-bottom-nav-action', MEBottomNavAction);
