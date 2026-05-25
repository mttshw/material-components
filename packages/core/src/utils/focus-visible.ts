// Shared focus-visible helper. Relies on the native :focus-visible pseudo-class
// which is supported in all target browsers (Chrome 86+, Firefox 85+, Safari 15.4+).

export function addFocusVisibleStyles(sheet: CSSStyleSheet, selector: string): void {
  sheet.insertRule(`
    ${selector}:focus-visible {
      outline: 2px solid var(--mc-palette-primary-main, #1976d2);
      outline-offset: 2px;
    }
  `);
  sheet.insertRule(`${selector}:focus:not(:focus-visible) { outline: none; }`);
}
