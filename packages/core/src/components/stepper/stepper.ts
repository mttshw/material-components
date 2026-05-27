import { MEElement } from '../../base/me-element.js';
import { stepperSheet, stepSheet, stepLabelSheet, stepContentSheet } from './stepper.styles.js';

const CHECK_ICON = `<svg class="me-step__icon-check" viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"/></svg>`;
const ERROR_ICON = `<svg class="me-step__icon-check" viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`;

export class MEStepper extends MEElement {
  static observedAttributes = ['active-step', 'orientation'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [stepperSheet];
  }

  protected render(): void {
    if (this.shadow.querySelector('slot')) { this._syncSteps(); return; }
    this.shadow.innerHTML = `<slot></slot>`;
    const slot = this.shadow.querySelector('slot')!;
    slot.addEventListener('slotchange', () => this._syncSteps());
    requestAnimationFrame(() => this._syncSteps());
  }

  private _syncSteps(): void {
    const slot = this.shadow.querySelector('slot');
    const steps = (slot?.assignedElements() ?? []).filter(el => el.tagName.toLowerCase() === 'me-step') as MEStep[];
    const activeStep = parseInt(this.getAttribute('active-step') ?? '0');
    const orientation = this.getAttribute('orientation') ?? 'horizontal';

    steps.forEach((step, i) => {
      step.setAttribute('step-index', String(i));
      step.setAttribute('orientation', orientation);
      step.toggleAttribute('active', i === activeStep);
      step.toggleAttribute('completed', i < activeStep);
      // Sync step-label and step-content children
      const label = step.querySelector('me-step-label') as MEStepLabel | null;
      if (label) {
        label.toggleAttribute('active', i === activeStep);
        label.toggleAttribute('completed', i < activeStep);
        label.toggleAttribute('error', step.hasAttribute('error'));
      }
      const content = step.querySelector('me-step-content') as MEStepContent | null;
      if (content) {
        content.toggleAttribute('active', i === activeStep);
      }
    });
  }

  protected onAttributeChanged(): void {
    this._syncSteps();
  }
}

export class MEStep extends MEElement {
  static observedAttributes = ['step-index', 'active', 'completed', 'error', 'orientation'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [stepSheet];
  }

  protected render(): void {
    if (this.shadow.querySelector('.me-step__icon')) { this._syncState(); return; }
    const index = parseInt(this.getAttribute('step-index') ?? '0');
    this.shadow.innerHTML = `
      <span class="me-step__connector"></span>
      <div class="me-step__label-container">
        <span class="me-step__icon">
          <span class="me-step__icon-num">${index + 1}</span>
          ${CHECK_ICON}
          ${ERROR_ICON.replace('class="me-step__icon-check"', 'class="me-step__icon-error" style="display:none"')}
        </span>
        <div class="me-step__slot-wrapper"><slot></slot></div>
      </div>
      <div class="me-step__vertical-connector"></div>
    `;
    this._syncState();
  }

  private _syncState(): void {
    const numEl = this.shadow.querySelector<HTMLElement>('.me-step__icon-num');
    const index = parseInt(this.getAttribute('step-index') ?? '0');
    if (numEl) numEl.textContent = String(index + 1);
  }

  protected onAttributeChanged(): void {
    if (this.shadow.querySelector('.me-step__icon')) this._syncState();
    else this.render();
  }
}

export class MEStepLabel extends MEElement {
  static observedAttributes = ['active', 'completed', 'error'];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [stepLabelSheet];
  }
  protected render(): void {
    if (this.shadow.querySelector('slot')) return;
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

export class MEStepContent extends MEElement {
  static observedAttributes = ['active'];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [stepContentSheet];
  }
  protected render(): void {
    if (this.shadow.querySelector('.me-step-content__inner')) return;
    this.shadow.innerHTML = `<div class="me-step-content__inner"><slot></slot></div>`;
  }
}

customElements.define('me-stepper',      MEStepper);
customElements.define('me-step',         MEStep);
customElements.define('me-step-label',   MEStepLabel);
customElements.define('me-step-content', MEStepContent);
