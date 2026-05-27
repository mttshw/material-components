const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: flex;
    overflow: hidden;
    min-height: 48px;
    --_indicator-color: var(--me-palette-primary-main, #1976d2);
  }

  :host([indicator-color="secondary"]) {
    --_indicator-color: var(--me-palette-secondary-main, #9c27b0);
  }

  :host([indicator-color="inherit"]) {
    --_indicator-color: currentColor;
  }

  .me-tabs__scroller {
    position: relative;
    display: flex;
    flex: 1;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
  }
  .me-tabs__scroller::-webkit-scrollbar { display: none; }

  .me-tabs__flex {
    display: flex;
    flex-direction: row;
  }

  :host([variant="fullWidth"]) .me-tabs__flex {
    width: 100%;
  }
  :host([variant="fullWidth"]) ::slotted(me-tab) {
    flex: 1;
  }

  :host([centered]) .me-tabs__flex {
    margin: 0 auto;
  }

  .me-tabs__indicator {
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: var(--_indicator-color);
    transition: left 300ms cubic-bezier(0.4,0,0.2,1),
                width 300ms cubic-bezier(0.4,0,0.2,1);
    will-change: left, width;
  }
`);
export default sheet;
