const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: flex;
    align-items: center;
    padding: 8px;
    gap: 8px;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  :host([disable-spacing]) {
    padding: 0;
    gap: 0;
  }
`);
export default sheet;
