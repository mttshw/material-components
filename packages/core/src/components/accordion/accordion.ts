import { MEElement } from '../../base/me-element.js';
import sheet from './accordion.styles.js';

export class MEAccordion extends MEElement {
  static observedAttributes = ['expanded', 'disabled'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  get expanded(): boolean { return this.hasAttribute('expanded'); }
  set expanded(v: boolean) { this.toggleAttribute('expanded', v); }

  protected render(): void {
    if (this.shadow.querySelector('slot')) return;
    this.shadow.innerHTML = `<slot></slot>`;
    // Defer child sync until children are connected
    requestAnimationFrame(() => this._syncChildren());
  }

  protected addEventListeners(): void {
    this.addEventListener('me-accordion-change', this._onSummaryChange as EventListener);
  }

  protected cleanup(): void {
    this.removeEventListener('me-accordion-change', this._onSummaryChange as EventListener);
  }

  protected onAttributeChanged(name: string, _old: string | null, _newVal: string | null): void {
    if (name === 'expanded') {
      this._syncChildren();
    }
  }

  private _syncChildren(): void {
    const expanded = this.hasAttribute('expanded');
    const disabled = this.hasAttribute('disabled');
    const summary = this.querySelector('me-accordion-summary');
    const details = this.querySelector('me-accordion-details');
    summary?.toggleAttribute('expanded', expanded);
    summary?.toggleAttribute('disabled', disabled);
    details?.toggleAttribute('expanded', expanded);
  }

  private _onSummaryChange = (): void => {
    if (this.hasAttribute('disabled')) return;
    const expanded = !this.hasAttribute('expanded');
    this.toggleAttribute('expanded', expanded);
    this.dispatchEvent(new CustomEvent('me-change', {
      detail: { expanded },
      bubbles: true,
      composed: true,
    }));
  };
}

customElements.define('me-accordion', MEAccordion);
