import { defaultTheme } from './default-theme.js';
import { themeToVars, varsToStyle } from './css-variables.js';
import type { MCTheme, MCThemeInput } from './types.js';

function deepMerge<T extends object>(target: T, source: Partial<T>): T {
  const result = { ...target } as T;
  for (const key of Object.keys(source) as (keyof T)[]) {
    const srcVal = source[key];
    const tgtVal = target[key];
    if (
      srcVal !== undefined &&
      srcVal !== null &&
      typeof srcVal === 'object' &&
      !Array.isArray(srcVal) &&
      typeof tgtVal === 'object' &&
      tgtVal !== null &&
      !Array.isArray(tgtVal)
    ) {
      result[key] = deepMerge(tgtVal as object, srcVal as object) as T[keyof T];
    } else if (srcVal !== undefined) {
      result[key] = srcVal as T[keyof T];
    }
  }
  return result;
}

export class MCThemeProvider extends HTMLElement {
  private _theme: MCTheme = defaultTheme;

  connectedCallback(): void {
    this._applyTheme(this._theme);
  }

  get theme(): MCTheme {
    return this._theme;
  }

  set theme(value: MCThemeInput) {
    this._theme = deepMerge(defaultTheme, value as Partial<MCTheme>);
    this._applyTheme(this._theme);
  }

  private _applyTheme(theme: MCTheme): void {
    const vars = themeToVars(theme);
    this.setAttribute('style', varsToStyle(vars));
  }
}

if (!customElements.get('mc-theme-provider')) {
  customElements.define('mc-theme-provider', MCThemeProvider);
}
