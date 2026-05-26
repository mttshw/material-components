import { MEElement } from '../../base/me-element.js';
import { RippleController } from '../../utils/ripple.js';
import sheet, { rippleSheet } from './list-item-button.styles.js';

export class MEListItemButton extends MEElement {
  static observedAttributes = ['selected', 'disabled', 'divider', 'alignItems', 'disableGutters'];

  private _ripple = new RippleController();

  constructor() {
    super({ mode: 'open', delegatesFocus: true });
    this.shadow.adoptedStyleSheets = [sheet, rippleSheet];
    this.setAttribute('role', 'button');
    this.setAttribute('tabindex', '0');
  }

  protected render(): void {
    if (this.hasAttribute('disabled')) this.setAttribute('tabindex', '-1');
    else this.setAttribute('tabindex', '0');

    this.shadow.innerHTML = `<slot></slot>`;
    this._ripple.attach(this as unknown as HTMLElement);
  }

  protected addEventListeners(): void {
    this.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  }
}

customElements.define('me-list-item-button', MEListItemButton);
