import { MEElement } from '../../base/me-element.js';
import sheet from './menu.styles.js';

export class MEMenu extends MEElement {
  static observedAttributes = ['open'];

  private _anchorEl: HTMLElement | null = null;

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  get open(): boolean { return this.hasAttribute('open'); }
  set open(v: boolean) {
    v ? this.setAttribute('open', '') : this.removeAttribute('open');
  }

  /** Set the element to anchor the menu position to. */
  set anchorEl(el: HTMLElement | null) {
    this._anchorEl = el;
    if (this.hasAttribute('open')) this._positionMenu();
  }

  protected render(): void {
    // Build DOM once — open/close is handled by CSS via :host([open]).
    // Rebuilding on every open change would stack backdrop listeners and
    // reset paper position, breaking re-entry positioning.
    if (this.shadow.querySelector('.me-menu__paper')) return;

    this.shadow.innerHTML = `
      <div class="me-menu__backdrop" part="backdrop"></div>
      <div class="me-menu__paper" role="menu" tabindex="-1" part="paper">
        <slot></slot>
      </div>
    `;

    this.shadow.querySelector('.me-menu__backdrop')
      ?.addEventListener('click', this._closeMenu);
  }

  protected addEventListeners(): void {
    this.addEventListener('me-menu-item-click', this._onItemClick as EventListener);
    this.addEventListener('keydown', this._onKeyDown);
  }

  protected cleanup(): void {
    this.removeEventListener('me-menu-item-click', this._onItemClick as EventListener);
    this.removeEventListener('keydown', this._onKeyDown);
  }

  protected onAttributeChanged(name: string, _old: string | null, newVal: string | null): void {
    if (name === 'open' && newVal !== null) {
      requestAnimationFrame(() => {
        this._positionMenu();
        this._focusFirst();
      });
    }
  }

  private _positionMenu(): void {
    const paper = this.shadow.querySelector<HTMLElement>('.me-menu__paper');
    if (!paper) return;

    const anchor = this._anchorEl ?? (this.getAttribute('anchor-el')
      ? document.querySelector<HTMLElement>(this.getAttribute('anchor-el')!)
      : null);

    if (anchor) {
      const rect = anchor.getBoundingClientRect();
      let top = rect.bottom + 4;
      let left = rect.left;

      // Clamp to viewport
      const menuH = paper.offsetHeight || 300;
      const menuW = paper.offsetWidth || 200;
      if (top + menuH > window.innerHeight - 8) top = rect.top - menuH - 4;
      if (left + menuW > window.innerWidth - 8) left = window.innerWidth - menuW - 8;

      paper.style.top = `${Math.max(8, top)}px`;
      paper.style.left = `${Math.max(8, left)}px`;
    } else {
      // Default: centered in viewport
      paper.style.top = '50%';
      paper.style.left = '50%';
      paper.style.transform = 'translate(-50%, -50%)';
    }
  }

  private _focusFirst(): void {
    const slot = this.shadow.querySelector<HTMLSlotElement>('slot');
    const items = (slot?.assignedElements() ?? []).filter(
      el => el.tagName === 'ME-MENU-ITEM' && !el.hasAttribute('disabled')
    ) as HTMLElement[];
    if (items[0]) items[0].focus();
  }

  private _closeMenu = (): void => {
    this.removeAttribute('open');
    this.dispatchEvent(new CustomEvent('me-close', {
      detail: { reason: 'backdropClick' },
      bubbles: true,
      composed: true,
    }));
  };

  private _onItemClick = (): void => {
    // Close on item click
    requestAnimationFrame(() => this._closeMenu());
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
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      this._navigateItems(e.key === 'ArrowDown' ? 1 : -1);
    }
  };

  private _navigateItems(dir: 1 | -1): void {
    const slot = this.shadow.querySelector<HTMLSlotElement>('slot');
    const items = (slot?.assignedElements() ?? []).filter(
      el => el.tagName === 'ME-MENU-ITEM' && !el.hasAttribute('disabled')
    ) as HTMLElement[];
    if (!items.length) return;

    const active = document.activeElement;
    const idx = items.indexOf(active as HTMLElement);
    const next = items[(idx + dir + items.length) % items.length];
    next?.focus();
  }
}

customElements.define('me-menu', MEMenu);
