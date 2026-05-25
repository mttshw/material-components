import { MCElement } from '../../base/mc-element.js';
import sheet from './tooltip.styles.js';

type Placement = 'top' | 'bottom' | 'left' | 'right'
  | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
  | 'left-start' | 'left-end' | 'right-start' | 'right-end';

const GAP = 8; // px between trigger and bubble

export class MCTooltip extends MCElement {
  static observedAttributes = ['title', 'placement', 'arrow'];

  private _bubble: HTMLElement | null = null;
  private _showTimeout: ReturnType<typeof setTimeout> | null = null;
  private _hideTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `
      <span class="mc-tooltip__trigger"><slot></slot></span>
      <div class="mc-tooltip__bubble" role="tooltip">
        ${this.getAttribute('title') ?? ''}
        <span class="mc-tooltip__arrow"></span>
      </div>
    `;
    this._bubble = this.shadow.querySelector('.mc-tooltip__bubble');
  }

  protected addEventListeners(): void {
    this.addEventListener('mouseenter', this._show);
    this.addEventListener('mouseleave', this._hide);
    this.addEventListener('focusin', this._show);
    this.addEventListener('focusout', this._hide);
    this.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') this._hideNow();
    });
  }

  protected cleanup(): void {
    this.removeEventListener('mouseenter', this._show);
    this.removeEventListener('mouseleave', this._hide);
    this.removeEventListener('focusin', this._show);
    this.removeEventListener('focusout', this._hide);
    if (this._showTimeout) clearTimeout(this._showTimeout);
    if (this._hideTimeout) clearTimeout(this._hideTimeout);
  }

  private _show = (): void => {
    if (this._hideTimeout) { clearTimeout(this._hideTimeout); this._hideTimeout = null; }
    this._showTimeout = setTimeout(() => {
      this._position();
      this._bubble?.setAttribute('data-show', '');
    }, 100);
  };

  private _hide = (): void => {
    if (this._showTimeout) { clearTimeout(this._showTimeout); this._showTimeout = null; }
    this._hideTimeout = setTimeout(() => this._hideNow(), 0);
  };

  private _hideNow(): void {
    this._bubble?.removeAttribute('data-show');
  }

  private _position(): void {
    const bubble = this._bubble;
    if (!bubble) return;
    const trigger = this.shadow.querySelector<HTMLElement>('.mc-tooltip__trigger');
    if (!trigger) return;

    const rawPlacement = (this.getAttribute('placement') ?? 'bottom') as Placement;
    // Normalise compound placements → primary axis
    const side = rawPlacement.split('-')[0] as 'top' | 'bottom' | 'left' | 'right';
    const align = rawPlacement.split('-')[1] as 'start' | 'end' | undefined;

    bubble.setAttribute('data-placement', side);

    // Temporarily show to measure, but invisible (opacity still 0 before data-show)
    bubble.style.visibility = 'hidden';
    bubble.style.left = '0';
    bubble.style.top = '0';

    // Use slotted content rect if available, else host rect
    const slot = trigger.querySelector('slot');
    const assigned = slot?.assignedElements?.();
    const triggerEl = (assigned && assigned.length > 0 ? assigned[0] : this) as Element;
    const tr = triggerEl.getBoundingClientRect();
    const br = bubble.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (side) {
      case 'top':
        top  = tr.top - br.height - GAP;
        left = this._hAlign(align, tr, br);
        break;
      case 'bottom':
        top  = tr.bottom + GAP;
        left = this._hAlign(align, tr, br);
        break;
      case 'left':
        top  = this._vAlign(align, tr, br);
        left = tr.left - br.width - GAP;
        break;
      case 'right':
        top  = this._vAlign(align, tr, br);
        left = tr.right + GAP;
        break;
    }

    // Clamp to viewport
    const vw = window.innerWidth, vh = window.innerHeight;
    left = Math.max(8, Math.min(left, vw - br.width - 8));
    top  = Math.max(8, Math.min(top,  vh - br.height - 8));

    bubble.style.left = `${left}px`;
    bubble.style.top  = `${top}px`;
    bubble.style.visibility = '';
  }

  private _hAlign(align: 'start' | 'end' | undefined, tr: DOMRect, br: DOMRect): number {
    if (align === 'start') return tr.left;
    if (align === 'end')   return tr.right - br.width;
    return tr.left + tr.width / 2 - br.width / 2;
  }

  private _vAlign(align: 'start' | 'end' | undefined, tr: DOMRect, br: DOMRect): number {
    if (align === 'start') return tr.top;
    if (align === 'end')   return tr.bottom - br.height;
    return tr.top + tr.height / 2 - br.height / 2;
  }
}

customElements.define('mc-tooltip', MCTooltip);
