import type { MCTheme, MCThemeInput } from './types.js';
export declare class MCThemeProvider extends HTMLElement {
    private _theme;
    connectedCallback(): void;
    get theme(): MCTheme;
    set theme(value: MCThemeInput);
    private _applyTheme;
}
//# sourceMappingURL=theme-provider.d.ts.map