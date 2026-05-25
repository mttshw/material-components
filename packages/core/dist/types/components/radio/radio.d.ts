import { MCElement } from '../../base/mc-element.js';
export declare class MCRadio extends MCElement {
    static formAssociated: boolean;
    static observedAttributes: string[];
    private _internals;
    private _ripple;
    constructor();
    get checked(): boolean;
    set checked(val: boolean);
    get disabled(): boolean;
    get value(): string;
    get name(): string;
    protected render(): void;
    protected addEventListeners(): void;
    protected cleanup(): void;
    private _handleClick;
    private _handleKeydown;
    _select(): void;
    private _moveFocus;
}
//# sourceMappingURL=radio.d.ts.map