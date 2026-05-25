import { MCElement } from '../../base/mc-element.js';
export declare class MCSwitch extends MCElement {
    static formAssociated: boolean;
    static observedAttributes: string[];
    private _internals;
    private _ripple;
    constructor();
    get checked(): boolean;
    set checked(val: boolean);
    get disabled(): boolean;
    get value(): string;
    protected render(): void;
    protected addEventListeners(): void;
    protected cleanup(): void;
    private _handleClick;
    private _handleKeydown;
}
//# sourceMappingURL=switch.d.ts.map