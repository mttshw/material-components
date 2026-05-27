const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: flex;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }

  .me-pagination {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    gap: 4px;
  }

  /* Individual page item */
  .me-pagination__item {
    display: inline-flex;
  }

  .me-pagination__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    background: transparent;
    padding: 0;
    border-radius: 50%;
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: var(--me-typography-fontWeightRegular, 400);
    line-height: 1.43;
    letter-spacing: 0.01071em;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    transition: color 200ms, background-color 200ms;
    min-width: 32px;
    height: 32px;
    margin: 0 1px;
  }

  :host([size="small"]) .me-pagination__btn { min-width: 26px; height: 26px; font-size: 0.8125rem; }
  :host([size="large"]) .me-pagination__btn { min-width: 40px; height: 40px; font-size: 0.9375rem; }

  .me-pagination__btn:hover {
    background-color: var(--me-palette-action-hover, rgba(0,0,0,0.04));
  }

  /* Outlined variant */
  :host([variant="outlined"]) .me-pagination__btn {
    border: 1px solid color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 27%, transparent);
  }

  /* Rounded shape */
  :host([shape="rounded"]) .me-pagination__btn {
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
  }

  /* Selected */
  .me-pagination__btn[aria-current="true"] {
    background-color: var(--_color, var(--me-palette-primary-main, #1976d2));
    color: var(--_contrast, var(--me-palette-primary-contrastText, #fff));
  }
  :host([variant="outlined"]) .me-pagination__btn[aria-current="true"] {
    border-color: var(--_color, var(--me-palette-primary-main, #1976d2));
  }
  :host([variant="text"]) .me-pagination__btn[aria-current="true"] {
    background-color: var(--_color, var(--me-palette-primary-main, #1976d2));
    color: var(--_contrast, var(--me-palette-primary-contrastText, #fff));
  }

  /* Colors */
  :host([color="primary"]) {
    --_color: var(--me-palette-primary-main, #1976d2);
    --_contrast: var(--me-palette-primary-contrastText, #fff);
  }
  :host([color="secondary"]) {
    --_color: var(--me-palette-secondary-main, #9c27b0);
    --_contrast: var(--me-palette-secondary-contrastText, #fff);
  }

  /* Disabled/nav buttons */
  .me-pagination__btn:disabled,
  .me-pagination__btn[disabled] {
    opacity: 0.38;
    cursor: default;
    pointer-events: none;
  }

  /* Ellipsis */
  .me-pagination__ellipsis {
    display: inline-flex;
    align-items: flex-end;
    padding: 0 6px;
    height: 32px;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    letter-spacing: 0.01071em;
    user-select: none;
  }

  /* Nav arrow buttons */
  .me-pagination__nav {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  :host([shape="rounded"]) .me-pagination__nav {
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
  }
  .me-pagination__nav svg { width: 20px; height: 20px; fill: currentColor; }
`);
export default sheet;
