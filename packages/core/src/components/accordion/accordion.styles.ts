const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: block;
    position: relative;
    background-color: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    box-shadow: var(--me-shadows-1,
      0px 2px 1px -1px rgba(0,0,0,0.2),
      0px 1px 1px 0px rgba(0,0,0,0.14),
      0px 1px 3px 0px rgba(0,0,0,0.12));
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    margin-bottom: var(--me-accordion-gap, 16px);
  }

  /* Separator line between stacked accordions */
  :host::before {
    content: '';
    position: absolute;
    left: 0;
    top: -1px;
    right: 0;
    height: 1px;
    background-color: var(--me-palette-divider, rgba(0,0,0,0.12));
    opacity: 1;
    transition: opacity 150ms cubic-bezier(0.4,0,0.2,1);
  }

  :host(:first-child)::before,
  :host([expanded])::before {
    opacity: 0;
  }

  :host([disabled]) {
    background-color: color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 7%, transparent);
  }
`);
export default sheet;
