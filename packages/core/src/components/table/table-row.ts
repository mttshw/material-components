import { MCElement } from '../../base/mc-element.js';
import sheet from './table-row.styles.js';

export class MCTableRow extends MCElement {
  static observedAttributes = ['selected', 'hover'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('mc-table-row', MCTableRow);
