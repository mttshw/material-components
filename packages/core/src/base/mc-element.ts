export abstract class MCElement extends HTMLElement {
  protected shadow: ShadowRoot;

  constructor(init: ShadowRootInit = { mode: 'open' }) {
    super();
    this.shadow = this.attachShadow(init);
  }

  connectedCallback(): void {
    this.render();
    this.addEventListeners();
  }

  disconnectedCallback(): void {
    this.cleanup();
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null): void {
    if (oldVal !== newVal) {
      this.onAttributeChanged(name, oldVal, newVal);
      this.render();
    }
  }

  protected abstract render(): void;
  protected addEventListeners(): void {}
  protected cleanup(): void {}
  protected onAttributeChanged(
    _name: string,
    _oldVal: string | null,
    _newVal: string | null,
  ): void {}

  protected cssVar(name: string, fallback?: string): string {
    return `var(--mc-${name}${fallback ? ', ' + fallback : ''})`;
  }

  protected spacing(factor: number = 1): string {
    return `calc(var(--mc-spacing, 8px) * ${factor})`;
  }
}
