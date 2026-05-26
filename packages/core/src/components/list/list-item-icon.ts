import { MEElement } from '../../base/me-element.js';
import sheet from './list-item-icon.styles.js';

export class MEListItemIcon extends MEElement {
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('me-list-item-icon', MEListItemIcon);
