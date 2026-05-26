import { MEElement } from '../../base/me-element.js';
export declare class MECheckbox extends MEElement {
    static formAssociated: boolean;
    static observedAttributes: string[];
    private _internals;
    private _ripple;
    constructor();
    get checked(): boolean;
    set checked(val: boolean);
    get indeterminate(): boolean;
    set indeterminate(val: boolean);
    get disabled(): boolean;
    get value(): string;
    protected render(): void;
    protected addEventListeners(): void;
    protected cleanup(): void;
    private _handleClick;
    private _handleKeydown;
    private _toggle;
}
//# sourceMappingURL=checkbox.d.ts.map