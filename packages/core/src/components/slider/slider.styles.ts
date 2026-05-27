const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    align-items: center;
    width: 100%;
    padding: 13px 0;
    box-sizing: border-box;
    cursor: pointer;
    touch-action: none;
    --_color: var(--me-palette-primary-main, #1976d2);
    --_thumb: 20px;
    --_track: 4px;
  }
  :host([color="secondary"]) { --_color: var(--me-palette-secondary-main, #9c27b0); }
  :host([color="error"])     { --_color: var(--me-palette-error-main, #d32f2f); }
  :host([color="warning"])   { --_color: var(--me-palette-warning-main, #ed6c02); }
  :host([color="info"])      { --_color: var(--me-palette-info-main, #0288d1); }
  :host([color="success"])   { --_color: var(--me-palette-success-main, #2e7d32); }
  :host([size="small"]) { --_thumb: 12px; --_track: 2px; padding: 5px 0; }
  :host([disabled]) { cursor: default; pointer-events: none; opacity: 0.38; }

  .me-slider {
    position: relative;
    width: 100%;
    height: var(--_thumb);
    display: flex;
    align-items: center;
    outline: none;
  }
  .me-slider:focus-visible .me-slider__thumb {
    box-shadow: 0 0 0 8px color-mix(in srgb, var(--_color) 16%, transparent);
  }
  .me-slider__rail {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: var(--_track);
    border-radius: 2px;
    background: var(--me-palette-grey-300, #e0e0e0);
  }
  .me-slider__track {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: var(--_track);
    border-radius: 2px;
    background: var(--_color);
    pointer-events: none;
  }
  .me-slider__thumb {
    position: absolute;
    top: 50%;
    width: var(--_thumb);
    height: var(--_thumb);
    border-radius: 50%;
    background: var(--_color);
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px rgba(0,0,0,.14), 0 1px 3px rgba(0,0,0,.12);
    transition: box-shadow 150ms cubic-bezier(0.4,0,0.2,1);
    pointer-events: none;
  }
  .me-slider:hover .me-slider__thumb,
  .me-slider--active .me-slider__thumb {
    box-shadow: 0 0 0 8px color-mix(in srgb, var(--_color) 16%, transparent);
  }
  .me-slider__marks { position: absolute; width: 100%; height: 0; pointer-events: none; }
  .me-slider__mark {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: var(--_color);
    transform: translate(-50%, -50%);
  }
  .me-slider__mark--active { background: #fff; }
  .me-slider__value-label {
    position: absolute;
    bottom: calc(100% + 4px);
    transform: translateX(-50%) translateY(-8px) scale(0);
    background: var(--me-palette-grey-600, #757575);
    color: #fff;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    white-space: nowrap;
    pointer-events: none;
    transition: transform 150ms cubic-bezier(0.4,0,0.2,1);
  }
  :host([value-label-display="on"]) .me-slider__value-label { transform: translateX(-50%) translateY(-8px) scale(1); }
  .me-slider--active .me-slider__value-label,
  .me-slider:hover .me-slider__value-label { transform: translateX(-50%) translateY(-8px) scale(1); }
  :host([value-label-display="off"]) .me-slider__value-label { display: none; }
`);
export default sheet;
