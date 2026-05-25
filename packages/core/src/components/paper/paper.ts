import { MCElement } from '../../base/mc-element.js';
import sheet from './paper.styles.js';

export class MCPaper extends MCElement {
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
      this.style.boxShadow = `var(--mc-shadows-${elevation})`;
    } else {
      this.style.removeProperty('box-shadow');
    }

    this.shadow.innerHTML = `<div class="mc-paper"><slot></slot></div>`;
  }
}
