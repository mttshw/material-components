import { MCElement } from '../../base/mc-element.js';
import sheet from './list-item-icon.styles.js';

export class MCListItemIcon extends MCElement {
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('mc-list-item-icon', MCListItemIcon);
