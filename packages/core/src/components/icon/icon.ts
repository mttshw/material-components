import { MEElement } from '../../base/me-element.js';
import sheet from './icon.styles.js';

export class MEIcon extends MEElement {
  static observedAttributes = ['color', 'font-size'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.setAttribute('aria-hidden', 'true');
    this.shadow.innerHTML = `<slot></slot>`;
  }
}
