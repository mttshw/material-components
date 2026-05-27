import { MEElement } from '../../base/me-element.js';
import sheet from './popper.styles.js';

type Placement = 'top' | 'bottom' | 'left' | 'right' |
                 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' |
                 'left-start' | 'left-end' | 'right-start' | 'right-end';

export class MEPopper extends MEElement {
  static observedAttributes = ['open', 'anchor', 'placement'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    if (this.shadow.querySelector('slot')) return;
    this.shadow.innerHTML = `<slot></slot>`;
  }

  protected onAttributeChanged(name: string, _old: string | null, newVal: string | null): void {
    if (name === 'open' && newVal !== null) {
      requestAnimationFrame(() => this._position());
    }
  }

  /** Re-compute position from anchor element */
  update(): void {
    this._position();
  }

  private _position(): void {
    const anchorSel = this.getAttribute('anchor');
    const anchor = anchorSel ? document.querySelector(anchorSel) : null;
    if (!anchor) return;

    const placement = (this.getAttribute('placement') ?? 'bottom') as Placement;
    const aRect = anchor.getBoundingClientRect();
    const myRect = this.getBoundingClientRect();
    const offset = 8;

    let top = 0;
    let left = 0;
    const [side, align = 'center'] = placement.split('-') as [string, string | undefined];

    switch (side) {
      case 'bottom':
        top = aRect.bottom + offset;
        left = align === 'start' ? aRect.left : align === 'end' ? aRect.right - myRect.width : aRect.left + aRect.width / 2 - myRect.width / 2;
        break;
      case 'top':
        top = aRect.top - myRect.height - offset;
        left = align === 'start' ? aRect.left : align === 'end' ? aRect.right - myRect.width : aRect.left + aRect.width / 2 - myRect.width / 2;
        break;
      case 'left':
        left = aRect.left - myRect.width - offset;
        top = align === 'start' ? aRect.top : align === 'end' ? aRect.bottom - myRect.height : aRect.top + aRect.height / 2 - myRect.height / 2;
        break;
      case 'right':
        left = aRect.right + offset;
        top = align === 'start' ? aRect.top : align === 'end' ? aRect.bottom - myRect.height : aRect.top + aRect.height / 2 - myRect.height / 2;
        break;
    }

    // Clamp to viewport
    const pad = 4;
    top = Math.max(pad, Math.min(top, window.innerHeight - myRect.height - pad));
    left = Math.max(pad, Math.min(left, window.innerWidth - myRect.width - pad));

    this.style.top = `${top}px`;
    this.style.left = `${left}px`;
  }
}

customElements.define('me-popper', MEPopper);
