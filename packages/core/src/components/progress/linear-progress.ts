import { MEElement } from '../../base/me-element.js';
import { linearSheet } from './progress.styles.js';

export class MELinearProgress extends MEElement {
  static observedAttributes = ['variant', 'value', 'value-buffer', 'color'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [linearSheet];
  }

  protected render(): void {
    const variant = this.getAttribute('variant') ?? 'indeterminate';
    const value = Math.min(100, Math.max(0, Number(this.getAttribute('value') ?? 0)));
    const buffer = Math.min(100, Math.max(0, Number(this.getAttribute('value-buffer') ?? 0)));

    this.setAttribute('role', 'progressbar');
    if (variant === 'determinate' || variant === 'buffer') {
      this.setAttribute('aria-valuenow', String(value));
      this.setAttribute('aria-valuemin', '0');
      this.setAttribute('aria-valuemax', '100');
    }

    let bar1Style = '';
    let bar2Style = '';
    const dashedEl = variant === 'buffer'
      ? `<span class="me-linear-progress__dashed"></span>` : '';

    if (variant === 'determinate') {
      bar1Style = `transform: scaleX(${value / 100});`;
      bar2Style = 'display: none;';
    } else if (variant === 'buffer') {
      bar1Style = `transform: scaleX(${value / 100});`;
      bar2Style = `transform: scaleX(${buffer / 100});`;
    }

    this.shadow.innerHTML = `
      ${dashedEl}
      <span class="me-linear-progress__bar1" style="${bar1Style}"></span>
      <span class="me-linear-progress__bar2" style="${bar2Style}"></span>
    `;
  }
}

customElements.define('me-linear-progress', MELinearProgress);
