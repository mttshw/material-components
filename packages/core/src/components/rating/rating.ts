import { MEElement } from '../../base/me-element.js';
import sheet from './rating.styles.js';

const STAR_EMPTY = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>`;
const STAR_FULL = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;

export class MERating extends MEElement {
  static observedAttributes = ['value', 'max', 'precision', 'size', 'color', 'disabled', 'read-only'];

  private _hoverValue: number | null = null;

  private get _value() { return parseFloat(this.getAttribute('value') ?? '0'); }
  private get _max() { return parseInt(this.getAttribute('max') ?? '5'); }
  private get _precision() { return parseFloat(this.getAttribute('precision') ?? '1'); }

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    if (this.shadow.querySelector('.me-rating')) {
      this._syncStars();
      return;
    }
    this.shadow.innerHTML = `<span class="me-rating" role="radiogroup"></span>`;
    this._syncStars();
  }

  protected addEventListeners(): void {
    const root = this.shadow.querySelector<HTMLElement>('.me-rating');
    if (!root) return;
    root.addEventListener('click', this._onClick);
    root.addEventListener('mousemove', this._onMouseMove);
    root.addEventListener('mouseleave', this._onMouseLeave);
  }

  private _onClick = (e: MouseEvent): void => {
    if (this.hasAttribute('disabled') || this.hasAttribute('read-only')) return;
    const val = this._getValueFromEvent(e);
    if (val === null) return;
    const newVal = val === this._value ? 0 : val;
    this.setAttribute('value', String(newVal));
    this.dispatchEvent(new CustomEvent('me-change', { detail: { value: newVal }, bubbles: true, composed: true }));
  };

  private _onMouseMove = (e: MouseEvent): void => {
    if (this.hasAttribute('disabled') || this.hasAttribute('read-only')) return;
    const val = this._getValueFromEvent(e);
    if (val !== this._hoverValue) {
      this._hoverValue = val;
      this._syncStars();
    }
  };

  private _onMouseLeave = (): void => {
    this._hoverValue = null;
    this._syncStars();
  };

  private _getValueFromEvent(e: MouseEvent): number | null {
    const item = (e.target as Element)?.closest('.me-rating__item') as HTMLElement | null;
    if (!item) return null;
    const itemVal = parseFloat(item.dataset.value ?? '0');
    if (this._precision === 0.5) {
      const rect = item.getBoundingClientRect();
      const half = e.clientX - rect.left < rect.width / 2;
      return half ? itemVal - 0.5 : itemVal;
    }
    return itemVal;
  }

  private _syncStars(): void {
    const root = this.shadow.querySelector<HTMLElement>('.me-rating');
    if (!root) return;
    const max = this._max;
    const precision = this._precision;
    const displayValue = this._hoverValue ?? this._value;
    const disabled = this.hasAttribute('disabled');
    const readOnly = this.hasAttribute('read-only');

    let html = '';
    for (let i = 1; i <= max; i++) {
      const filled = displayValue >= i;
      const half = !filled && precision === 0.5 && displayValue >= i - 0.5;
      const hovering = this._hoverValue !== null && this._hoverValue >= i;
      const hoverEmpty = this._hoverValue !== null && this._hoverValue < i;
      let itemClass = 'me-rating__item';
      if (hovering) itemClass += ' me-rating__item--hover';
      if (hoverEmpty) itemClass += ' me-rating__item--hover-empty';

      let iconHtml: string;
      if (filled) {
        iconHtml = `<span class="me-rating__icon me-rating__icon--filled">${STAR_FULL}</span>`;
      } else if (half) {
        iconHtml = `<span class="me-rating__icon">${STAR_EMPTY}</span><span class="me-rating__icon me-rating__icon--half">${STAR_FULL}</span>`;
      } else {
        iconHtml = `<span class="me-rating__icon">${STAR_EMPTY}</span>`;
      }

      html += `
        <span class="${itemClass}" data-value="${i}"
              role="radio" aria-checked="${filled}"
              tabindex="${!disabled && !readOnly ? 0 : -1}">
          ${iconHtml}
        </span>`;
    }
    root.innerHTML = html;
  }

  protected onAttributeChanged(): void {
    this._syncStars();
  }

  protected cleanup(): void { /* nothing */ }
}

customElements.define('me-rating', MERating);
