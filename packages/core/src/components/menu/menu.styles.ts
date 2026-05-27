const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: contents;
  }

  /* Backdrop */
  .me-menu__backdrop {
    position: fixed;
    inset: 0;
    z-index: var(--me-zIndex-modal, 1300);
    background: transparent;
  }

  /* Paper */
  .me-menu__paper {
    position: fixed;
    z-index: calc(var(--me-zIndex-modal, 1300) + 1);
    min-width: 120px;
    max-width: calc(100vw - 32px);
    max-height: calc(100vh - 32px);
    overflow-y: auto;
    overflow-x: hidden;
    background-color: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    box-shadow: var(--me-shadows-8,
      0px 5px 5px -3px rgba(0,0,0,0.2),
      0px 8px 10px 1px rgba(0,0,0,0.14),
      0px 3px 14px 2px rgba(0,0,0,0.12));
    outline: 0;
    padding: 8px 0;
    transform-origin: top left;
    transition: opacity 200ms cubic-bezier(0.4,0,0.2,1),
                transform 200ms cubic-bezier(0.4,0,0.2,1);
  }

  :host(:not([open])) .me-menu__backdrop,
  :host(:not([open])) .me-menu__paper {
    display: none;
  }
`);
export default sheet;
