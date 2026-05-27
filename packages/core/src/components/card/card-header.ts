import { MEElement } from '../../base/me-element.js';
import sheet from './card-header.styles.js';

export class MECardHeader extends MEElement {
  static observedAttributes = ['title', 'subheader'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = `
      <div class="me-card-header__avatar" hidden><slot name="avatar"></slot></div>
      <div class="me-card-header__content">
        <slot name="title"><span class="me-card-header__title"></span></slot>
        <slot name="subheader"><span class="me-card-header__subheader"></span></slot>
      </div>
      <div class="me-card-header__action" hidden><slot name="action"></slot></div>
    `;

    (this.shadow.querySelector('.me-card-header__title') as HTMLElement).textContent =
      this.getAttribute('title') ?? '';
    (this.shadow.querySelector('.me-card-header__subheader') as HTMLElement).textContent =
      this.getAttribute('subheader') ?? '';

    this._setupSlots();
  }

  private _setupSlots(): void {
    for (const name of ['avatar', 'action'] as const) {
      const slot = this.shadow.querySelector<HTMLSlotElement>(`slot[name="${name}"]`)!;
      const wrap = slot.parentElement as HTMLElement;
      const update = (): void => { wrap.hidden = slot.assignedElements().length === 0; };
      slot.addEventListener('slotchange', update);
      requestAnimationFrame(update);
    }
  }
}

customElements.define('me-card-header', MECardHeader);
