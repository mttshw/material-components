import { MEElement } from '../../base/me-element.js';
import sheet from './alert.styles.js';

const ICONS: Record<string, string> = {
  error:   `<svg viewBox="0 0 24 24"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`,
  warning: `<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`,
  success: `<svg viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"/></svg>`,
  info:    `<svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,
};

const CLOSE_ICON = `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;

export class MEAlert extends MEElement {
  static observedAttributes = ['severity', 'variant', 'title', 'closable'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    const severity = this.getAttribute('severity') ?? 'info';
    const title = this.getAttribute('title') ?? '';

    this.shadow.innerHTML = `
      <div class="me-alert__icon">${ICONS[severity] ?? ICONS.info}</div>
      <div class="me-alert__content">
        <span class="me-alert__title">${title}</span>
        <span class="me-alert__message"><slot></slot></span>
      </div>
      <div class="me-alert__action">
        <slot name="action"></slot>
        <button class="me-alert__close" aria-label="Close">${CLOSE_ICON}</button>
      </div>
    `;

    this.shadow.querySelector('.me-alert__close')?.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('me-close', { bubbles: true, composed: true }));
    });
  }
}

customElements.define('me-alert', MEAlert);
