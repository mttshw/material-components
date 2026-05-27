const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    align-items: center;
    --_color: var(--me-palette-warning-light, #ffb400);
    --_empty: var(--me-palette-action-disabled, rgba(0,0,0,0.26));
    --_size: 1.5rem;
    cursor: pointer;
    user-select: none;
  }
  :host([size="small"]) { --_size: 1.125rem; }
  :host([size="large"]) { --_size: 2rem; }
  :host([color="primary"])   { --_color: var(--me-palette-primary-main, #1976d2); }
  :host([color="secondary"]) { --_color: var(--me-palette-secondary-main, #9c27b0); }
  :host([disabled]), :host([read-only]) { cursor: default; pointer-events: none; }
  :host([disabled]) { opacity: 0.5; }

  .me-rating { display: inline-flex; align-items: center; gap: 2px; }

  .me-rating__item {
    position: relative;
    display: inline-flex;
    cursor: inherit;
  }

  .me-rating__icon {
    display: inline-flex;
    font-size: var(--_size);
    width: 1em;
    height: 1em;
    transition: transform 150ms cubic-bezier(0.4,0,0.2,1);
    fill: var(--_empty);
  }
  .me-rating__icon--filled { fill: var(--_color); }
  .me-rating__icon--half {
    position: absolute;
    left: 0;
    overflow: hidden;
    width: 50%;
    fill: var(--_color);
  }
  .me-rating__item:hover .me-rating__icon { transform: scale(1.2); }

  .me-rating__item--hover .me-rating__icon,
  .me-rating__item--active .me-rating__icon { fill: var(--_color); }
  .me-rating__item--hover-empty .me-rating__icon { fill: var(--_empty); }
`);
export default sheet;
