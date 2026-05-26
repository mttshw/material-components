const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    min-width: 0;
    vertical-align: top;
    --_primary: var(--me-palette-primary-main, #1976d2);
    --_error: var(--me-palette-error-main, #d32f2f);
    --_text: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    --_secondary-text: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    --_border: color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 27%, transparent);
    --_bg: color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 7%, transparent);
    --_active-color: var(--_primary);
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }
  :host([color="secondary"]) { --_active-color: var(--me-palette-secondary-main, #9c27b0); }
  :host([error])             { --_active-color: var(--_error); }
  :host([disabled])          { opacity: 0.38; pointer-events: none; }

  /* ── SELECT WRAPPER ── */
  .me-select {
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    cursor: pointer;
  }

  /* ── NATIVE SELECT ── */
  .me-select__native {
    box-sizing: border-box;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.4375em;
    color: var(--_text);
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    padding-right: 32px;
  }

  /* ── ARROW ── */
  .me-select__arrow {
    position: absolute;
    pointer-events: none;
    color: var(--_secondary-text);
    display: flex;
    align-items: center;
  }
  :host([variant="filled"]) .me-select__arrow,
  :host([variant="outlined"]) .me-select__arrow { right: 14px; }
  :host([variant="standard"]) .me-select__arrow,
  :host(:not([variant])) .me-select__arrow { right: 0; }
  .me-select__arrow svg { fill: currentColor; width: 24px; height: 24px; }

  /* ── FILLED ── */
  :host([variant="filled"]) .me-select {
    background-color: var(--_bg);
    border-radius: 4px 4px 0 0;
  }
  :host([variant="filled"]) .me-select::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background-color: color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 48%, transparent);
    pointer-events: none;
  }
  :host([variant="filled"]) .me-select::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background-color: var(--_active-color);
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0,0,0.2,1);
  }
  :host(.me-select--focused[variant="filled"]) .me-select::after { transform: scaleX(1); }
  :host([variant="filled"]) .me-select__native { padding: 25px 32px 8px 12px; }

  /* ── OUTLINED ── */
  :host([variant="outlined"]) .me-select { border-radius: 4px; }

  .me-notched-outline {
    display: none;
    position: absolute;
    top: -5px; right: 0; bottom: 0; left: 0;
    pointer-events: none;
  }
  :host([variant="outlined"]) .me-notched-outline { display: flex; }

  .me-notched-outline__leading {
    width: 9px;
    border: 1px solid var(--_border);
    border-right: none;
    border-radius: 4px 0 0 4px;
    transition: border-color 200ms, border-width 0ms;
    flex-shrink: 0;
  }
  .me-notched-outline__notch {
    border: 1px solid var(--_border);
    border-left: none;
    border-right: none;
    transition: border-color 200ms, border-top-color 0ms, border-width 0ms;
    flex-shrink: 0;
  }
  .me-notched-outline__trailing {
    flex: 1;
    border: 1px solid var(--_border);
    border-left: none;
    border-radius: 0 4px 4px 0;
    transition: border-color 200ms, border-width 0ms;
  }

  :host(.me-select--floating[variant="outlined"]) .me-notched-outline__notch {
    border-top-color: transparent;
  }
  :host(.me-select--focused[variant="outlined"]) .me-notched-outline__leading,
  :host(.me-select--focused[variant="outlined"]) .me-notched-outline__notch,
  :host(.me-select--focused[variant="outlined"]) .me-notched-outline__trailing {
    border-color: var(--_active-color);
    border-width: 2px;
  }
  :host(.me-select--focused.me-select--floating[variant="outlined"]) .me-notched-outline__notch {
    border-top-color: transparent;
  }
  :host([error][variant="outlined"]) .me-notched-outline__leading,
  :host([error][variant="outlined"]) .me-notched-outline__notch,
  :host([error][variant="outlined"]) .me-notched-outline__trailing {
    border-color: var(--_error);
  }
  :host([error].me-select--floating[variant="outlined"]) .me-notched-outline__notch {
    border-top-color: transparent;
  }

  :host([variant="outlined"]) .me-select__native { padding: 16.5px 32px 16.5px 14px; }

  /* ── STANDARD ── */
  :host([variant="standard"]) .me-select,
  :host(:not([variant])) .me-select {
    margin-top: 16px;
    border-bottom: 1px solid color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 48%, transparent);
  }
  :host([variant="standard"]) .me-select::after,
  :host(:not([variant])) .me-select::after {
    content: '';
    position: absolute;
    bottom: -1px; left: 0; right: 0;
    height: 2px;
    background-color: var(--_active-color);
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0,0,0.2,1);
  }
  :host(.me-select--focused[variant="standard"]) .me-select::after,
  :host(.me-select--focused:not([variant])) .me-select::after { transform: scaleX(1); }
  :host([variant="standard"]) .me-select__native,
  :host(:not([variant])) .me-select__native { padding: 4px 24px 5px 0; }

  /* ── LABEL ──
     Positioned relative to :host (position:relative).
     Lives outside .me-select so the border/background never intersect it. */
  .me-select__label {
    position: absolute;
    left: 0;
    top: 0;
    color: var(--_secondary-text);
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.4375em;
    pointer-events: none;
    transform-origin: top left;
    transition: color 200ms cubic-bezier(0,0,0.2,1), transform 200ms cubic-bezier(0,0,0.2,1);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 24px);
    z-index: 1;
  }

  /* Filled */
  :host([variant="filled"]) .me-select__label {
    transform: translate(12px, 20px) scale(1);
  }
  :host(.me-select--floating[variant="filled"]) .me-select__label {
    transform: translate(12px, 7px) scale(0.75);
  }
  :host(.me-select--focused[variant="filled"]) .me-select__label { color: var(--_active-color); }

  /* Outlined */
  :host([variant="outlined"]) .me-select__label {
    transform: translate(14px, 16px) scale(1);
  }
  :host(.me-select--floating[variant="outlined"]) .me-select__label {
    transform: translate(14px, -13px) scale(0.75);
  }
  :host(.me-select--focused[variant="outlined"]) .me-select__label { color: var(--_active-color); }

  /* Standard */
  :host([variant="standard"]) .me-select__label,
  :host(:not([variant])) .me-select__label {
    transform: translate(0, 20px) scale(1);
  }
  :host(.me-select--floating[variant="standard"]) .me-select__label,
  :host(.me-select--floating:not([variant])) .me-select__label {
    transform: translate(0, -1.5px) scale(0.75);
  }
  :host(.me-select--focused[variant="standard"]) .me-select__label,
  :host(.me-select--focused:not([variant])) .me-select__label { color: var(--_active-color); }

  :host([error]) .me-select__label { color: var(--_error); }

  /* ── HELPER ── */
  .me-select__helper {
    font-family: inherit;
    font-size: 0.75rem;
    line-height: 1.66;
    color: var(--_secondary-text);
    margin: 3px 0 0;
    min-height: 1.25em;
  }
  :host([error]) .me-select__helper { color: var(--_error); }
`);
export default sheet;
