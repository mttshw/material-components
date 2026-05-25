import { MCElement } from '../../base/mc-element.js';
import sheet from './container.styles.js';

export class MCContainer extends MCElement {
  static observedAttributes = ['max-width', 'fixed'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `<div class="mc-container"><slot></slot></div>`;
  }
}
