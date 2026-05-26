import { MEElement } from '../../base/me-element.js';
import { RippleController } from '../../utils/ripple.js';
import sheet, { rippleSheet } from './list-item-button.styles.js';

export class MEListItemButton extends MEElement {
  static observedAttributes = ['selected', 'disabled', 'divider', 'alignItems', 'disableGutters'];

  private _ripple = new RippleController();

  constructor() {
    super({ mode: 'open', delegatesFocus: true });
    this.shadow.adoptedStyleSheets = [sheet, rippleSheet];
  }

  protected render(): void {
    this.setAttribute('role', 'button');
    if (this.hasAttribute('disabled')) this.setAttribute('tabindex', '-1');
    else this.setAttribute('tabindex', '0');

    this.shadow.innerHTML = `<div class="root"><slot name="start"></slot><slot></slot></div>`;
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
