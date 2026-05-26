const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: block;
    list-style: none;
    margin: 0;
    padding: 8px 0;
    position: relative;
  }
  :host([disablePadding]) { padding: 0; }
  /* Dense flag propagates to children via CSS custom property inheritance */
  :host([dense]) { --me-list-dense: 1; }
`);
export default sheet;
