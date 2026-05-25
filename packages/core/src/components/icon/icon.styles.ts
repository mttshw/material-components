const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;   /* medium default */
    width: 1em;
    height: 1em;
    overflow: hidden;
    flex-shrink: 0;
    user-select: none;
    color: inherit;
    fill: currentColor;
  }

  /* Font sizes */
  :host([font-size="inherit"]) { font-size: inherit; }
  :host([font-size="small"])   { font-size: 1.25rem; }
  :host([font-size="medium"])  { font-size: 1.5rem; }
  :host([font-size="large"])   { font-size: 2.1875rem; }

  /* Colors */
  :host([color="primary"])   { color: var(--mc-palette-primary-main); }
  :host([color="secondary"]) { color: var(--mc-palette-secondary-main); }
  :host([color="action"])    { color: var(--mc-palette-action-active, rgba(0,0,0,0.54)); }
  :host([color="error"])     { color: var(--mc-palette-error-main); }
  :host([color="disabled"])  { color: var(--mc-palette-action-disabled, rgba(0,0,0,0.26)); }
  :host([color="inherit"])   { color: inherit; }

  /* SVG children fill with currentColor */
  ::slotted(svg) {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: block;
  }
`);

export default sheet;
