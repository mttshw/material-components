import { MEElement } from '../../base/me-element.js';
import sheet from './popover.styles.js';

export class MEPopover extends MEElement {
  static observedAttributes = ['open', 'anchor', 'anchor-origin-vertical', 'anchor-origin-horizontal',
                                'transform-origin-vertical', 'transform-origin-horizontal'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    if (this.shadow.querySelector('.me-popover__paper')) return;
    this.shadow.innerHTML = `
      <div class="me-popover__backdrop"></div>
      <div class="me-popover__paper">
        <slot></slot>
      </div>
    `;
    this.shadow.querySelector('.me-popover__backdrop')
      ?.addEventListener('click', this._onBackdropClick);
  }

  protected addEventListeners(): void {
    this.addEventListener('keydown', this._onKeyDown);
  }

  private _onBackdropClick = (): void => {
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
      requestAnimationFrame(() => this._position());
    }
  }

  private _position(): void {
    const anchorSel = this.getAttribute('anchor');
    const anchor = anchorSel ? document.querySelector(anchorSel) : null;
    if (!anchor) return;

    const paper = this.shadow.querySelector<HTMLElement>('.me-popover__paper');
    if (!paper) return;

    const aRect = anchor.getBoundingClientRect();
    const anchorV = this.getAttribute('anchor-origin-vertical') ?? 'bottom';
    const anchorH = this.getAttribute('anchor-origin-horizontal') ?? 'left';

    let top = anchorV === 'top' ? aRect.top : anchorV === 'center' ? aRect.top + aRect.height / 2 : aRect.bottom;
    let left = anchorH === 'right' ? aRect.right : anchorH === 'center' ? aRect.left + aRect.width / 2 : aRect.left;

    const transformV = this.getAttribute('transform-origin-vertical') ?? 'top';
    const transformH = this.getAttribute('transform-origin-horizontal') ?? 'left';

    const pRect = paper.getBoundingClientRect();
    if (transformV === 'bottom') top -= pRect.height;
    else if (transformV === 'center') top -= pRect.height / 2;
    if (transformH === 'right') left -= pRect.width;
    else if (transformH === 'center') left -= pRect.width / 2;

    // Clamp to viewport
    const pad = 8;
    top = Math.max(pad, Math.min(top, window.innerHeight - pRect.height - pad));
    left = Math.max(pad, Math.min(left, window.innerWidth - pRect.width - pad));

    this.style.top = `${top}px`;
    this.style.left = `${left}px`;
  }
}

customElements.define('me-popover', MEPopover);
