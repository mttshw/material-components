import { MEElement } from '../../base/me-element.js';
import { circularSheet } from './progress.styles.js';

const SIZE_DEFAULT = 40;
const THICKNESS = 3.6;

export class MECircularProgress extends MEElement {
  static observedAttributes = ['variant', 'value', 'size', 'color'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [circularSheet];
  }

  protected render(): void {
    const size = Number(this.getAttribute('size') ?? SIZE_DEFAULT);
    const variant = this.getAttribute('variant') ?? 'indeterminate';
    const value = Math.min(100, Math.max(0, Number(this.getAttribute('value') ?? 0)));

    const radius = (size - THICKNESS) / 2;
    const circumference = 2 * Math.PI * radius;
    const center = size / 2;

    let circleStyle = '';
    if (variant === 'determinate') {
      const offset = circumference - (value / 100) * circumference;
      circleStyle = `stroke-dasharray: ${circumference}px; stroke-dashoffset: ${offset}px;`;
    }

    this.setAttribute('role', 'progressbar');
    if (variant === 'determinate') {
      this.setAttribute('aria-valuenow', String(value));
      this.setAttribute('aria-valuemin', '0');
      this.setAttribute('aria-valuemax', '100');
    }

    this.shadow.innerHTML = `
      <svg class="me-circular-progress"
           width="${size}" height="${size}"
           viewBox="${center - size/2} ${center - size/2} ${size} ${size}">
        <circle
          class="me-circular-progress__circle"
          cx="${center}" cy="${center}" r="${radius}"
          fill="none"
          stroke-width="${THICKNESS}"
          style="${circleStyle}"
        />
      </svg>
    `;
  }
}

customElements.define('me-circular-progress', MECircularProgress);
