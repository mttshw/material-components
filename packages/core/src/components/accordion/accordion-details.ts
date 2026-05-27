import { MEElement } from '../../base/me-element.js';
import sheet from './accordion-details.styles.js';

export class MEAccordionDetails extends MEElement {
  static observedAttributes = ['expanded'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    // CSS grid trick handles open/close — only build DOM once.
    if (this.shadow.querySelector('.me-accordion-details')) return;
    this.shadow.innerHTML = `<div class="me-accordion-details"><slot></slot></div>`;
  }
}

customElements.define('me-accordion-details', MEAccordionDetails);
