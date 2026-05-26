import { rippleSheet } from '../../utils/ripple.js';

const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    vertical-align: middle;
    outline: none;
    --_main:     var(--me-palette-action-active, rgba(0,0,0,0.54));
    --_hover-bg: var(--me-palette-action-hover, rgba(0,0,0,0.04));
  }
  :host([color="primary"])   { --_main: var(--me-palette-primary-main);   --_hover-bg: rgba(25,118,210,0.04); }
  :host([color="secondary"]) { --_main: var(--me-palette-secondary-main); --_hover-bg: rgba(156,39,176,0.04); }
  :host([color="error"])     { --_main: var(--me-palette-error-main);     --_hover-bg: rgba(211,47,47,0.04); }
  :host([color="warning"])   { --_main: var(--me-palette-warning-main);   --_hover-bg: rgba(237,108,2,0.04); }
  :host([color="info"])      { --_main: var(--me-palette-info-main);      --_hover-bg: rgba(2,136,209,0.04); }
  :host([color="success"])   { --_main: var(--me-palette-success-main);   --_hover-bg: rgba(46,125,50,0.04); }
  :host([color="inherit"])   { --_main: inherit; }

  .me-icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 50%;
    background-color: transparent;
    color: var(--_main);
    -webkit-tap-highlight-color: transparent;
    transition: background-color var(--me-transitions-duration-shorter, 200ms) var(--me-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1));
  }
  .me-icon-button:hover { background-color: var(--_hover-bg); }
  :host([size="small"])  .me-icon-button { padding: 5px; font-size: 1.125rem; }
  :host([size="large"])  .me-icon-button { padding: 12px; font-size: 1.75rem; }
  :host([edge="start"])  { margin-left: -12px; }
  :host([edge="end"])    { margin-right: -12px; }
  :host([disabled]) .me-icon-button {
    color: var(--me-palette-action-disabled, rgba(0,0,0,0.26));
    cursor: default;
    pointer-events: none;
  }
  .me-icon-button:focus-visible {
    outline: 2px solid var(--_main);
    outline-offset: 2px;
  }
`);

export { rippleSheet };
export default sheet;
