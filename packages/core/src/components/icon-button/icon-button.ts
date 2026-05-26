import { MEElement } from '../../base/me-element.js';
import { RippleController } from '../../utils/ripple.js';
import sheet, { rippleSheet } from './icon-button.styles.js';

export class MEIconButton extends MEElement {
  static observedAttributes = ['color', 'size', 'disabled', 'edge'];

  private _ripple = new RippleController();

  constructor() {
    super({ mode: 'open', delegatesFocus: true });
    this.shadow.adoptedStyleSheets = [sheet, rippleSheet];
  }

  protected render(): void {
    const disabled = this.hasAttribute('disabled');
    this.shadow.innerHTML = `
      <button class="me-icon-button" type="button" ${disabled ? 'disabled' : ''} aria-label="${this.getAttribute('aria-label') ?? ''}">
        <slot></slot>
      </button>
    `;
    this._ripple.detach();
    if (!disabled) {
      const btn = this.shadow.querySelector<HTMLElement>('.me-icon-button');
      if (btn) this._ripple.attach(btn);
    }
  }

  protected cleanup(): void {
    this._ripple.detach();
  }
}
