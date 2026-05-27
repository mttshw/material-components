import { MEElement } from '../../base/me-element.js';
import { RippleController } from '../../utils/ripple.js';
import sheet, { rippleSheet } from './accordion-summary.styles.js';

const EXPAND_ICON = `<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>`;

export class MEAccordionSummary extends MEElement {
  static observedAttributes = ['expanded', 'disabled'];

  private _ripple = new RippleController();

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet, rippleSheet];
  }

  protected render(): void {
    if (this.shadow.querySelector('.me-accordion-summary')) return;
    this.shadow.innerHTML = `
      <button class="me-accordion-summary" aria-expanded="false">
        <div class="me-accordion-summary__content"><slot></slot></div>
        <div class="me-accordion-summary__icon">
          <slot name="expand-icon">${EXPAND_ICON}</slot>
        </div>
      </button>
    `;
  }

  protected addEventListeners(): void {
    this.addEventListener('click', this._onClick);
    const btn = this.shadow.querySelector<HTMLButtonElement>('.me-accordion-summary');
    if (btn) this._ripple.attach(btn);
  }

  protected cleanup(): void {
    this.removeEventListener('click', this._onClick);
    this._ripple.detach();
  }

  protected onAttributeChanged(name: string, _old: string | null, newVal: string | null): void {
    if (name === 'expanded') {
      const btn = this.shadow.querySelector<HTMLButtonElement>('.me-accordion-summary');
      if (btn) btn.setAttribute('aria-expanded', String(newVal !== null));
    }
  }

  private _onClick = (): void => {
    if (this.hasAttribute('disabled')) return;
    this.dispatchEvent(new CustomEvent('me-accordion-change', {
      bubbles: true,
      composed: true,
    }));
  };
}

customElements.define('me-accordion-summary', MEAccordionSummary);
