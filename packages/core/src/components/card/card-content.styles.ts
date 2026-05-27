const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: block;
    padding: 16px;
  }
  :host(:last-child) {
    padding-bottom: 24px;
  }
`);
export default sheet;
