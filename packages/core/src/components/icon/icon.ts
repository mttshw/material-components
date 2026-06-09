import { MEElement } from '../../base/me-element.js';
import sheet from './icon.styles.js';
import { getIcon } from '../../utils/icon-registry.js';

export class MEIcon extends MEElement {
  static observedAttributes = ['color', 'font-size', 'name'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.setAttribute('aria-hidden', 'true');
    const name = this.getAttribute('name');
    if (name) {
      const svg = getIcon(name);
      if (svg) {
        this.shadow.innerHTML = svg;
        return;
      }
    }
    this.shadow.innerHTML = `<slot></slot>`;
  }
}
