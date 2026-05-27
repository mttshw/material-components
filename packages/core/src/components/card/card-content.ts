import { MEElement } from '../../base/me-element.js';
import sheet from './card-content.styles.js';

export class MECardContent extends MEElement {
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    if (this.shadow.querySelector('slot')) return;
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('me-card-content', MECardContent);
