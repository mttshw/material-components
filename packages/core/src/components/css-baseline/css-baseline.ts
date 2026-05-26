import sheet from './css-baseline.styles.js';

export class MECssBaseline extends HTMLElement {
  private static _injected = false;

  connectedCallback(): void {
    if (MECssBaseline._injected) return;
    MECssBaseline._injected = true;
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
  }

  disconnectedCallback(): void {
    MECssBaseline._injected = false;
    document.adoptedStyleSheets = document.adoptedStyleSheets.filter((s) => s !== sheet);
  }
}
