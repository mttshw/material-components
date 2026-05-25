import { MCElement } from '../../base/mc-element.js';
import sheet from './list-item-text.styles.js';

export class MCListItemText extends MCElement {
  static observedAttributes = ['primary', 'secondary', 'inset'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    const primary = this.getAttribute('primary') ?? '';
    const secondary = this.getAttribute('secondary') ?? '';

    this.shadow.innerHTML = `
      <span class="mc-list-item-text__primary">
        ${primary ? primary : '<slot name="primary"><slot></slot></slot>'}
      </span>
      ${secondary ? `<span class="mc-list-item-text__secondary">${secondary}</span>` : '<slot name="secondary"></slot>'}
    `;
  }
}

customElements.define('mc-list-item-text', MCListItemText);
