import { MEElement } from '../../base/me-element.js';
import sheet, { actionSheet } from './speed-dial.styles.js';

const CLOSE_ICON = `<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
const DEFAULT_ICON = `<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/></svg>`;

export class MESpeedDial extends MEElement {
  static observedAttributes = ['open', 'direction'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    if (this.shadow.querySelector('.me-speed-dial__fab')) return;
    this.shadow.innerHTML = `
      <div class="me-speed-dial__actions">
        <slot></slot>
      </div>
      <button class="me-speed-dial__fab" type="button" aria-label="${this.getAttribute('aria-label') ?? 'Speed dial'}">
        <span class="me-speed-dial__fab-icon--open"><slot name="icon">${DEFAULT_ICON}</slot></span>
        <span class="me-speed-dial__fab-icon--close">${CLOSE_ICON}</span>
      </button>
    `;
    this.shadow.querySelector('.me-speed-dial__fab')
      ?.addEventListener('click', this._toggleOpen);
  }

  protected addEventListeners(): void {
    document.addEventListener('click', this._onDocClick);
    this.addEventListener('keydown', this._onKeyDown);
  }

  protected cleanup(): void {
    document.removeEventListener('click', this._onDocClick);
  }

  private _toggleOpen = (): void => {
    this.toggleAttribute('open');
    this.dispatchEvent(new CustomEvent('me-open-change', {
      detail: { open: this.hasAttribute('open') }, bubbles: true, composed: true,
    }));
  };

  private _onDocClick = (e: MouseEvent): void => {
    if (this.hasAttribute('open') && !this.contains(e.target as Node)) {
      this.removeAttribute('open');
    }
  };

  private _onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') this.removeAttribute('open');
  };
}

export class MESpeedDialAction extends MEElement {
  static observedAttributes = ['tooltip-title', 'disabled'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [actionSheet];
  }

  protected render(): void {
    if (this.shadow.querySelector('.me-speed-dial-action__btn')) return;
    const disabled = this.hasAttribute('disabled');
    const tooltip = this.getAttribute('tooltip-title') ?? '';
    this.shadow.innerHTML = `
      ${tooltip ? `<span class="me-speed-dial-action__tooltip">${tooltip}</span>` : ''}
      <button class="me-speed-dial-action__btn" type="button" ${disabled ? 'disabled' : ''}
              aria-label="${tooltip}">
        <slot></slot>
      </button>
    `;
  }

  protected addEventListeners(): void {
    this.shadow.querySelector('button')?.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('me-click', { bubbles: true, composed: true }));
      // Close parent speed dial
      this.closest('me-speed-dial')?.removeAttribute('open');
    });
  }
}

customElements.define('me-speed-dial',        MESpeedDial);
customElements.define('me-speed-dial-action', MESpeedDialAction);
