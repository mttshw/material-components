import { MEElement } from '../../base/me-element.js';
export declare class METooltip extends MEElement {
    static observedAttributes: string[];
    private _bubble;
    private _showTimeout;
    private _hideTimeout;
    constructor();
    protected render(): void;
    protected addEventListeners(): void;
    protected cleanup(): void;
    private _show;
    private _hide;
    private _hideNow;
    private _position;
    private _hAlign;
    private _vAlign;
}
//# sourceMappingURL=tooltip.d.ts.map