import { MCElement } from '../../base/mc-element.js';
import sheet from './stack.styles.js';

export class MCStack extends MCElement {
  static observedAttributes = ['direction', 'spacing', 'align', 'justify', 'flex-wrap'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    const spacing = this.getAttribute('spacing');
    if (spacing !== null) {
      const gap = isNaN(Number(spacing))
        ? spacing
        : `calc(var(--mc-spacing, 8px) * ${spacing})`;
      this.style.setProperty('gap', gap);
    } else {
      this.style.removeProperty('gap');
    }
    this.shadow.innerHTML = `<slot></slot>`;
  }
}
