import { MCElement } from '../../base/mc-element.js';
import sheet from './table.styles.js';

export class MCTable extends MCElement {
  static observedAttributes = ['size', 'stickyHeader'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('mc-table', MCTable);
