import { defaultTheme } from './default-theme.js';
import { themeToVars, varsToStyle } from './css-variables.js';
import type { METheme, METhemeInput } from './types.js';

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

export class METhemeProvider extends HTMLElement {
  private _theme: METheme = defaultTheme;

  connectedCallback(): void {
    this._applyTheme(this._theme);
  }

  get theme(): METheme {
    return this._theme;
  }

  set theme(value: METhemeInput) {
    this._theme = deepMerge(defaultTheme, value as Partial<METheme>);
    this._applyTheme(this._theme);
  }

  private _applyTheme(theme: METheme): void {
    const vars = themeToVars(theme);
    // Apply to self for scoped component inheritance
    this.setAttribute('style', varsToStyle(vars));
    // Also hoist onto :root so page-level styles (body background/color via
    // css-baseline, demo layout) can inherit the vars — body is an ancestor of
    // this element so its CSS variables don't cascade up without this hoist.
    const root = document.documentElement;
    for (const key of Array.from(root.style)) {
      if (key.startsWith('--me-')) root.style.removeProperty(key);
    }
    for (const [k, v] of Object.entries(vars)) {
      root.style.setProperty(k, v);
    }
  }
}

if (!customElements.get('me-theme-provider')) {
  customElements.define('me-theme-provider', METhemeProvider);
}
