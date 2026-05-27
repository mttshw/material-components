import { MEElement } from '../../base/me-element.js';
import sheet from './slider.styles.js';

export class MESlider extends MEElement {
  static observedAttributes = ['value', 'min', 'max', 'step', 'disabled', 'color', 'size', 'marks', 'value-label-display'];

  private get _min() { return parseFloat(this.getAttribute('min') ?? '0'); }
  private get _max() { return parseFloat(this.getAttribute('max') ?? '100'); }
  private get _step() { return parseFloat(this.getAttribute('step') ?? '1'); }
  private get _val() { return parseFloat(this.getAttribute('value') ?? '0'); }

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    if (this.shadow.querySelector('.me-slider')) {
      this._syncVisuals();
      return;
    }
    const disabled = this.hasAttribute('disabled');
    const labelDisplay = this.getAttribute('value-label-display') ?? 'auto';
    this.shadow.innerHTML = `
      <div class="me-slider" role="slider" tabindex="${disabled ? -1 : 0}"
           aria-valuemin="${this._min}" aria-valuemax="${this._max}" aria-valuenow="${this._val}"
           aria-disabled="${disabled}">
        <span class="me-slider__rail"></span>
        <span class="me-slider__track"></span>
        <span class="me-slider__thumb">
          ${labelDisplay !== 'off' ? `<span class="me-slider__value-label">${this._val}</span>` : ''}
        </span>
        <span class="me-slider__marks"></span>
      </div>
    `;
    this._syncVisuals();
  }

  protected addEventListeners(): void {
    const root = this.shadow.querySelector<HTMLElement>('.me-slider');
    if (!root) return;
    root.addEventListener('keydown', this._onKeyDown);
    root.addEventListener('pointerdown', this._onPointerDown);
  }

  private _onKeyDown = (e: KeyboardEvent): void => {
    if (this.hasAttribute('disabled')) return;
    let newVal = this._val;
    switch (e.key) {
      case 'ArrowRight': case 'ArrowUp':   newVal += this._step; break;
      case 'ArrowLeft':  case 'ArrowDown': newVal -= this._step; break;
      case 'Home': newVal = this._min; break;
      case 'End':  newVal = this._max; break;
      default: return;
    }
    e.preventDefault();
    this._commit(newVal);
  };

  private _onPointerDown = (e: PointerEvent): void => {
    if (this.hasAttribute('disabled')) return;
    e.preventDefault();
    const root = this.shadow.querySelector<HTMLElement>('.me-slider');
    root?.classList.add('me-slider--active');
    this._updateFromPointer(e);

    const onMove = (ev: PointerEvent) => this._updateFromPointer(ev);
    const onUp = () => {
      root?.classList.remove('me-slider--active');
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup', onUp);
    };
    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onUp);
  };

  private _updateFromPointer(e: PointerEvent): void {
    const root = this.shadow.querySelector<HTMLElement>('.me-slider');
    if (!root) return;
    const rect = root.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    this._commit(this._min + pct * (this._max - this._min));
  }

  private _commit(raw: number): void {
    const step = this._step;
    const snapped = Math.round(raw / step) * step;
    const clamped = Math.max(this._min, Math.min(this._max, parseFloat(snapped.toFixed(10))));
    if (clamped === this._val) return;
    this.setAttribute('value', String(clamped));
    this.dispatchEvent(new CustomEvent('me-change', { detail: { value: clamped }, bubbles: true, composed: true }));
  }

  private _syncVisuals(): void {
    const root = this.shadow.querySelector<HTMLElement>('.me-slider');
    const track = this.shadow.querySelector<HTMLElement>('.me-slider__track');
    const thumb = this.shadow.querySelector<HTMLElement>('.me-slider__thumb');
    const label = this.shadow.querySelector<HTMLElement>('.me-slider__value-label');
    const marksEl = this.shadow.querySelector<HTMLElement>('.me-slider__marks');
    if (!root || !track || !thumb) return;

    const pct = ((this._val - this._min) / (this._max - this._min)) * 100;
    track.style.width = `${pct}%`;
    thumb.style.left = `${pct}%`;
    root.setAttribute('aria-valuenow', String(this._val));
    if (label) label.textContent = String(this._val);

    if (marksEl) {
      const marksAttr = this.getAttribute('marks');
      if (marksAttr !== null) {
        let marks: Array<{ value: number; label?: string }> = [];
        if (marksAttr === '' || marksAttr === 'true') {
          const count = Math.round((this._max - this._min) / this._step);
          marks = Array.from({ length: count + 1 }, (_, i) => ({ value: this._min + i * this._step }));
        } else {
          try { marks = JSON.parse(marksAttr); } catch { /* ignore */ }
        }
        marksEl.innerHTML = marks.map(m => {
          const mp = ((m.value - this._min) / (this._max - this._min)) * 100;
          const active = m.value <= this._val;
          return `<span class="me-slider__mark ${active ? 'me-slider__mark--active' : ''}" style="left:${mp}%;top:50%"></span>`;
        }).join('');
      }
    }
  }

  protected onAttributeChanged(): void {
    if (this.shadow.querySelector('.me-slider')) this._syncVisuals();
  }

  protected cleanup(): void { /* nothing */ }
}

customElements.define('me-slider', MESlider);
