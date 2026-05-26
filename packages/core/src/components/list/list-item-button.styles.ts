const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: block;
    width: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    outline: 0;
    border: 0;
    background: transparent;
    text-decoration: none;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    box-sizing: border-box;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  :host(:hover) {
    background-color: var(--me-palette-action-hover, rgba(0,0,0,0.08));
  }
  :host([selected]) {
    background-color: var(--me-palette-action-selected, rgba(0,0,0,0.08));
    color: var(--me-palette-primary-main, #1976d2);
  }
  :host([selected]:hover) {
    background-color: rgba(25, 118, 210, 0.12);
  }
  :host([disabled]) {
    opacity: 0.38;
    pointer-events: none;
  }
  :host([divider]) {
    border-bottom: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
  }

  .root {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: calc(8px - (4px * var(--me-list-dense, 0))) 16px;
    width: 100%;
    text-align: left;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 1rem;
  }
  :host([alignItems="flex-start"]) .root { align-items: flex-start; }
  :host([disableGutters]) .root { padding-left: 0; padding-right: 0; }

  slot[name="start"] {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
  }
  slot:not([name]) {
    display: flex;
    flex: 1;
    min-width: 0;
  }
`);

export const rippleSheet = new CSSStyleSheet();
rippleSheet.replaceSync(`
  @keyframes me-ripple { to { transform: scale(1); opacity: 0; } }
  .me-ripple-wave {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    transform: scale(0);
    animation: me-ripple 550ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    background-color: currentColor;
    opacity: 0.2;
  }
`);

export default sheet;
