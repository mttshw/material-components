import { MCElement } from '../../base/mc-element.js';
import sheet from './avatar.styles.js';

export class MCAvatar extends MCElement {
  static observedAttributes = ['src', 'alt', 'variant'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    const src = this.getAttribute('src') ?? '';
    const alt = this.getAttribute('alt') ?? '';

    this.shadow.innerHTML = src
      ? `<img class="mc-avatar__img" src="${src}" alt="${alt}">`
      : `<slot></slot>`;
  }
}

customElements.define('mc-avatar', MCAvatar);
