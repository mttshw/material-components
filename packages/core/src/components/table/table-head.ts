import { MCElement } from '../../base/mc-element.js';

const sheet = new CSSStyleSheet();
sheet.replaceSync(`:host { display: table-header-group; }`);

export class MCTableHead extends MCElement {
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }
  protected render(): void { this.shadow.innerHTML = `<slot></slot>`; }
}

customElements.define('mc-table-head', MCTableHead);
