import { rippleSheet } from '../../utils/ripple.js';

const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: block;
  }

  .me-menu-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    cursor: pointer;
    padding: 6px 16px;
    min-height: 48px;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 1rem;
    font-weight: var(--me-typography-fontWeightRegular, 400);
    line-height: 1.5;
    letter-spacing: 0.00938em;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    text-align: left;
    transition: background-color 150ms;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .me-menu-item:hover {
    background-color: var(--me-palette-action-hover, rgba(0,0,0,0.04));
  }

  :host([selected]) .me-menu-item {
    background-color: var(--me-palette-action-selected, rgba(0,0,0,0.08));
    color: var(--me-palette-primary-main, #1976d2);
  }

  :host([disabled]) .me-menu-item {
    opacity: 0.38;
    pointer-events: none;
    cursor: default;
  }

  .me-menu-item:focus-visible {
    background-color: var(--me-palette-action-focus, rgba(0,0,0,0.12));
    outline: none;
  }

  /* Icon slot */
  .me-menu-item__icon {
    display: inline-flex;
    min-width: 36px;
    flex-shrink: 0;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
  }
`);

export { rippleSheet };
export default sheet;
