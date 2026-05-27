import { rippleSheet } from '../../utils/ripple.js';

const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    flex-shrink: 0;
    outline: 0;
  }

  .me-tab {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    background: transparent;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    padding: 12px 16px;
    min-width: 90px;
    max-width: 360px;
    min-height: 48px;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.875rem;
    font-weight: var(--me-typography-fontWeightMedium, 500);
    line-height: 1.25;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    color: inherit;
    opacity: 0.7;
    transition: color 200ms, opacity 200ms;
    white-space: nowrap;
  }

  :host([selected]) .me-tab {
    opacity: 1;
  }

  :host([disabled]) .me-tab {
    opacity: 0.38;
    cursor: default;
    pointer-events: none;
  }

  .me-tab:focus-visible {
    background-color: var(--me-palette-action-focus, rgba(0,0,0,0.12));
    outline: none;
  }

  .me-tab__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    width: 24px;
    height: 24px;
  }
  .me-tab__icon [hidden] { display: none !important; }
`);

export { rippleSheet };
export default sheet;
