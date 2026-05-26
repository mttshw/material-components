import { MEElement } from '../../base/me-element.js';
export declare class METextField extends MEElement {
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
    private _bindInput;
    private _syncStateClasses;
    private _updateNotchWidth;
    private _updateFloating;
    protected onAttributeChanged(name: string, _oldVal: string | null, newVal: string | null): void;
    formResetCallback(): void;
}
//# sourceMappingURL=text-field.d.ts.map