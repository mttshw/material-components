import { MCElement } from '../../base/mc-element.js';
import type { MCRadio } from './radio.js';

const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  :host([row]) { flex-direction: row; flex-wrap: wrap; }
`);

export class MCRadioGroup extends MCElement {
  static observedAttributes = ['value', 'name', 'row'];

  constructor() {
    super({ mode: 'open' });
    this.shadow.adoptedStyleSheets = [sheet];
  }

  get value(): string { return this.getAttribute('value') ?? ''; }
  set value(val: string) { this.setAttribute('value', val); }

  protected render(): void {
    this.shadow.innerHTML = '<slot></slot>';
    this._syncRadios();
  }

  protected addEventListeners(): void {
    this.addEventListener('mc-radio-select', this._handleSelect);
  }

  protected cleanup(): void {
    this.removeEventListener('mc-radio-select', this._handleSelect);
  }

  private _handleSelect = (e: Event): void => {
    const target = e.target as MCRadio;
    const selected = target.value;
    const radios = this.querySelectorAll<MCRadio>('mc-radio');
    radios.forEach(r => {
      r.checked = r.value === selected;
    });
    this.setAttribute('value', selected);
    this.dispatchEvent(new Event('change', { bubbles: true }));
  };

  private _syncRadios(): void {
    const name = this.getAttribute('name');
    const value = this.getAttribute('value');
    const radios = this.querySelectorAll<MCRadio>('mc-radio');
    radios.forEach(r => {
      if (name && !r.getAttribute('name')) r.setAttribute('name', name);
      if (value !== null) r.checked = r.value === value;
    });
  }

  protected onAttributeChanged(name: string, _oldVal: string | null, _newVal: string | null): void {
    if (name === 'value') this._syncRadios();
  }
}

customElements.define('mc-radio-group', MCRadioGroup);
