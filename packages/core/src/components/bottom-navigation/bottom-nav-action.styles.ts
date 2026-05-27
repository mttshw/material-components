import { rippleSheet } from '../../utils/ripple.js';

const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    flex: 1;
    min-width: 0;
  }

  .me-bottom-nav-action {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    background: transparent;
    cursor: pointer;
    padding: 6px 12px 8px;
    min-width: 80px;
    max-width: 168px;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    transition: color 200ms, padding 200ms;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }

  :host([selected]) .me-bottom-nav-action {
    padding-top: 6px;
    color: var(--_selected-color, var(--me-palette-primary-main, #1976d2));
  }

  :host([disabled]) .me-bottom-nav-action {
    opacity: 0.38;
    pointer-events: none;
    cursor: default;
  }

  .me-bottom-nav-action__icon {
    display: inline-flex;
    font-size: 24px;
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
    transition: font-size 200ms;
  }

  :host([selected]) .me-bottom-nav-action__icon {
    font-size: 26px;
  }

  .me-bottom-nav-action__label {
    font-size: 0.75rem;
    font-weight: var(--me-typography-fontWeightRegular, 400);
    line-height: 1.66;
    letter-spacing: 0.03333em;
    transition: font-size 200ms, opacity 200ms;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  :host([show-label]:not([selected])) .me-bottom-nav-action__label {
    opacity: 0.7;
  }

  :host(:not([show-label]):not([selected])) .me-bottom-nav-action__label {
    opacity: 0;
    font-size: 0;
  }
`);

export { rippleSheet };
export default sheet;
