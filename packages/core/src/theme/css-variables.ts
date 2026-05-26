import type { METheme } from './types.js';

type ThemeValue = string | number | boolean | ThemeObject | ThemeArray;
type ThemeObject = { [key: string]: ThemeValue };
type ThemeArray = ThemeValue[];

function isPlainObject(val: unknown): val is ThemeObject {
  return val !== null && typeof val === 'object' && !Array.isArray(val);
}

export function themeToVars(theme: METheme): Record<string, string> {
  const vars: Record<string, string> = {};

  function flatten(obj: ThemeObject, prefix: string): void {
    for (const key of Object.keys(obj)) {
      const val = obj[key];
      const path = prefix ? `${prefix}-${key}` : key;

      if (key === 'spacing' && (typeof val === 'number' || typeof val === 'function')) {
        // handled below, skip recursive path
        continue;
      }

      if (Array.isArray(val)) {
        (val as ThemeValue[]).forEach((item, idx) => {
          vars[`--me-${path}-${idx}`] = String(item);
        });
      } else if (isPlainObject(val)) {
        flatten(val as ThemeObject, path);
      } else {
        vars[`--me-${path}`] = String(val);
      }
    }
  }

  // Flatten everything except spacing (handled specially)
  const { spacing, ...rest } = theme as METheme & { spacing: METheme['spacing'] };
  flatten(rest as unknown as ThemeObject, '');

  // spacing → --me-spacing as a px value
  if (typeof spacing === 'number') {
    vars['--me-spacing'] = `${spacing}px`;
  } else if (typeof spacing === 'function') {
    const base = (spacing as (f: number) => string)(1);
    vars['--me-spacing'] = typeof base === 'string' ? base : `${base}px`;
  }

  return vars;
}

export function varsToStyle(vars: Record<string, string>): string {
  return Object.entries(vars)
    .map(([k, v]) => `${k}:${v}`)
    .join(';');
}
