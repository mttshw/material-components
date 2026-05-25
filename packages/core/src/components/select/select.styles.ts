const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    min-width: 0;
    vertical-align: top;
    --_primary: var(--mc-palette-primary-main, #1976d2);
    --_error: var(--mc-palette-error-main, #d32f2f);
    --_text: var(--mc-palette-text-primary, rgba(0,0,0,0.87));
    --_secondary-text: var(--mc-palette-text-secondary, rgba(0,0,0,0.6));
    --_border: rgba(0,0,0,0.23);
    --_bg: rgba(0,0,0,0.06);
    --_active-color: var(--_primary);
    font-family: var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }
  :host([color="secondary"]) { --_active-color: var(--mc-palette-secondary-main, #9c27b0); }
  :host([error]) { --_active-color: var(--_error); }
  :host([disabled]) { opacity: 0.38; pointer-events: none; }

  .mc-select {
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
  }

  .mc-select__native {
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

  .mc-select__arrow {
    position: absolute;
    right: 0;
    pointer-events: none;
    color: var(--_secondary-text);
    display: flex;
    align-items: center;
  }
  :host([variant="filled"]) .mc-select__arrow,
  :host([variant="outlined"]) .mc-select__arrow { right: 14px; }
  :host(:not([variant])) .mc-select__arrow,
  :host([variant="standard"]) .mc-select__arrow { right: 0; }

  .mc-select__arrow svg { fill: currentColor; width: 24px; height: 24px; }

  /* Filled */
  :host([variant="filled"]) .mc-select {
    background-color: var(--_bg);
    border-radius: 4px 4px 0 0;
  }
  :host([variant="filled"]) .mc-select::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: rgba(0,0,0,0.42);
    pointer-events: none;
  }
  :host([variant="filled"]) .mc-select--focused::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: var(--_active-color);
  }
  :host([variant="filled"]) .mc-select__native { padding: 25px 32px 8px 12px; }

  /* Outlined */
  :host([variant="outlined"]) .mc-select {
    border-radius: 4px;
  }
  .mc-notched-outline { display: none; position: absolute; inset: 0; pointer-events: none; }
  :host([variant="outlined"]) .mc-notched-outline { display: flex; }
  .mc-notched-outline__leading {
    width: 12px;
    border: 1px solid var(--_border);
    border-right: none;
    border-radius: 4px 0 0 4px;
    transition: border-color 200ms;
  }
  .mc-notched-outline__notch {
    flex: 0 0 auto;
    border: 1px solid var(--_border);
    border-left: none;
    border-right: none;
    transition: border-color 200ms;
    padding: 0 4px;
  }
  .mc-notched-outline__trailing {
    flex: 1;
    border: 1px solid var(--_border);
    border-left: none;
    border-radius: 0 4px 4px 0;
    transition: border-color 200ms;
  }
  .mc-notched-outline__notch--open { border-top-color: transparent; }
  :host([variant="outlined"]) .mc-select--focused .mc-notched-outline__leading,
  :host([variant="outlined"]) .mc-select--focused .mc-notched-outline__notch,
  :host([variant="outlined"]) .mc-select--focused .mc-notched-outline__trailing {
    border-color: var(--_active-color);
    border-width: 2px;
  }
  :host([variant="outlined"]) .mc-select--focused .mc-notched-outline__notch--open {
    border-top-color: transparent;
  }
  :host([variant="outlined"]) .mc-select__native { padding: 16.5px 32px 16.5px 14px; }

  /* Standard */
  :host([variant="standard"]) .mc-select,
  :host(:not([variant])) .mc-select {
    border-bottom: 1px solid rgba(0,0,0,0.42);
  }
  :host([variant="standard"]) .mc-select--focused::after,
  :host(:not([variant])) .mc-select--focused::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: var(--_active-color);
  }
  :host([variant="standard"]) .mc-select__native,
  :host(:not([variant])) .mc-select__native { padding: 4px 24px 5px 0; }

  /* Label */
  .mc-select__label {
    position: absolute;
    left: 0;
    top: 0;
    color: var(--_secondary-text);
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.4375em;
    pointer-events: none;
    transform-origin: top left;
    transition: color 200ms, transform 200ms;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 1;
  }
  :host([variant="filled"]) .mc-select__label { transform: translate(12px, 20px) scale(1); }
  :host([variant="filled"]) .mc-select--floating .mc-select__label { transform: translate(12px, 7px) scale(0.75); }
  :host([variant="outlined"]) .mc-select__label { transform: translate(14px, -50%) translateY(50%) translateY(16px) scale(1); }
  :host([variant="outlined"]) .mc-select--floating .mc-select__label { transform: translate(14px, -50%) scale(0.75); }
  :host([variant="standard"]) .mc-select__label,
  :host(:not([variant])) .mc-select__label { transform: translate(0, 20px) scale(1); }
  :host([variant="standard"]) .mc-select--floating .mc-select__label,
  :host(:not([variant])) .mc-select--floating .mc-select__label { transform: translate(0, -1.5px) scale(0.75); }
  .mc-select--focused .mc-select__label { color: var(--_active-color); }
  :host([error]) .mc-select__label { color: var(--_error); }

  /* Helper */
  .mc-select__helper {
    font-family: inherit;
    font-size: 0.75rem;
    line-height: 1.66;
    color: var(--_secondary-text);
    margin: 3px 14px 0;
    min-height: 1.25em;
  }
  :host([error]) .mc-select__helper { color: var(--_error); }

  /* Hidden slot for option sync */
  .mc-select__slot { display: none; }
`);
export default sheet;
