import { MEElement } from '../../base/me-element.js';
import sheet from './list.styles.js';

export class MEList extends MEElement {
  static observedAttributes = ['dense', 'disablePadding'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('me-list', MEList);
