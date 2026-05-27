import { MEElement } from '../../base/me-element.js';
import sheet from './breadcrumbs.styles.js';

export class MEBreadcrumbs extends MEElement {
  static observedAttributes = ['separator', 'max-items'];

  private _expanded = false;
  private _observer: MutationObserver | null = null;

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  connectedCallback(): void {
    super.connectedCallback();
    requestAnimationFrame(() => this.render());
    this._observer = new MutationObserver(() => this.render());
    this._observer.observe(this, { childList: true, subtree: true, characterData: true });
  }

  disconnectedCallback(): void {
    this._observer?.disconnect();
    this._observer = null;
    super.disconnectedCallback();
  }

  protected render(): void {
    const separator = this.getAttribute('separator') ?? '/';
    const maxItems = parseInt(this.getAttribute('max-items') ?? '8');
    const items = Array.from(this.children) as HTMLElement[];
    const total = items.length;

    let visibleItems: (HTMLElement | null)[] = items;
    if (!this._expanded && total > maxItems) {
      visibleItems = [items[0], null, items[total - 1]];
    }

    const listHtml = visibleItems.map((item, idx) => {
      const isLast = idx === visibleItems.length - 1;
      const sep = !isLast
        ? `<li class="me-breadcrumbs__separator" aria-hidden="true">${separator}</li>`
        : '';

      if (item === null) {
        return `
          <li class="me-breadcrumbs__item">
            <button class="me-breadcrumbs__expand" aria-label="Show full path">…</button>
          </li>
          ${sep}
        `;
      }

      return `<li class="me-breadcrumbs__item">${item.outerHTML}</li>${sep}`;
    }).join('');

    this.shadow.innerHTML = `
      <nav aria-label="${this.getAttribute('aria-label') ?? 'breadcrumb'}">
        <ol class="me-breadcrumbs">${listHtml}</ol>
      </nav>
    `;

    this.shadow.querySelector('.me-breadcrumbs__expand')
      ?.addEventListener('click', () => {
        this._expanded = true;
        this.render();
      });
  }
}

customElements.define('me-breadcrumbs', MEBreadcrumbs);
