import { MEElement } from '../../base/me-element.js';
import sheet from './backdrop.styles.js';

export class MEBackdrop extends MEElement {
  static observedAttributes = ['open', 'invisible'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }

  protected addEventListeners(): void {
    this.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('me-close', { bubbles: true, composed: true }));
    });
  }
}

customElements.define('me-backdrop', MEBackdrop);
