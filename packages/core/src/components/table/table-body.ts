import { MCElement } from '../../base/mc-element.js';

const sheet = new CSSStyleSheet();
sheet.replaceSync(`:host { display: table-row-group; }`);

export class MCTableBody extends MCElement {
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }
  protected render(): void { this.shadow.innerHTML = `<slot></slot>`; }
}

customElements.define('mc-table-body', MCTableBody);
