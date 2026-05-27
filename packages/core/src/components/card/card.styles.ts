const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: block;
    background-color: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    overflow: hidden;
    box-shadow: var(--me-shadows-1,
      0px 2px 1px -1px rgba(0,0,0,0.2),
      0px 1px 1px 0px rgba(0,0,0,0.14),
      0px 1px 3px 0px rgba(0,0,0,0.12));
    transition: box-shadow var(--me-transitions-duration-standard, 300ms) var(--me-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1));
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }

  :host([variant="outlined"]) {
    box-shadow: none;
    border: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
  }

  :host([raised]) {
    box-shadow: var(--me-shadows-8,
      0px 5px 5px -3px rgba(0,0,0,0.2),
      0px 8px 10px 1px rgba(0,0,0,0.14),
      0px 3px 14px 2px rgba(0,0,0,0.12));
  }
`);
export default sheet;
