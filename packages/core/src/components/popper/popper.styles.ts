const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: none;
    position: fixed;
    z-index: var(--me-zIndex-tooltip, 1500);
  }
  :host([open]) { display: block; }
`);
export default sheet;
