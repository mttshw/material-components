import { MEElement } from '../../base/me-element.js';
import sheet from './pagination.styles.js';

const PREV_SVG = `<svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>`;
const NEXT_SVG = `<svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>`;

export class MEPagination extends MEElement {
  static observedAttributes = ['count', 'page', 'sibling-count', 'boundary-count',
    'variant', 'shape', 'size', 'color', 'disabled', 'hide-prev', 'hide-next'];

  get page(): number { return parseInt(this.getAttribute('page') ?? '1'); }
  set page(v: number) { this.setAttribute('page', String(v)); }

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    const count = parseInt(this.getAttribute('count') ?? '1');
    const page = this.page;
    const siblingCount = parseInt(this.getAttribute('sibling-count') ?? '1');
    const boundaryCount = parseInt(this.getAttribute('boundary-count') ?? '1');
    const disabled = this.hasAttribute('disabled');
    const hidePrev = this.hasAttribute('hide-prev');
    const hideNext = this.hasAttribute('hide-next');

    this.setAttribute('role', 'navigation');
    this.setAttribute('aria-label', this.getAttribute('aria-label') ?? 'pagination');

    const items = this._buildItems(count, page, siblingCount, boundaryCount);

    const listItems = items.map(item => {
      if (item === 'prev') {
        return `<li class="me-pagination__item">
          <button class="me-pagination__btn me-pagination__nav"
            aria-label="Go to previous page"
            data-page="${page - 1}"
            ${page <= 1 || disabled ? 'disabled' : ''}
            ${hidePrev ? 'hidden' : ''}>
            ${PREV_SVG}
          </button>
        </li>`;
      }
      if (item === 'next') {
        return `<li class="me-pagination__item">
          <button class="me-pagination__btn me-pagination__nav"
            aria-label="Go to next page"
            data-page="${page + 1}"
            ${page >= count || disabled ? 'disabled' : ''}
            ${hideNext ? 'hidden' : ''}>
            ${NEXT_SVG}
          </button>
        </li>`;
      }
      if (item === '...') {
        return `<li class="me-pagination__item">
          <span class="me-pagination__ellipsis" aria-hidden="true">…</span>
        </li>`;
      }
      const n = item as number;
      return `<li class="me-pagination__item">
        <button class="me-pagination__btn"
          aria-label="Go to page ${n}"
          aria-current="${n === page ? 'true' : 'false'}"
          data-page="${n}"
          ${disabled ? 'disabled' : ''}>
          ${n}
        </button>
      </li>`;
    }).join('');

    this.shadow.innerHTML = `<ul class="me-pagination">${listItems}</ul>`;

    this.shadow.querySelectorAll<HTMLButtonElement>('.me-pagination__btn:not([disabled])').forEach(btn => {
      btn.addEventListener('click', () => {
        const p = parseInt(btn.dataset.page ?? '1');
        if (!p || p < 1 || p > count) return;
        this.setAttribute('page', String(p));
        this.dispatchEvent(new CustomEvent('me-change', {
          detail: { page: p },
          bubbles: true,
          composed: true,
        }));
      });
    });
  }

  private _buildItems(
    count: number,
    page: number,
    siblingCount: number,
    boundaryCount: number,
  ): (number | '...' | 'prev' | 'next')[] {
    const range = (start: number, end: number) =>
      Array.from({ length: end - start + 1 }, (_, i) => start + i);

    const startPages = range(1, Math.min(boundaryCount, count));
    const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
    const siblingStart = Math.max(
      Math.min(page - siblingCount, count - boundaryCount - siblingCount * 2 - 1),
      boundaryCount + 2,
    );
    const siblingEnd = Math.min(
      Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
      endPages.length > 0 ? endPages[0] - 2 : count - 1,
    );

    const items: (number | '...')[] = [
      ...startPages,
      ...(siblingStart > boundaryCount + 2 ? ['...' as const] :
          boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []),
      ...range(siblingStart, siblingEnd),
      ...(siblingEnd < count - boundaryCount - 1 ? ['...' as const] :
          count - boundaryCount > boundaryCount ? [count - boundaryCount] : []),
      ...endPages,
    ];

    const unique = [...new Set(items)];
    return ['prev', ...unique, 'next'];
  }
}

customElements.define('me-pagination', MEPagination);
