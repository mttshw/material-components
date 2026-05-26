import { MEElement } from '../../base/me-element.js';
import sheet from './paper.styles.js';

export class MEPaper extends MEElement {
  static observedAttributes = ['elevation', 'variant', 'square'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    const variant = this.getAttribute('variant') ?? 'elevation';
    const elevation = Math.max(0, Math.min(24, parseInt(this.getAttribute('elevation') ?? '1')));

    // Set elevation as inline box-shadow; CSS overrides this for outlined variant
    if (variant !== 'outlined') {
      this.style.boxShadow = `var(--me-shadows-${elevation})`;
    } else {
      this.style.removeProperty('box-shadow');
    }

    this.shadow.innerHTML = `<div class="me-paper"><slot></slot></div>`;
  }
}
