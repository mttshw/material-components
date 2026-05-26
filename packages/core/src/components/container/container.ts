import { MEElement } from '../../base/me-element.js';
import sheet from './container.styles.js';

export class MEContainer extends MEElement {
  static observedAttributes = ['max-width', 'fixed'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<div class="me-container"><slot></slot></div>`;
  }
}
