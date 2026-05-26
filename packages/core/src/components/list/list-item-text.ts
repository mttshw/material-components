import { MEElement } from '../../base/me-element.js';
import sheet from './list-item-text.styles.js';

export class MEListItemText extends MEElement {
  static observedAttributes = ['primary', 'secondary', 'inset'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    const primary = this.getAttribute('primary') ?? '';
    const secondary = this.getAttribute('secondary') ?? '';

    this.shadow.innerHTML = `
      <span class="me-list-item-text__primary">
        ${primary ? primary : '<slot name="primary"><slot></slot></slot>'}
      </span>
      ${secondary ? `<span class="me-list-item-text__secondary">${secondary}</span>` : '<slot name="secondary"></slot>'}
    `;
  }
}

customElements.define('me-list-item-text', MEListItemText);
