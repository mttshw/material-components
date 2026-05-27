import { MEElement } from '../../base/me-element.js';
import { RippleController } from '../../utils/ripple.js';
import sheet, { rippleSheet } from './tab.styles.js';

export class METab extends MEElement {
  static observedAttributes = ['value', 'label', 'disabled', 'selected', 'icon'];

  private _ripple = new RippleController();

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet, rippleSheet];
  }

  protected render(): void {
    const label = this.getAttribute('label') ?? '';
    const icon = this.getAttribute('icon') ?? '';
    const disabled = this.hasAttribute('disabled');
    const selected = this.hasAttribute('selected');

    this.setAttribute('role', 'tab');
    this.setAttribute('aria-selected', String(selected));
    this.setAttribute('tabindex', disabled ? '-1' : selected ? '0' : '-1');

    this.shadow.innerHTML = `
      <button class="me-tab" ${disabled ? 'disabled' : ''} tabindex="-1">
        ${icon ? `<span class="me-tab__icon">${icon}</span>` : ''}
        ${label ? label : '<slot></slot>'}
      </button>
    `;

    const btn = this.shadow.querySelector<HTMLButtonElement>('.me-tab');
    if (btn) this._ripple.attach(btn);
  }

  protected cleanup(): void {
    this._ripple.detach();
  }

  protected addEventListeners(): void {
    this.addEventListener('click', this._onClick);
    this.addEventListener('keydown', this._onKeyDown);
  }

  private _onClick = (e: Event): void => {
    if (this.hasAttribute('disabled')) return;
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent('me-tab-select', {
      detail: { value: this.getAttribute('value') ?? this.getAttribute('label') ?? '' },
      bubbles: true,
      composed: true,
    }));
  };

  private _onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this._onClick(e);
    }
  };
}

customElements.define('me-tab', METab);
