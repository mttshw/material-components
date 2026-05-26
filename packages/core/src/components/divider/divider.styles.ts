const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: block;
    border: none;
    margin: 0;
    flex-shrink: 0;
    border-top: thin solid var(--me-palette-divider, rgba(0,0,0,0.12));
  }

  /* Vertical */
  :host([orientation="vertical"]) {
    border-top: none;
    border-left: thin solid var(--me-palette-divider, rgba(0,0,0,0.12));
    height: auto;
    align-self: stretch;
  }

  /* Variants */
  :host([variant="inset"])  { margin-left: 72px; }
  :host([variant="middle"]) { margin-left: 16px; margin-right: 16px; }

  :host([orientation="vertical"][variant="inset"])  { margin-top: 72px; margin-left: 0; }
  :host([orientation="vertical"][variant="middle"]) { margin-top: 16px; margin-bottom: 16px; margin-left: 0; }

  /* Light */
  :host([light]) {
    border-color: rgba(0,0,0,0.08);
  }
`);

export default sheet;
