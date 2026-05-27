import { MEElement } from '../../base/me-element.js';
import sheet from './skeleton.styles.js';

export class MESkeleton extends MEElement {
  static observedAttributes = ['variant', 'width', 'height', 'animation'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    const width = this.getAttribute('width');
    const height = this.getAttribute('height');

    const styles: string[] = [];
    if (width)  styles.push(`width: ${width};`);
    if (height) styles.push(`height: ${height};`);

    if (styles.length) {
      this.style.cssText = styles.join(' ');
    }

    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('me-skeleton', MESkeleton);
