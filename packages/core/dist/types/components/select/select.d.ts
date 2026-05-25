import { MCElement } from '../../base/mc-element.js';
export declare class MCSelect extends MCElement {
    static formAssociated: boolean;
    static observedAttributes: string[];
    private _internals;
    private _focused;
    private _value;
    constructor();
    get value(): string;
    set value(v: string);
    get disabled(): boolean;
    protected render(): void;
    protected addEventListeners(): void;
    protected cleanup(): void;
    private _onSlotChange;
    private _syncOptions;
    private _bindSelect;
    private _updateFloating;
    protected onAttributeChanged(name: string, _oldVal: string | null, newVal: string | null): void;
    formResetCallback(): void;
}
//# sourceMappingURL=select.d.ts.map