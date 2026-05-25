import { MCElement } from '../../base/mc-element.js';
import sheet from './list-item.styles.js';

export class MCListItem extends MCElement {
  static observedAttributes = ['disablePadding', 'disableGutters', 'divider', 'alignItems'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('mc-list-item', MCListItem);
