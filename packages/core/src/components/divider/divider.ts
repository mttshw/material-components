import { MCElement } from '../../base/mc-element.js';
import sheet from './divider.styles.js';

export class MCDivider extends MCElement {
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
