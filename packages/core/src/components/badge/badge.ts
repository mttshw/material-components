import { MCElement } from '../../base/mc-element.js';
import sheet from './badge.styles.js';

export class MCBadge extends MCElement {
  static observedAttributes = ['badge-content', 'color', 'variant', 'max', 'invisible', 'overlap'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    const content = this.getAttribute('badge-content') ?? '';
    const variant = this.getAttribute('variant') ?? 'standard';
    const max = parseInt(this.getAttribute('max') ?? '99');
    const invisible = this.hasAttribute('invisible');

    let label = content;
    if (variant !== 'dot') {
      const num = Number(content);
      if (!isNaN(num) && content !== '') label = num > max ? `${max}+` : String(num);
    }

    const badge = invisible ? '' : `<span class="mc-badge" aria-label="${label}">${variant === 'dot' ? '' : label}</span>`;

    this.shadow.innerHTML = `<slot></slot>${badge}`;
  }
}

customElements.define('mc-badge', MCBadge);
