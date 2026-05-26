import { MEElement } from '../../base/me-element.js';
import sheet from './list-item.styles.js';

export class MEListItem extends MEElement {
  static observedAttributes = ['disablePadding', 'disableGutters', 'divider', 'alignItems'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('me-list-item', MEListItem);
