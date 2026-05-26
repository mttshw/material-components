import { MEElement } from '../../base/me-element.js';
import sheet from './table-row.styles.js';

export class METableRow extends MEElement {
  static observedAttributes = ['selected', 'hover'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('me-table-row', METableRow);
