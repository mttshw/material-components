import { MEElement } from '../../base/me-element.js';
import sheet from './modal.styles.js';

export class MEModal extends MEElement {
  static observedAttributes = ['open', 'disable-backdrop-click'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    if (this.shadow.querySelector('.me-modal__backdrop')) return;
    this.shadow.innerHTML = `
      <div class="me-modal__backdrop"></div>
      <div class="me-modal__container" tabindex="-1">
        <slot></slot>
      </div>
    `;
    this.shadow.querySelector('.me-modal__backdrop')
      ?.addEventListener('click', this._onBackdropClick);
  }

  protected addEventListeners(): void {
    this.addEventListener('keydown', this._onKeyDown);
  }

  private _onBackdropClick = (): void => {
    if (this.hasAttribute('disable-backdrop-click')) return;
    this.removeAttribute('open');
    this.dispatchEvent(new CustomEvent('me-close', { bubbles: true, composed: true }));
  };

  private _onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      this.removeAttribute('open');
      this.dispatchEvent(new CustomEvent('me-close', { bubbles: true, composed: true }));
    }
  };

  protected onAttributeChanged(name: string, _old: string | null, newVal: string | null): void {
    if (name === 'open' && newVal !== null) {
      requestAnimationFrame(() => {
        this.shadow.querySelector<HTMLElement>('.me-modal__container')?.focus();
      });
    }
  }
}

customElements.define('me-modal', MEModal);
