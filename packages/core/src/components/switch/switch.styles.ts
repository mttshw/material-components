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
    --_color: var(--me-palette-primary-main, #1976d2);
  }
  :host([color="secondary"]) { --_color: var(--me-palette-secondary-main, #9c27b0); }
  :host([color="error"])     { --_color: var(--me-palette-error-main, #d32f2f); }
  :host([color="warning"])   { --_color: var(--me-palette-warning-main, #ed6c02); }
  :host([color="info"])      { --_color: var(--me-palette-info-main, #0288d1); }
  :host([color="success"])   { --_color: var(--me-palette-success-main, #2e7d32); }

  :host([disabled]) { cursor: default; opacity: 0.38; pointer-events: none; }

  .me-switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 58px;
    height: 38px;
    padding: 9px;
    box-sizing: border-box;
  }

  .me-switch__input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: inherit;
    z-index: 1;
  }

  .me-switch__track {
    width: 34px;
    height: 14px;
    border-radius: 7px;
    background-color: color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 44%, transparent);
    transition: background-color 150ms cubic-bezier(0.4,0,0.2,1);
    position: relative;
  }

  :host([checked]) .me-switch__track {
    background-color: color-mix(in srgb, var(--_color) 50%, transparent);
  }

  .me-switch__thumb-wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: left 150ms cubic-bezier(0.4,0,0.2,1);
  }

  :host([checked]) .me-switch__thumb-wrapper {
    left: 14px;
  }

  .me-switch__thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fafafa;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: background-color 150ms cubic-bezier(0.4,0,0.2,1);
  }

  :host([checked]) .me-switch__thumb {
    background-color: var(--_color);
  }

  .me-switch__ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    overflow: hidden;
  }

  .me-switch__thumb-wrapper:hover .me-switch__ripple {
    background-color: var(--me-palette-action-hover, rgba(0,0,0,0.04));
  }

  :host([checked]) .me-switch__thumb-wrapper:hover .me-switch__ripple {
    background-color: color-mix(in srgb, var(--_color) 8%, transparent);
  }

  :host(:focus-visible) .me-switch__ripple {
    background-color: color-mix(in srgb, var(--_color) 12%, transparent);
  }
`);
export default sheet;
export { rippleSheet } from '../../utils/ripple.js';
