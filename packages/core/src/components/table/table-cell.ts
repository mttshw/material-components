import { MCElement } from '../../base/mc-element.js';
import sheet from './table-cell.styles.js';

export class MCTableCell extends MCElement {
  static observedAttributes = ['variant', 'align', 'padding'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('mc-table-cell', MCTableCell);
