const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    position: relative;
  }

  .mc-tooltip__trigger {
    display: contents;
  }

  .mc-tooltip__bubble {
    position: fixed;
    z-index: var(--mc-zIndex-tooltip, 1500);
    padding: 4px 8px;
    border-radius: 4px;
    background-color: rgba(97, 97, 97, 0.92);
    color: #fff;
    font-family: var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.6875rem;
    font-weight: var(--mc-typography-fontWeightMedium, 500);
    line-height: 1.4em;
    letter-spacing: 0;
    max-width: 300px;
    word-wrap: break-word;
    pointer-events: none;
    white-space: pre-line;
    opacity: 0;
    transition: opacity 150ms cubic-bezier(0.4, 0, 1, 1);
  }
  .mc-tooltip__bubble[data-show] {
    opacity: 1;
    transition: opacity 200ms cubic-bezier(0, 0, 0.2, 1) 100ms;
  }

  /* Arrow */
  .mc-tooltip__arrow {
    position: absolute;
    width: 0;
    height: 0;
    display: none;
  }
  :host([arrow]) .mc-tooltip__arrow { display: block; }

  /* Arrow shapes per placement */
  .mc-tooltip__bubble[data-placement="top"] .mc-tooltip__arrow {
    bottom: -4px; left: 50%; transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgba(97, 97, 97, 0.92);
  }
  .mc-tooltip__bubble[data-placement="bottom"] .mc-tooltip__arrow {
    top: -4px; left: 50%; transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid rgba(97, 97, 97, 0.92);
  }
  .mc-tooltip__bubble[data-placement="left"] .mc-tooltip__arrow {
    right: -4px; top: 50%; transform: translateY(-50%);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid rgba(97, 97, 97, 0.92);
  }
  .mc-tooltip__bubble[data-placement="right"] .mc-tooltip__arrow {
    left: -4px; top: 50%; transform: translateY(-50%);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid rgba(97, 97, 97, 0.92);
  }
`);
export default sheet;
