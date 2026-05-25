import { MCElement } from '../../base/mc-element.js';
import { RippleController } from '../../utils/ripple.js';
import sheet, { rippleSheet } from './chip.styles.js';

const DELETE_ICON = `<svg viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>`;

export class MCChip extends MCElement {
  static observedAttributes = ['variant', 'color', 'size', 'label', 'deletable', 'clickable', 'disabled'];

  private _ripple = new RippleController();

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet, rippleSheet];
  }

  protected render(): void {
    const deletable = this.hasAttribute('deletable');
    const clickable = this.hasAttribute('clickable');

    const deleteBtn = deletable
      ? `<button class="mc-chip__delete" aria-label="delete" tabindex="-1" type="button">${DELETE_ICON}</button>`
      : '';

    if (clickable) {
      this.setAttribute('role', 'button');
      this.setAttribute('tabindex', '0');
    }

    this.shadow.innerHTML = `
      <div class="mc-chip">
        <span class="mc-chip__icon-start" hidden><slot name="icon"></slot></span>
        <span class="mc-chip__label"><slot></slot></span>
        ${deleteBtn}
      </div>
    `;

    // Show icon slot only when filled
    const iconSlot = this.shadow.querySelector<HTMLSlotElement>('slot[name="icon"]');
    if (iconSlot) {
      const iconWrap = this.shadow.querySelector<HTMLElement>('.mc-chip__icon-start')!;
      iconSlot.addEventListener('slotchange', () => {
        iconWrap.hidden = iconSlot.assignedNodes().length === 0;
      });
    }

    if (clickable) {
      const inner = this.shadow.querySelector<HTMLElement>('.mc-chip')!;
      this._ripple.attach(inner);
    }

    if (deletable) {
      this.shadow.querySelector('.mc-chip__delete')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('mc-delete', { bubbles: true, composed: true }));
      });
    }
  }

  protected addEventListeners(): void {
    this.addEventListener('keydown', (e: KeyboardEvent) => {
      if (!this.hasAttribute('clickable')) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      } else if (e.key === 'Delete' || e.key === 'Backspace') {
        if (this.hasAttribute('deletable')) {
          this.dispatchEvent(new CustomEvent('mc-delete', { bubbles: true, composed: true }));
        }
      }
    });
  }
}

customElements.define('mc-chip', MCChip);
