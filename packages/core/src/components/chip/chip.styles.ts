const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    border-radius: 16px;
    box-sizing: border-box;
    font-family: var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.8125rem;
    font-weight: var(--mc-typography-fontWeightRegular, 400);
    cursor: default;
    outline: 0;
    vertical-align: middle;
    text-decoration: none;
    --_color: var(--mc-palette-primary-main, #1976d2);
    --_color-light: rgba(25, 118, 210, 0.12);
  }
  :host([color="secondary"]) {
    --_color: var(--mc-palette-secondary-main, #9c27b0);
    --_color-light: rgba(156, 39, 176, 0.12);
  }
  :host([color="error"]) {
    --_color: var(--mc-palette-error-main, #d32f2f);
    --_color-light: rgba(211, 47, 47, 0.12);
  }
  :host([color="success"]) {
    --_color: var(--mc-palette-success-main, #2e7d32);
    --_color-light: rgba(46, 125, 50, 0.12);
  }
  :host([color="warning"]) {
    --_color: var(--mc-palette-warning-main, #ed6c02);
    --_color-light: rgba(237, 108, 2, 0.12);
  }
  :host([color="info"]) {
    --_color: var(--mc-palette-info-main, #0288d1);
    --_color-light: rgba(2, 136, 209, 0.12);
  }
  :host([size="small"]) { height: 24px; font-size: 0.75rem; }

  /* ── FILLED ── */
  .mc-chip {
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    gap: 4px;
  }
  :host(:not([variant="outlined"])) .mc-chip {
    background-color: var(--mc-palette-action-selected, rgba(0,0,0,0.08));
    padding: 0 12px;
    color: var(--mc-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: inherit;
    width: 100%;
    height: 100%;
  }
  :host([clickable]:not([variant="outlined"])) .mc-chip:hover {
    background-color: rgba(0,0,0,0.12);
  }
  :host([color]:not([color="default"]):not([variant="outlined"])) .mc-chip {
    background-color: var(--_color);
    color: #fff;
  }
  :host([color]:not([color="default"])[clickable]:not([variant="outlined"])) .mc-chip:hover {
    filter: brightness(0.9);
  }

  /* ── OUTLINED ── */
  :host([variant="outlined"]) .mc-chip {
    background-color: transparent;
    border: 1px solid var(--mc-palette-action-disabled, rgba(0,0,0,0.26));
    padding: 0 11px;
    color: var(--mc-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: inherit;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  :host([color]:not([color="default"])[variant="outlined"]) .mc-chip {
    border-color: var(--_color);
    color: var(--_color);
  }
  :host([clickable][variant="outlined"]) .mc-chip:hover {
    background-color: var(--_color-light);
  }

  /* ── DISABLED ── */
  :host([disabled]) { opacity: 0.38; pointer-events: none; }

  /* ── SIZE SMALL inner padding ── */
  :host([size="small"]:not([variant="outlined"])) .mc-chip { padding: 0 8px; }
  :host([size="small"][variant="outlined"]) .mc-chip { padding: 0 7px; }

  /* ── ICONS ── */
  .mc-chip__icon-start,
  .mc-chip__icon-end {
    display: inherit;
    font-size: 18px;
    width: 18px;
    height: 18px;
  }
  :host([size="small"]) .mc-chip__icon-start,
  :host([size="small"]) .mc-chip__icon-end { font-size: 16px; width: 16px; height: 16px; }

  /* ── DELETE BUTTON ── */
  .mc-chip__delete {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    color: inherit;
    opacity: 0.7;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .mc-chip__delete:hover { opacity: 1; background-color: rgba(0,0,0,0.12); }
  .mc-chip__delete svg { width: 14px; height: 14px; fill: currentColor; display: block; }
  :host([size="small"]) .mc-chip__delete { width: 16px; height: 16px; }
`);

export const rippleSheet = new CSSStyleSheet();
rippleSheet.replaceSync(`
  @keyframes mc-ripple { to { transform: scale(1); opacity: 0; } }
  .mc-ripple-wave {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    transform: scale(0);
    animation: mc-ripple 550ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    background-color: currentColor;
    opacity: 0.3;
  }
`);

export default sheet;
