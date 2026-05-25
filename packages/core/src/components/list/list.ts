import { MCElement } from '../../base/mc-element.js';
import sheet from './list.styles.js';

export class MCList extends MCElement {
  static observedAttributes = ['dense', 'disablePadding'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('mc-list', MCList);
