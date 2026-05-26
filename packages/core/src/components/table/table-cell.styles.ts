const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
    text-align: left;
    padding: 16px;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.5;
    letter-spacing: 0;
  }

  /* head variant */
  :host([variant="head"]) {
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    font-weight: var(--me-typography-fontWeightMedium, 500);
    line-height: 1.5rem;
    background-color: var(--me-palette-background-paper, #fff);
    border-bottom: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
  }

  /* footer variant */
  :host([variant="footer"]) {
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    font-size: 0.75rem;
    border-top: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
    border-bottom: none;
  }

  /* align */
  :host([align="center"]) { text-align: center; }
  :host([align="right"])  { text-align: right; flex-direction: row-reverse; }
  :host([align="justify"]) { text-align: justify; }

  /* padding */
  :host([padding="checkbox"]) { width: 48px; padding: 0 0 0 4px; }
  :host([padding="none"])     { padding: 0; }

  /* size: small (via me-table[size=small] inherits --me-table-size) */
  :host-context(me-table[size="small"]) { padding: 6px 16px; }
`);
export default sheet;
