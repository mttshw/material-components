const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    min-width: 56px;
    flex-shrink: 0;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
  }
  :host([alignItems="flex-start"]) { margin-top: 8px; }
`);
export default sheet;
