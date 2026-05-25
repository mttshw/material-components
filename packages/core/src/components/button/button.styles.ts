import { rippleSheet } from '../../utils/ripple.js';

const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  /* ── Local color tokens (overridden per color attribute) ── */
  :host {
    display: inline-flex;
    vertical-align: middle;
    outline: none;
    --_main:     var(--mc-palette-primary-main);
    --_dark:     var(--mc-palette-primary-dark);
    --_contrast: var(--mc-palette-primary-contrastText);
    --_hover-bg: rgba(25,118,210,0.04);
    --_border:   rgba(25,118,210,0.5);
  }
  :host([color="secondary"]) {
    --_main:     var(--mc-palette-secondary-main);
    --_dark:     var(--mc-palette-secondary-dark);
    --_contrast: var(--mc-palette-secondary-contrastText);
    --_hover-bg: rgba(156,39,176,0.04);
    --_border:   rgba(156,39,176,0.5);
  }
  :host([color="error"]) {
    --_main:     var(--mc-palette-error-main);
    --_dark:     var(--mc-palette-error-dark);
    --_contrast: var(--mc-palette-error-contrastText);
    --_hover-bg: rgba(211,47,47,0.04);
    --_border:   rgba(211,47,47,0.5);
  }
  :host([color="warning"]) {
    --_main:     var(--mc-palette-warning-main);
    --_dark:     var(--mc-palette-warning-dark);
    --_contrast: var(--mc-palette-warning-contrastText);
    --_hover-bg: rgba(237,108,2,0.04);
    --_border:   rgba(237,108,2,0.5);
  }
  :host([color="info"]) {
    --_main:     var(--mc-palette-info-main);
    --_dark:     var(--mc-palette-info-dark);
    --_contrast: var(--mc-palette-info-contrastText);
    --_hover-bg: rgba(2,136,209,0.04);
    --_border:   rgba(2,136,209,0.5);
  }
  :host([color="success"]) {
    --_main:     var(--mc-palette-success-main);
    --_dark:     var(--mc-palette-success-dark);
    --_contrast: var(--mc-palette-success-contrastText);
    --_hover-bg: rgba(46,125,50,0.04);
    --_border:   rgba(46,125,50,0.5);
  }
  :host([color="inherit"]) {
    --_main:     inherit;
    --_dark:     inherit;
    --_contrast: inherit;
    --_hover-bg: rgba(0,0,0,0.04);
    --_border:   rgba(0,0,0,0.23);
  }

  /* ── Base button ── */
  .mc-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    cursor: pointer;
    border: none;
    outline: none;
    margin: 0;
    text-decoration: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    vertical-align: middle;
    font-family: var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: var(--mc-typography-button-fontSize, 0.875rem);
    font-weight: var(--mc-typography-button-fontWeight, 500);
    letter-spacing: var(--mc-typography-button-letterSpacing, 0.02857em);
    text-transform: var(--mc-typography-button-textTransform, uppercase);
    line-height: var(--mc-typography-button-lineHeight, 1.75);
    border-radius: calc(var(--mc-shape-borderRadius, 4) * 1px);
    padding: 6px 16px;
    min-width: 64px;
    transition:
      background-color var(--mc-transitions-duration-short, 250ms) var(--mc-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1)),
      box-shadow       var(--mc-transitions-duration-short, 250ms) var(--mc-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1)),
      border-color     var(--mc-transitions-duration-short, 250ms) var(--mc-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1)),
      color            var(--mc-transitions-duration-short, 250ms) var(--mc-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1));
  }

  /* ── Sizes ── */
  :host([size="small"])  .mc-button { padding: 4px 10px;  font-size: 0.8125rem; }
  :host([size="large"])  .mc-button { padding: 8px 22px;  font-size: 0.9375rem; }

  /* ── Text variant (default) ── */
  :host(:not([variant])) .mc-button,
  :host([variant="text"]) .mc-button {
    background-color: transparent;
    color: var(--_main);
  }
  :host(:not([variant])) .mc-button:hover,
  :host([variant="text"]) .mc-button:hover {
    background-color: var(--_hover-bg);
  }

  /* ── Contained variant ── */
  :host([variant="contained"]) .mc-button {
    background-color: var(--_main);
    color: var(--_contrast);
    box-shadow: var(--mc-shadows-2);
  }
  :host([variant="contained"]) .mc-button:hover {
    background-color: var(--_dark);
    box-shadow: var(--mc-shadows-4);
  }
  :host([variant="contained"]) .mc-button:active {
    box-shadow: var(--mc-shadows-8);
  }

  /* ── Outlined variant ── */
  :host([variant="outlined"]) .mc-button {
    background-color: transparent;
    color: var(--_main);
    border: 1px solid var(--_border);
    padding: 5px 15px;
  }
  :host([variant="outlined"][size="small"])  .mc-button { padding: 3px 9px; }
  :host([variant="outlined"][size="large"])  .mc-button { padding: 7px 21px; }
  :host([variant="outlined"]) .mc-button:hover {
    background-color: var(--_hover-bg);
    border-color: var(--_main);
  }

  /* ── Disabled ── */
  :host([disabled]) .mc-button {
    color: var(--mc-palette-action-disabled, rgba(0,0,0,0.26));
    cursor: default;
    pointer-events: none;
  }
  :host([variant="contained"][disabled]) .mc-button {
    background-color: var(--mc-palette-action-disabledBackground, rgba(0,0,0,0.12));
    box-shadow: none;
  }
  :host([variant="outlined"][disabled]) .mc-button {
    border-color: var(--mc-palette-action-disabledBackground, rgba(0,0,0,0.12));
  }

  /* ── Focus visible ── */
  .mc-button:focus-visible {
    outline: 2px solid var(--_main);
    outline-offset: 2px;
  }

  /* ── Icon slots ── */
  .mc-button__start-icon,
  .mc-button__end-icon {
    display: inherit;
    align-items: inherit;
  }
  .mc-button__start-icon { margin-right: 8px; margin-left: -4px; }
  .mc-button__end-icon   { margin-left: 8px;  margin-right: -4px; }
  :host([size="small"]) .mc-button__start-icon { margin-left: -2px; margin-right: 6px; }
  :host([size="small"]) .mc-button__end-icon   { margin-right: -2px; margin-left: 6px; }
  [hidden] { display: none !important; }
`);

export { rippleSheet };
export default sheet;
