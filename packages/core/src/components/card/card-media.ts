import { MEElement } from '../../base/me-element.js';
import sheet from './card-media.styles.js';

export class MECardMedia extends MEElement {
  static observedAttributes = ['image', 'alt', 'height', 'component'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    if (this.shadow.querySelector('.me-card-media')) return;

    const component = this.getAttribute('component') ?? 'div';
    if (component === 'img') {
      const img = document.createElement('img');
      img.className = 'me-card-media';
      img.alt = this.getAttribute('alt') ?? '';
      img.src = this.getAttribute('image') ?? '';
      this.shadow.appendChild(img);
    } else {
      const div = document.createElement('div');
      div.className = 'me-card-media';
      this.shadow.appendChild(div);
    }

    this._updateStyle();
  }

  protected onAttributeChanged(name: string): void {
    if (name === 'image' || name === 'height') {
      this._updateStyle();
    }
  }

  private _updateStyle(): void {
    const el = this.shadow.querySelector<HTMLElement>('.me-card-media');
    if (!el) return;
    const image = this.getAttribute('image');
    const height = this.getAttribute('height');
    if (image && el.tagName === 'DIV') {
      el.style.backgroundImage = `url("${image}")`;
    }
    if (height) {
      el.style.height = `${height}${/^\d+$/.test(height) ? 'px' : ''}`;
    }
  }
}

customElements.define('me-card-media', MECardMedia);
