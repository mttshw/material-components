import { MEElement } from '../../base/me-element.js';
export declare class MESelect extends MEElement {
    static formAssociated: boolean;
    static observedAttributes: string[];
    private _internals;
    private _focused;
    private _value;
    private _observer;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    get value(): string;
    set value(v: string);
    get disabled(): boolean;
    protected render(): void;
    private _updateNotchWidth;
    protected addEventListeners(): void;
    private _syncOptions;
    private _bindSelect;
    protected onAttributeChanged(name: string, _oldVal: string | null, newVal: string | null): void;
    formResetCallback(): void;
}
//# sourceMappingURL=select.d.ts.map