const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    position: relative;
    vertical-align: middle;
    flex-shrink: 0;
    --_color: var(--mc-palette-error-main, #d32f2f);
    --_contrast: var(--mc-palette-error-contrastText, #fff);
  }
  :host([color="primary"]) {
    --_color: var(--mc-palette-primary-main, #1976d2);
    --_contrast: var(--mc-palette-primary-contrastText, #fff);
  }
  :host([color="secondary"]) {
    --_color: var(--mc-palette-secondary-main, #9c27b0);
    --_contrast: var(--mc-palette-secondary-contrastText, #fff);
  }
  :host([color="success"]) {
    --_color: var(--mc-palette-success-main, #2e7d32);
    --_contrast: var(--mc-palette-success-contrastText, #fff);
  }
  :host([color="warning"]) {
    --_color: var(--mc-palette-warning-main, #ed6c02);
    --_contrast: var(--mc-palette-warning-contrastText, #fff);
  }
  :host([color="info"]) {
    --_color: var(--mc-palette-info-main, #0288d1);
    --_contrast: var(--mc-palette-info-contrastText, #fff);
  }

  .mc-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0%;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: 10px;
    background-color: var(--_color);
    color: var(--_contrast);
    font-family: var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.75rem;
    font-weight: var(--mc-typography-fontWeightMedium, 500);
    line-height: 1;
    white-space: nowrap;
    box-sizing: border-box;
    z-index: 1;
  }

  /* dot variant */
  :host([variant="dot"]) .mc-badge {
    min-width: 8px;
    width: 8px;
    height: 8px;
    padding: 0;
    border-radius: 50%;
  }

  /* overlap="rectangular" shifts anchor from corner to edge-center */
  :host([overlap="rectangular"]) .mc-badge {
    transform: translate(50%, -50%);
  }
`);
export default sheet;
