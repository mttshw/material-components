const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: block;
    background-color: var(--mc-palette-background-paper, #fff);
    color: var(--mc-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: calc(var(--mc-shape-borderRadius, 4) * 1px);
    transition: box-shadow var(--mc-transitions-duration-standard, 300ms) var(--mc-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1));
  }
  :host([square]) { border-radius: 0; }

  .mc-paper { width: 100%; height: 100%; }

  /* elevation variant — box-shadow set via inline style on host */
  :host([variant="outlined"]),
  :host([variant="outlined"][elevation]) {
    box-shadow: none !important;
    border: 1px solid var(--mc-palette-divider, rgba(0,0,0,0.12));
  }
`);

export default sheet;
