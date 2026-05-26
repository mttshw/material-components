const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: table;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.875rem;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
  }
  :host([size="small"]) { font-size: 0.8125rem; }
  :host([stickyHeader]) { border-collapse: separate; }
`);
export default sheet;
