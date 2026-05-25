import { MCElement } from '../../base/mc-element.js';
import sheet from './icon.styles.js';

export class MCIcon extends MCElement {
  static observedAttributes = ['color', 'font-size'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
    this.setAttribute('aria-hidden', 'true');
  }

  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}
