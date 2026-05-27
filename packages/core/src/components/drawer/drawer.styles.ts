const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host { display: contents; }

  /* Backdrop */
  .me-drawer__backdrop {
    position: fixed;
    inset: 0;
    z-index: var(--me-zIndex-drawer, 1200);
    background-color: rgba(0,0,0,0.5);
    opacity: 0;
    transition: opacity 225ms cubic-bezier(0.4,0,0.2,1);
    pointer-events: none;
  }
  :host([open]:not([variant="permanent"]):not([variant="persistent"])) .me-drawer__backdrop {
    opacity: 1;
    pointer-events: auto;
  }

  /* Paper */
  .me-drawer__paper {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: calc(var(--me-zIndex-drawer, 1200) + 1);
    width: 256px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    box-shadow: var(--me-shadows-16,
      0px 8px 10px -5px rgba(0,0,0,0.2),
      0px 16px 24px 2px rgba(0,0,0,0.14),
      0px 6px 30px 5px rgba(0,0,0,0.12));
    transition: transform 225ms cubic-bezier(0,0,0.2,1);
    will-change: transform;
    outline: 0;
    box-sizing: border-box;
  }

  /* Left (default) */
  :host(:not([anchor])) .me-drawer__paper,
  :host([anchor="left"]) .me-drawer__paper {
    left: 0;
    right: auto;
    transform: translateX(-100%);
  }
  :host([open]:not([anchor])) .me-drawer__paper,
  :host([open][anchor="left"]) .me-drawer__paper {
    transform: translateX(0);
  }

  /* Right */
  :host([anchor="right"]) .me-drawer__paper {
    right: 0;
    left: auto;
    transform: translateX(100%);
  }
  :host([open][anchor="right"]) .me-drawer__paper {
    transform: translateX(0);
  }

  /* Top */
  :host([anchor="top"]) .me-drawer__paper {
    top: 0;
    bottom: auto;
    left: 0;
    width: 100%;
    height: auto;
    max-height: 100vh;
    transform: translateY(-100%);
  }
  :host([open][anchor="top"]) .me-drawer__paper {
    transform: translateY(0);
  }

  /* Bottom */
  :host([anchor="bottom"]) .me-drawer__paper {
    bottom: 0;
    top: auto;
    left: 0;
    width: 100%;
    height: auto;
    max-height: 100vh;
    transform: translateY(100%);
  }
  :host([open][anchor="bottom"]) .me-drawer__paper {
    transform: translateY(0);
  }

  /* Permanent & persistent: no backdrop, no transform, no shadow */
  :host([variant="permanent"]) .me-drawer__paper,
  :host([variant="persistent"]) .me-drawer__paper {
    position: relative;
    top: auto;
    bottom: auto;
    height: 100%;
    transform: none;
    box-shadow: none;
    border-right: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
  }
  :host([variant="persistent"]) .me-drawer__paper {
    /* persistent can still be opened/closed, just no backdrop */
    position: relative;
  }
`);
export default sheet;
