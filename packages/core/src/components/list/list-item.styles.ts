const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: calc(8px - (4px * var(--mc-list-dense, 0))) 16px;
    width: 100%;
    position: relative;
    text-align: left;
  }
  :host([disableGutters]) { padding-left: 0; padding-right: 0; }
  :host([disablePadding])  { padding: 0; }
  :host([alignItems="flex-start"]) { align-items: flex-start; }
  :host([divider]) {
    border-bottom: 1px solid var(--mc-palette-divider, rgba(0,0,0,0.12));
  }
`);
export default sheet;
