const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: block;
    background-color: rgba(0, 0, 0, 0.11);
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    height: 1.2em;
  }

  /* variants */
  :host([variant="circular"])    { border-radius: 50%; width: 40px; height: 40px; }
  :host([variant="rectangular"]) { border-radius: 0; }
  :host([variant="rounded"])     { border-radius: calc(var(--me-shape-borderRadius, 4) * 1px); }
  :host([variant="text"])        {
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    height: auto;
    transform: scale(1, 0.6);
    transform-origin: 0 60%;
  }
  :host([variant="text"])::before {
    content: "\\00a0";
  }

  /* pulse animation (default) */
  :host(:not([animation="wave"]):not([animation="false"])) {
    animation: me-skeleton-pulse 2s ease-in-out 0.5s infinite;
  }
  /* wave animation */
  :host([animation="wave"]) {
    overflow: hidden;
    position: relative;
  }
  :host([animation="wave"])::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,0.4),
      transparent
    );
    animation: me-skeleton-wave 2s linear 0.5s infinite;
    transform: translateX(-100%);
  }

  @keyframes me-skeleton-pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.4; }
  }
  @keyframes me-skeleton-wave {
    0%   { transform: translateX(-100%); }
    50%  { transform: translateX(100%); }
    100% { transform: translateX(100%); }
  }
`);
export default sheet;
