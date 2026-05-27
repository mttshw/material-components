import { MEElement } from '../../base/me-element.js';
import sheet from './snackbar.styles.js';

export class MESnackbar extends MEElement {
  static observedAttributes = ['open', 'auto-hide-duration', 'anchor-origin', 'message'];

  private _timer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `
      <div class="me-snackbar__content" part="content">
        <span class="me-snackbar__message" part="message">
          <slot></slot>
        </span>
        <span class="me-snackbar__action" part="action">
          <slot name="action"></slot>
        </span>
      </div>
    `;
  }

  protected onAttributeChanged(name: string): void {
    if (name === 'open') {
      if (this.hasAttribute('open')) {
        this._startAutoHide();
      } else {
        this._clearTimer();
      }
    }
  }

  private _startAutoHide(): void {
    this._clearTimer();
    const duration = parseInt(this.getAttribute('auto-hide-duration') ?? '0', 10);
    if (duration > 0) {
      this._timer = setTimeout(() => {
        this.removeAttribute('open');
        this.dispatchEvent(new CustomEvent('me-close', {
          detail: { reason: 'timeout' },
          bubbles: true,
          composed: true,
        }));
      }, duration);
    }
  }

  private _clearTimer(): void {
    if (this._timer !== null) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  }

  disconnectedCallback(): void {
    this._clearTimer();
  }
}

customElements.define('me-snackbar', MESnackbar);
