import { MEElement } from '../../base/me-element.js';
import sheet from './card.styles.js';

export class MECard extends MEElement {
  static observedAttributes = ['variant', 'raised'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    if (this.shadow.querySelector('slot')) return;
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('me-card', MECard);
