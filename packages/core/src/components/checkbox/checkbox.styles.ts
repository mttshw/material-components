const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    user-select: none;
    --_color: var(--mc-palette-primary-main, #1976d2);
    --_color-checked: var(--mc-palette-primary-main, #1976d2);
  }
  :host([color="secondary"]) { --_color: var(--mc-palette-secondary-main, #9c27b0); --_color-checked: var(--mc-palette-secondary-main, #9c27b0); }
  :host([color="error"])     { --_color: var(--mc-palette-error-main, #d32f2f);     --_color-checked: var(--mc-palette-error-main, #d32f2f); }
  :host([color="warning"])   { --_color: var(--mc-palette-warning-main, #ed6c02);   --_color-checked: var(--mc-palette-warning-main, #ed6c02); }
  :host([color="info"])      { --_color: var(--mc-palette-info-main, #0288d1);      --_color-checked: var(--mc-palette-info-main, #0288d1); }
  :host([color="success"])   { --_color: var(--mc-palette-success-main, #2e7d32);   --_color-checked: var(--mc-palette-success-main, #2e7d32); }

  :host([disabled]) { cursor: default; opacity: 0.38; pointer-events: none; }

  .mc-checkbox {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    overflow: hidden;
  }

  .mc-checkbox__input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: inherit;
    z-index: 1;
  }

  .mc-checkbox__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    pointer-events: none;
    color: var(--mc-palette-text-secondary, rgba(0,0,0,0.6));
    transition: color 150ms cubic-bezier(0.4,0,0.2,1);
  }

  :host([checked]) .mc-checkbox__icon,
  :host([indeterminate]) .mc-checkbox__icon {
    color: var(--_color-checked);
  }

  .mc-checkbox__icon svg {
    fill: currentColor;
    width: 18px;
    height: 18px;
  }

  .mc-checkbox:hover { background-color: rgba(0,0,0,0.04); }
  :host([checked]) .mc-checkbox:hover,
  :host([indeterminate]) .mc-checkbox:hover { background-color: color-mix(in srgb, var(--_color) 8%, transparent); }

  .mc-checkbox { outline: none; }
  :host(:focus-visible) .mc-checkbox {
    background-color: color-mix(in srgb, var(--_color) 12%, transparent);
  }
`);
export default sheet;
export { rippleSheet } from '../../utils/ripple.js';
