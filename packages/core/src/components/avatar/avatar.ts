import { MEElement } from '../../base/me-element.js';
import sheet from './avatar.styles.js';

export class MEAvatar extends MEElement {
  static observedAttributes = ['src', 'alt', 'variant'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    const src = this.getAttribute('src') ?? '';
    const alt = this.getAttribute('alt') ?? '';

    this.shadow.innerHTML = src
      ? `<img class="me-avatar__img" src="${src}" alt="${alt}">`
      : `<span class="me-avatar__letter"><slot></slot></span>`;
  }
}

customElements.define('me-avatar', MEAvatar);
