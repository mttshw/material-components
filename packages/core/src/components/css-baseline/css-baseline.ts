import sheet from './css-baseline.styles.js';

export class MCCssBaseline extends HTMLElement {
  private static _injected = false;

  connectedCallback(): void {
    if (MCCssBaseline._injected) return;
    MCCssBaseline._injected = true;
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
  }

  disconnectedCallback(): void {
    MCCssBaseline._injected = false;
    document.adoptedStyleSheets = document.adoptedStyleSheets.filter((s) => s !== sheet);
  }
}
