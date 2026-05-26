const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    position: relative;
    vertical-align: middle;
    flex-shrink: 0;
    --_color: var(--me-palette-error-main, #d32f2f);
    --_contrast: var(--me-palette-error-contrastText, #fff);
  }
  :host([color="primary"]) {
    --_color: var(--me-palette-primary-main, #1976d2);
    --_contrast: var(--me-palette-primary-contrastText, #fff);
  }
  :host([color="secondary"]) {
    --_color: var(--me-palette-secondary-main, #9c27b0);
    --_contrast: var(--me-palette-secondary-contrastText, #fff);
  }
  :host([color="success"]) {
    --_color: var(--me-palette-success-main, #2e7d32);
    --_contrast: var(--me-palette-success-contrastText, #fff);
  }
  :host([color="warning"]) {
    --_color: var(--me-palette-warning-main, #ed6c02);
    --_contrast: var(--me-palette-warning-contrastText, #fff);
  }
  :host([color="info"]) {
    --_color: var(--me-palette-info-main, #0288d1);
    --_contrast: var(--me-palette-info-contrastText, #fff);
  }

  .me-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 14%;
    right: 14%;
    transform: translate(50%, -50%);
    transform-origin: 100% 0%;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: 10px;
    background-color: var(--_color);
    color: var(--_contrast);
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.75rem;
    font-weight: var(--me-typography-fontWeightMedium, 500);
    line-height: 1;
    white-space: nowrap;
    box-sizing: border-box;
    z-index: 1;
  }

  /* dot variant */
  :host([variant="dot"]) .me-badge {
    min-width: 8px;
    width: 8px;
    height: 8px;
    padding: 0;
    border-radius: 50%;
  }

  /* overlap="rectangular" pins the anchor to the corner (e.g. wrapping a chip or button) */
  :host([overlap="rectangular"]) .me-badge {
    top: 0;
    right: 0;
  }
`);
export default sheet;
