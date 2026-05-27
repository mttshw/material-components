import { MEElement } from '../../base/me-element.js';
import sheet from './card-actions.styles.js';

export class MECardActions extends MEElement {
  static observedAttributes = ['disable-spacing'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    if (this.shadow.querySelector('slot')) return;
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('me-card-actions', MECardActions);
