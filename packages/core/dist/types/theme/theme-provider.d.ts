import type { METheme, METhemeInput } from './types.js';
export declare class METhemeProvider extends HTMLElement {
    private _theme;
    connectedCallback(): void;
    get theme(): METheme;
    set theme(value: METhemeInput);
    private _applyTheme;
}
//# sourceMappingURL=theme-provider.d.ts.map