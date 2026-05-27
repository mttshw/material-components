import { rippleSheet } from '../../utils/ripple.js';

const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: block;
  }

  .me-accordion-summary {
    display: flex;
    align-items: center;
    min-height: 48px;
    padding: 0 16px;
    width: 100%;
    box-sizing: border-box;
    border: 0;
    background: transparent;
    cursor: pointer;
    outline: 0;
    text-align: left;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 1rem;
    font-weight: var(--me-typography-fontWeightMedium, 500);
    line-height: 1.5;
    letter-spacing: 0.00938em;
    color: inherit;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 150ms cubic-bezier(0.4,0,0.2,1),
                min-height 150ms cubic-bezier(0.4,0,0.2,1);
    position: relative;
    overflow: hidden;
  }

  :host([expanded]) .me-accordion-summary {
    min-height: 64px;
  }

  .me-accordion-summary:hover {
    background-color: var(--me-palette-action-hover, rgba(0,0,0,0.04));
  }

  .me-accordion-summary:focus-visible {
    background-color: var(--me-palette-action-focus, rgba(0,0,0,0.12));
  }

  :host([disabled]) .me-accordion-summary {
    opacity: 0.38;
    cursor: default;
    pointer-events: none;
  }

  .me-accordion-summary__content {
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin: 12px 0;
    transition: margin 150ms cubic-bezier(0.4,0,0.2,1);
  }

  :host([expanded]) .me-accordion-summary__content {
    margin: 20px 0;
  }

  .me-accordion-summary__icon {
    display: flex;
    align-items: center;
    margin-left: 8px;
    color: var(--me-palette-action-active, rgba(0,0,0,0.54));
    transition: transform 150ms cubic-bezier(0.4,0,0.2,1);
    flex-shrink: 0;
  }

  :host([expanded]) .me-accordion-summary__icon {
    transform: rotate(180deg);
  }
`);

export { rippleSheet };
export default sheet;
