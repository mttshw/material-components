const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: none;
    position: fixed;
    z-index: var(--me-zIndex-popover, 1200);
  }
  :host([open]) { display: block; }

  .me-popover__paper {
    background: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    box-shadow: var(--me-shadows-8,
      0px 5px 5px -3px rgba(0,0,0,.2),
      0px 8px 10px 1px rgba(0,0,0,.14),
      0px 3px 14px 2px rgba(0,0,0,.12));
    overflow: auto;
    max-width: calc(100vw - 32px);
    max-height: calc(100vh - 32px);
    animation: me-popover-in 150ms cubic-bezier(0.4,0,0.2,1);
  }
  @keyframes me-popover-in {
    from { opacity: 0; transform: scale(0.95); }
    to   { opacity: 1; transform: scale(1); }
  }

  .me-popover__backdrop {
    position: fixed;
    inset: 0;
  }
`);
export default sheet;
