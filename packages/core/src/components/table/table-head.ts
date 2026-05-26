import { MEElement } from '../../base/me-element.js';

const sheet = new CSSStyleSheet();
sheet.replaceSync(`:host { display: table-header-group; }`);

export class METableHead extends MEElement {
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }
  protected render(): void { this.shadow.innerHTML = `<slot></slot>`; }
}

customElements.define('me-table-head', METableHead);
