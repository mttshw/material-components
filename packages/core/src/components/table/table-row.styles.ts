const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: table-row;
    vertical-align: middle;
    outline: 0;
  }
  :host([hover]:hover) {
    background-color: var(--me-palette-action-hover, rgba(0,0,0,0.04));
  }
  :host([selected]) {
    background-color: rgba(25, 118, 210, 0.08);
  }
  :host([selected]:hover) {
    background-color: rgba(25, 118, 210, 0.12);
  }
`);
export default sheet;
