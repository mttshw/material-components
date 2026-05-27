import { MEElement } from '../../base/me-element.js';
import sheet from './toolbar.styles.js';

export class METoolbar extends MEElement {
  static observedAttributes = ['variant', 'disable-gutters'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('me-toolbar', METoolbar);
