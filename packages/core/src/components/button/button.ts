import { MEElement } from '../../base/me-element.js';
import { RippleController } from '../../utils/ripple.js';
import sheet, { rippleSheet } from './button.styles.js';

export class MEButton extends MEElement {
  static observedAttributes = ['variant', 'color', 'size', 'disabled', 'href', 'target'];

  private _ripple = new RippleController();

  constructor() {
    super({ mode: 'open', delegatesFocus: true });
    this.shadow.adoptedStyleSheets = [sheet, rippleSheet];
  }

  protected render(): void {
    const disabled = this.hasAttribute('disabled');
    const href = this.getAttribute('href');
    const tag = href ? 'a' : 'button';
    const attrs = href
      ? `href="${href}"${this.getAttribute('target') ? ` target="${this.getAttribute('target')}"` : ''}`
      : `type="button"${disabled ? ' disabled' : ''}`;

    this.shadow.innerHTML = `
      <${tag} class="me-button" ${attrs} ${href && disabled ? 'aria-disabled="true"' : ''}>
        <span class="me-button__start-icon" hidden><slot name="start-icon"></slot></span>
        <span class="me-button__label"><slot></slot></span>
        <span class="me-button__end-icon" hidden><slot name="end-icon"></slot></span>
      </${tag}>
    `;

    this._syncIconSlots();

    this._ripple.detach();
    if (!disabled) {
      const btn = this.shadow.querySelector<HTMLElement>('.me-button');
      if (btn) this._ripple.attach(btn);
    }
  }

  protected cleanup(): void {
    this._ripple.detach();
  }

  private _syncIconSlots(): void {
    for (const name of ['start-icon', 'end-icon'] as const) {
      const slot = this.shadow.querySelector<HTMLSlotElement>(`slot[name="${name}"]`);
      const wrapper = slot?.parentElement as HTMLElement | null;
      if (!slot || !wrapper) continue;
      const sync = (): void => { wrapper.hidden = slot.assignedNodes({ flatten: true }).length === 0; };
      slot.addEventListener('slotchange', sync);
      // Fire once asynchronously — slot assignment resolves after current microtask
      Promise.resolve().then(sync);
    }
  }
}
