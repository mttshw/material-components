import { MEElement } from '../../base/me-element.js';
import sheet from './table-cell.styles.js';

export class METableCell extends MEElement {
  static observedAttributes = ['variant', 'align', 'padding'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('me-table-cell', METableCell);
