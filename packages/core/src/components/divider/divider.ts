import { MEElement } from '../../base/me-element.js';
import sheet from './divider.styles.js';

export class MEDivider extends MEElement {
  static observedAttributes = ['variant', 'orientation', 'light'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
    this.setAttribute('role', 'separator');
  }

  protected render(): void {
    const isVertical = this.getAttribute('orientation') === 'vertical';
    this.setAttribute('aria-orientation', isVertical ? 'vertical' : 'horizontal');
    this.shadow.innerHTML = '';
  }
}
