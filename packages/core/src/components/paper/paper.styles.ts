const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: block;
    background-color: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    transition: box-shadow var(--me-transitions-duration-standard, 300ms) var(--me-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1));
  }
  :host([square]) { border-radius: 0; }

  .me-paper { width: 100%; height: 100%; }

  /* elevation variant — box-shadow set via inline style on host */
  :host([variant="outlined"]),
  :host([variant="outlined"][elevation]) {
    box-shadow: none !important;
    border: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
  }
`);

export default sheet;
