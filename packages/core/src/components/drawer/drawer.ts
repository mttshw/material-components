import { MEElement } from '../../base/me-element.js';
import sheet from './drawer.styles.js';

export class MEDrawer extends MEElement {
  static observedAttributes = ['open', 'anchor', 'variant'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  get open(): boolean { return this.hasAttribute('open'); }
  set open(v: boolean) {
    v ? this.setAttribute('open', '') : this.removeAttribute('open');
  }

  protected render(): void {
    const variant = this.getAttribute('variant') ?? 'temporary';
    const showBackdrop = variant === 'temporary';
    const existingPaper = this.shadow.querySelector('.me-drawer__paper');
    const existingBackdrop = !!this.shadow.querySelector('.me-drawer__backdrop');

    // Only rebuild DOM when structure changes (backdrop presence flips with variant).
    // The open/close animation is pure CSS — rebuilding on every open/close would
    // create the paper at its final position with no prior state to transition from.
    if (existingPaper && existingBackdrop === showBackdrop) return;

    this.shadow.innerHTML = `
      ${showBackdrop ? `<div class="me-drawer__backdrop" part="backdrop"></div>` : ''}
      <div class="me-drawer__paper" part="paper" tabindex="-1">
        <slot></slot>
      </div>
    `;

    this.shadow.querySelector('.me-drawer__backdrop')
      ?.addEventListener('click', this._closeDrawer);
  }

  protected addEventListeners(): void {
    this.addEventListener('keydown', this._onKeyDown);
  }

  protected cleanup(): void {
    this.removeEventListener('keydown', this._onKeyDown);
  }

  protected onAttributeChanged(name: string, _old: string | null, newVal: string | null): void {
    if (name === 'open' && newVal !== null) {
      requestAnimationFrame(() => {
        this.shadow.querySelector<HTMLElement>('.me-drawer__paper')?.focus();
      });
    }
  }

  private _closeDrawer = (): void => {
    this.removeAttribute('open');
    this.dispatchEvent(new CustomEvent('me-close', {
      detail: { reason: 'backdropClick' },
      bubbles: true,
      composed: true,
    }));
  };

  private _onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      this.removeAttribute('open');
      this.dispatchEvent(new CustomEvent('me-close', {
        detail: { reason: 'escapeKeyDown' },
        bubbles: true,
        composed: true,
      }));
    }
  };
}

customElements.define('me-drawer', MEDrawer);
