import { MEElement } from '../../base/me-element.js';
import sheet from './table.styles.js';

export class METable extends MEElement {
  static observedAttributes = ['size', 'stickyHeader'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('me-table', METable);
