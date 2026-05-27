import { MEElement } from '../../base/me-element.js';
import sheet from './bottom-navigation.styles.js';

export class MEBottomNavigation extends MEElement {
  static observedAttributes = ['value', 'show-labels'];

  get value(): string { return this.getAttribute('value') ?? ''; }
  set value(v: string) {
    this.setAttribute('value', v);
    this._syncSelected();
    this.dispatchEvent(new CustomEvent('me-change', {
      detail: { value: v },
      bubbles: true,
      composed: true,
    }));
  }

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.setAttribute('role', 'navigation');
    this.shadow.innerHTML = `
      <div class="me-bottom-navigation">
        <slot></slot>
      </div>
    `;
    requestAnimationFrame(() => this._syncSelected());
  }

  protected addEventListeners(): void {
    this.addEventListener('me-nav-action-select', this._onActionSelect as EventListener);
  }

  protected cleanup(): void {
    this.removeEventListener('me-nav-action-select', this._onActionSelect as EventListener);
  }

  private _syncSelected(): void {
    const value = this.getAttribute('value');
    const slot = this.shadow.querySelector<HTMLSlotElement>('slot');
    const actions = (slot?.assignedElements() ?? []).filter(
      el => el.tagName === 'ME-BOTTOM-NAV-ACTION'
    ) as HTMLElement[];
    const showLabels = this.hasAttribute('show-labels');

    actions.forEach((action, i) => {
      const actionValue = action.getAttribute('value') ?? String(i);
      action.toggleAttribute('selected', actionValue === value);
      if (showLabels) action.setAttribute('show-label', '');
      else action.removeAttribute('show-label');
    });
  }

  private _onActionSelect = (e: CustomEvent): void => {
    const newValue = e.detail.value as string;
    if (newValue === this.getAttribute('value')) return;
    this.setAttribute('value', newValue);
    this._syncSelected();
    this.dispatchEvent(new CustomEvent('me-change', {
      detail: { value: newValue },
      bubbles: true,
      composed: true,
    }));
  };
}

customElements.define('me-bottom-navigation', MEBottomNavigation);
