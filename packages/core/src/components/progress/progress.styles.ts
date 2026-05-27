export const circularSheet = new CSSStyleSheet();
circularSheet.replaceSync(`
  :host {
    display: inline-flex;
    color: var(--me-palette-primary-main, #1976d2);
  }
  :host([color="secondary"]) { color: var(--me-palette-secondary-main, #9c27b0); }
  :host([color="error"])     { color: var(--me-palette-error-main, #d32f2f); }
  :host([color="success"])   { color: var(--me-palette-success-main, #2e7d32); }
  :host([color="warning"])   { color: var(--me-palette-warning-main, #ed6c02); }
  :host([color="info"])      { color: var(--me-palette-info-main, #0288d1); }
  :host([color="inherit"])   { color: inherit; }

  .me-circular-progress {
    display: inline-block;
  }

  /* indeterminate */
  :host(:not([variant="determinate"])) .me-circular-progress {
    animation: me-circular-rotate 1.4s linear infinite;
  }
  :host(:not([variant="determinate"])) .me-circular-progress__circle {
    stroke-dasharray: 80px, 200px;
    stroke-dashoffset: 0;
    animation: me-circular-dash 1.4s ease-in-out infinite;
  }

  .me-circular-progress__circle {
    stroke: currentColor;
    stroke-linecap: round;
  }

  @keyframes me-circular-rotate {
    0%   { transform-origin: 50% 50%; }
    100% { transform: rotate(360deg); }
  }
  @keyframes me-circular-dash {
    0%   { stroke-dasharray: 1px, 200px; stroke-dashoffset: 0; }
    50%  { stroke-dasharray: 100px, 200px; stroke-dashoffset: -15px; }
    100% { stroke-dasharray: 100px, 200px; stroke-dashoffset: -125px; }
  }
`);

export const linearSheet = new CSSStyleSheet();
linearSheet.replaceSync(`
  :host {
    display: block;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 4px;
    background-color: rgba(25, 118, 210, 0.2);
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    color: var(--me-palette-primary-main, #1976d2);
  }
  :host([color="secondary"]) { color: var(--me-palette-secondary-main, #9c27b0); background-color: rgba(156,39,176,0.2); }
  :host([color="error"])     { color: var(--me-palette-error-main, #d32f2f); background-color: rgba(211,47,47,0.2); }
  :host([color="success"])   { color: var(--me-palette-success-main, #2e7d32); background-color: rgba(46,125,50,0.2); }
  :host([color="warning"])   { color: var(--me-palette-warning-main, #ed6c02); background-color: rgba(237,108,2,0.2); }
  :host([color="info"])      { color: var(--me-palette-info-main, #0288d1); background-color: rgba(2,136,209,0.2); }

  .me-linear-progress__bar1,
  .me-linear-progress__bar2 {
    width: 100%;
    position: absolute;
    left: 0; top: 0; bottom: 0;
    background-color: currentColor;
    transform-origin: left;
    transition: transform 0.2s linear;
  }

  /* indeterminate — width: auto lets left/right keyframes control the visual bar width */
  :host([variant="indeterminate"]) .me-linear-progress__bar1,
  :host(:not([variant])) .me-linear-progress__bar1 {
    width: auto;
    animation: me-linear-indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  }
  :host([variant="indeterminate"]) .me-linear-progress__bar2,
  :host(:not([variant])) .me-linear-progress__bar2 {
    width: auto;
    animation: me-linear-indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
  }

  /* query (reverse) */
  :host([variant="query"]) {
    transform: rotate(180deg);
  }
  :host([variant="query"]) .me-linear-progress__bar1 {
    width: auto;
    animation: me-linear-indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  }
  :host([variant="query"]) .me-linear-progress__bar2 {
    width: auto;
    animation: me-linear-indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
  }

  /* buffer */
  :host([variant="buffer"]) .me-linear-progress__bar1 {
    animation: none;
  }
  :host([variant="buffer"]) .me-linear-progress__bar2 {
    background-color: currentColor;
    opacity: 0.4;
    animation: none;
  }
  :host([variant="buffer"]) .me-linear-progress__dashed {
    position: absolute;
    left: 0; top: 0; right: 0; bottom: 0;
    background-image: radial-gradient(currentColor 0%, currentColor 16%, transparent 42%);
    background-size: 10px 10px;
    background-position: 0 -23px;
    opacity: 0.4;
    animation: me-linear-buffer-dashes 3s infinite linear;
  }

  @keyframes me-linear-indeterminate1 {
    0%   { left: -35%;  right: 100%; }
    60%  { left: 100%;  right: -90%; }
    100% { left: 100%;  right: -90%; }
  }
  @keyframes me-linear-indeterminate2 {
    0%   { left: -200%; right: 100%; }
    60%  { left: 107%;  right: -8%;  }
    100% { left: 107%;  right: -8%;  }
  }
  @keyframes me-linear-buffer-dashes {
    0%   { background-position: 0 -23px; }
    100% { background-position: 10px -23px; }
  }
`);
