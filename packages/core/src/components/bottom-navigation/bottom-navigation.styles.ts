const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    background-color: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    box-shadow: var(--me-shadows-8,
      0px 5px 5px -3px rgba(0,0,0,0.2),
      0px 8px 10px 1px rgba(0,0,0,0.14),
      0px 3px 14px 2px rgba(0,0,0,0.12));
    /* Shadow goes upward */
    box-shadow: 0px -2px 4px -1px rgba(0,0,0,0.2),
                0px -4px 5px 0px rgba(0,0,0,0.14),
                0px -1px 10px 0px rgba(0,0,0,0.12);
    min-height: 56px;
  }

  :host([show-labels]) ::slotted(me-bottom-nav-action) {
    --_show-label: 1;
  }

  .me-bottom-navigation {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`);
export default sheet;
