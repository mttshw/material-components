const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: flex;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 6px 16px;
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.43;
    width: 100%;
    --_color: #014361;
    --_bg: #e5f6fd;
    --_border: #29b6f6;
    --_icon-color: #0288d1;
  }

  /* ── severity colours ── */
  :host([severity="error"]) {
    --_color: #541313;
    --_bg: #fdeded;
    --_border: #ef5350;
    --_icon-color: #d32f2f;
  }
  :host([severity="warning"]) {
    --_color: #663c00;
    --_bg: #fff4e5;
    --_border: #ff9800;
    --_icon-color: #ed6c02;
  }
  :host([severity="success"]) {
    --_color: #1e4620;
    --_bg: #edf7ed;
    --_border: #4caf50;
    --_icon-color: #2e7d32;
  }
  :host([severity="info"]), :host(:not([severity])) {
    --_color: #014361;
    --_bg: #e5f6fd;
    --_border: #29b6f6;
    --_icon-color: #0288d1;
  }

  /* ── variants ── */
  :host(:not([variant="filled"]):not([variant="outlined"])) {
    background-color: var(--_bg);
    color: var(--_color);
  }
  :host([variant="filled"]) {
    background-color: var(--_icon-color);
    color: #fff;
    --_color: #fff;
  }
  :host([variant="outlined"]) {
    background-color: transparent;
    color: var(--_color);
    border: 1px solid var(--_border);
  }

  .me-alert__icon {
    display: flex;
    margin-right: 12px;
    padding: 7px 0;
    opacity: 0.9;
    color: var(--_icon-color);
    flex-shrink: 0;
  }
  :host([variant="filled"]) .me-alert__icon { color: #fff; }

  .me-alert__icon svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
  }

  .me-alert__content {
    padding: 8px 0;
    flex: 1;
    min-width: 0;
  }

  .me-alert__title {
    font-weight: 600;
    margin-bottom: 4px;
    display: block;
  }
  .me-alert__title:empty { display: none; }

  .me-alert__message { display: block; }

  .me-alert__action {
    display: flex;
    align-items: flex-start;
    padding: 4px 0 0 16px;
    margin-left: auto;
    margin-right: -8px;
  }
  .me-alert__action:empty { display: none; }

  .me-alert__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    opacity: 0.6;
    padding: 4px;
    border-radius: 50%;
    transition: background-color 150ms, opacity 150ms;
    flex-shrink: 0;
  }
  .me-alert__close:hover { opacity: 1; background: rgba(0,0,0,0.08); }
  .me-alert__close svg { width: 18px; height: 18px; fill: currentColor; display: block; }
  :host(:not([closable])) .me-alert__close { display: none; }
`);
export default sheet;
