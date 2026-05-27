import { MEElement } from '../../base/me-element.js';
import sheet from './tabs.styles.js';

export class METabs extends MEElement {
  static observedAttributes = ['value', 'variant', 'centered', 'indicator-color'];

  private _resizeObserver: ResizeObserver | null = null;

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  get value(): string { return this.getAttribute('value') ?? ''; }
  set value(v: string) {
    this.setAttribute('value', v);
    this._syncSelected();
    this._updateIndicator();
    this.dispatchEvent(new CustomEvent('me-change', {
      detail: { value: v },
      bubbles: true,
      composed: true,
    }));
  }

  protected render(): void {
    this.setAttribute('role', 'tablist');
    this.shadow.innerHTML = `
      <div class="me-tabs__scroller">
        <div class="me-tabs__flex">
          <slot></slot>
        </div>
        <span class="me-tabs__indicator"></span>
      </div>
    `;

    const slot = this.shadow.querySelector<HTMLSlotElement>('slot')!;
    slot.addEventListener('slotchange', () => {
      this._syncSelected();
      this._updateIndicator();
    });

    this._resizeObserver?.disconnect();
    this._resizeObserver = new ResizeObserver(() => this._updateIndicator());
    this._resizeObserver.observe(this);
  }

  protected addEventListeners(): void {
    this.addEventListener('me-tab-select', this._onTabSelect as EventListener);
    this.addEventListener('keydown', this._onKeyDown);
  }

  protected cleanup(): void {
    this.removeEventListener('me-tab-select', this._onTabSelect as EventListener);
    this.removeEventListener('keydown', this._onKeyDown);
    this._resizeObserver?.disconnect();
    this._resizeObserver = null;
  }

  private _getTabs(): HTMLElement[] {
    const slot = this.shadow.querySelector<HTMLSlotElement>('slot');
    return (slot?.assignedElements() ?? []).filter(
      el => el.tagName === 'ME-TAB'
    ) as HTMLElement[];
  }

  private _syncSelected(): void {
    const value = this.getAttribute('value');
    const tabs = this._getTabs();
    tabs.forEach((tab, i) => {
      const tabValue = tab.getAttribute('value') ?? String(i);
      const isSelected = tabValue === value;
      tab.toggleAttribute('selected', isSelected);
      tab.setAttribute('tabindex', isSelected ? '0' : '-1');
      // Pass indicator color down via CSS variable
      (tab as HTMLElement).style.setProperty(
        '--_indicator-color',
        `var(--me-palette-${this.getAttribute('indicator-color') ?? 'primary'}-main, #1976d2)`
      );
    });
  }

  private _updateIndicator(): void {
    const value = this.getAttribute('value');
    const tabs = this._getTabs();
    const indicator = this.shadow.querySelector<HTMLElement>('.me-tabs__indicator');
    const scroller = this.shadow.querySelector<HTMLElement>('.me-tabs__scroller');
    if (!indicator || !scroller) return;

    const selectedTab = tabs.find((tab, i) => {
      return (tab.getAttribute('value') ?? String(i)) === value;
    }) as HTMLElement | undefined;

    if (!selectedTab) {
      indicator.style.left = '0';
      indicator.style.width = '0';
      return;
    }

    const scrollerRect = scroller.getBoundingClientRect();
    const tabRect = selectedTab.getBoundingClientRect();
    indicator.style.left = `${tabRect.left - scrollerRect.left + scroller.scrollLeft}px`;
    indicator.style.width = `${tabRect.width}px`;
  }

  private _onTabSelect = (e: CustomEvent): void => {
    const newValue = e.detail.value as string;
    if (newValue === this.getAttribute('value')) return;
    this.setAttribute('value', newValue);
    this._syncSelected();
    this._updateIndicator();
    this.dispatchEvent(new CustomEvent('me-change', {
      detail: { value: newValue },
      bubbles: true,
      composed: true,
    }));
  };

  private _onKeyDown = (e: KeyboardEvent): void => {
    const tabs = this._getTabs().filter(t => !t.hasAttribute('disabled'));
    if (!tabs.length) return;
    const value = this.getAttribute('value');
    const currentIdx = tabs.findIndex((t, i) => (t.getAttribute('value') ?? String(i)) === value);

    let nextIdx = currentIdx;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIdx = (currentIdx + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIdx = (currentIdx - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      nextIdx = 0;
    } else if (e.key === 'End') {
      nextIdx = tabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextTab = tabs[nextIdx];
    const nextValue = nextTab.getAttribute('value') ?? String(nextIdx);
    this.value = nextValue;
    (nextTab as HTMLElement).focus();
  };
}

customElements.define('me-tabs', METabs);
