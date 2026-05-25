export declare abstract class MCElement extends HTMLElement {
    protected shadow: ShadowRoot;
    constructor(init?: ShadowRootInit);
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null): void;
    protected abstract render(): void;
    protected addEventListeners(): void;
    protected cleanup(): void;
    protected onAttributeChanged(_name: string, _oldVal: string | null, _newVal: string | null): void;
    protected cssVar(name: string, fallback?: string): string;
    protected spacing(factor?: number): string;
}
//# sourceMappingURL=mc-element.d.ts.map