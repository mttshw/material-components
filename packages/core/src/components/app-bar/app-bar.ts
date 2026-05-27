import { MEElement } from '../../base/me-element.js';
import sheet from './app-bar.styles.js';

export class MEAppBar extends MEElement {
  static observedAttributes = ['position', 'color', 'elevation'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('me-app-bar', MEAppBar);
