import { MEElement } from '../../base/me-element.js';
import { dialogSheet } from './dialog.styles.js';

const FOCUSABLE = [
  'a[href]', 'button:not([disabled])', 'input:not([disabled])',
  'select:not([disabled])', 'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export class MEDialog extends MEElement {
  static observedAttributes = ['open', 'full-width', 'full-screen', 'max-width'];

  private _previousFocus: Element | null = null;

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [dialogSheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `
      <div class="me-dialog__backdrop" part="backdrop">
        <div class="me-dialog__paper" role="dialog" aria-modal="true" part="paper">
          <slot></slot>
        </div>
      </div>
    `;

    this.shadow.querySelector('.me-dialog__backdrop')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        this.dispatchEvent(new CustomEvent('me-close', {
          detail: { reason: 'backdropClick' },
          bubbles: true, composed: true,
        }));
      }
    });
  }

  protected addEventListeners(): void {
    this.addEventListener('keydown', (e: KeyboardEvent) => {
      if (!this.hasAttribute('open')) return;
      if (e.key === 'Escape') {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('me-close', {
          detail: { reason: 'escapeKeyDown' },
          bubbles: true, composed: true,
        }));
      }
      if (e.key === 'Tab') this._trapFocus(e);
    });
  }

  protected onAttributeChanged(name: string): void {
    if (name === 'open') {
      if (this.hasAttribute('open')) {
        this._previousFocus = document.activeElement;
        requestAnimationFrame(() => this._focusFirst());
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
        if (this._previousFocus instanceof HTMLElement) {
          this._previousFocus.focus();
        }
      }
    }
  }

  private _getFocusable(): HTMLElement[] {
    const paper = this.shadow.querySelector('.me-dialog__paper');
    if (!paper) return [];
    // collect from shadow paper + slotted light DOM
    const fromPaper = Array.from(paper.querySelectorAll<HTMLElement>(FOCUSABLE));
    const slot = paper.querySelector('slot');
    const slotted = slot?.assignedElements({ flatten: true }) ?? [];
    const fromSlotted = slotted.flatMap(el =>
      [el, ...el.querySelectorAll<HTMLElement>(FOCUSABLE)]
    ).filter((el): el is HTMLElement => el instanceof HTMLElement && el.matches(FOCUSABLE));
    return [...fromPaper, ...fromSlotted];
  }

  private _focusFirst(): void {
    const els = this._getFocusable();
    (els[0] ?? this.shadow.querySelector<HTMLElement>('.me-dialog__paper'))?.focus();
  }

  private _trapFocus(e: KeyboardEvent): void {
    const els = this._getFocusable();
    if (!els.length) return;
    const first = els[0];
    const last = els[els.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}

customElements.define('me-dialog', MEDialog);
