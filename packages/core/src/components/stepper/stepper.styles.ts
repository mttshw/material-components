export const stepperSheet = (() => {
  const s = new CSSStyleSheet();
  s.replaceSync(`
    :host {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: 100%;
    }
    :host([orientation="vertical"]) {
      flex-direction: column;
      align-items: stretch;
    }
    .me-stepper { display: contents; }
  `);
  return s;
})();

export const stepSheet = (() => {
  const s = new CSSStyleSheet();
  s.replaceSync(`
    :host {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
    :host([orientation="vertical"]) {
      flex: 0 0 auto;
      flex-direction: row;
      align-items: flex-start;
    }

    .me-step__connector {
      position: absolute;
      top: 12px;
      left: calc(-50% + 20px);
      right: calc(50% + 20px);
      height: 1px;
      background: var(--me-palette-divider, rgba(0,0,0,0.12));
    }
    :host([step-index="0"]) .me-step__connector { display: none; }
    :host([completed]) .me-step__connector,
    :host([active]) .me-step__connector { background: var(--me-palette-primary-main, #1976d2); }

    :host([orientation="vertical"]) .me-step__connector { display: none; }

    .me-step__label-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }
    :host([orientation="vertical"]) .me-step__label-container {
      flex-direction: row;
      align-items: flex-start;
      gap: 8px;
    }

    .me-step__icon {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--me-palette-text-disabled, rgba(0,0,0,0.38));
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 500;
      flex-shrink: 0;
      transition: background 250ms cubic-bezier(0.4,0,0.2,1);
    }
    :host([active]) .me-step__icon {
      background: var(--me-palette-primary-main, #1976d2);
    }
    :host([completed]) .me-step__icon {
      background: var(--me-palette-primary-main, #1976d2);
    }
    :host([error]) .me-step__icon {
      background: var(--me-palette-error-main, #d32f2f);
    }

    .me-step__icon-check { display: none; }
    :host([completed]) .me-step__icon-num { display: none; }
    :host([completed]) .me-step__icon-check { display: block; }

    .me-step__slot-wrapper {
      display: contents;
    }

    /* Vertical step content connector */
    .me-step__vertical-connector {
      display: none;
      width: 1px;
      min-height: 24px;
      background: var(--me-palette-divider, rgba(0,0,0,0.12));
      margin: 4px 0 4px 11px;
    }
    :host([orientation="vertical"]) .me-step__vertical-connector { display: block; }
  `);
  return s;
})();

export const stepLabelSheet = (() => {
  const s = new CSSStyleSheet();
  s.replaceSync(`
    :host {
      display: block;
      font-size: 0.875rem;
      color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
      white-space: nowrap;
    }
    :host([active]) {
      color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
      font-weight: 500;
    }
    :host([completed]) {
      color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    }
    :host([error]) {
      color: var(--me-palette-error-main, #d32f2f);
    }
  `);
  return s;
})();

export const stepContentSheet = (() => {
  const s = new CSSStyleSheet();
  s.replaceSync(`
    :host {
      display: grid;
      grid-template-rows: 0fr;
      overflow: hidden;
      transition: grid-template-rows 250ms cubic-bezier(0.4,0,0.2,1);
      margin-left: 20px;
      padding-left: 12px;
      border-left: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
    }
    :host([active]) { grid-template-rows: 1fr; }
    .me-step-content__inner { min-height: 0; padding: 8px 0 16px; }
  `);
  return s;
})();
