import { MEElement } from '../../base/me-element.js';
export declare class MERadioGroup extends MEElement {
    static observedAttributes: string[];
    constructor();
    get value(): string;
    set value(val: string);
    protected render(): void;
    protected addEventListeners(): void;
    protected cleanup(): void;
    private _handleSelect;
    private _syncRadios;
    protected onAttributeChanged(name: string, _oldVal: string | null, _newVal: string | null): void;
}
//# sourceMappingURL=radio-group.d.ts.map