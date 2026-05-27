import { MEElement } from '../../base/me-element.js';
import { RippleController } from '../../utils/ripple.js';
import sheet, { rippleSheet } from './menu-item.styles.js';

export class MEMenuItem extends MEElement {
  static observedAttributes = ['selected', 'disabled'];

  private _ripple = new RippleController();

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet, rippleSheet];
  }

  protected render(): void {
    const disabled = this.hasAttribute('disabled');
    this.setAttribute('role', 'menuitem');
    this.setAttribute('tabindex', disabled ? '-1' : '0');

    const icon = this.getAttribute('icon') ?? '';

    this.shadow.innerHTML = `
      <button class="me-menu-item" ${disabled ? 'disabled' : ''} tabindex="-1">
        ${icon ? `<span class="me-menu-item__icon">${icon}</span>` : ''}
        <slot></slot>
      </button>
    `;

    const btn = this.shadow.querySelector<HTMLButtonElement>('.me-menu-item');
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
    this.dispatchEvent(new CustomEvent('me-menu-item-click', {
      detail: { value: this.getAttribute('value') },
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

customElements.define('me-menu-item', MEMenuItem);
