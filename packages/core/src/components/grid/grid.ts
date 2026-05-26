import { MEElement } from '../../base/me-element.js';

// Breakpoints match MUI defaults; can't use CSS vars in @media queries
const BP: [string, number][] = [
  ['xs', 0], ['sm', 600], ['md', 900], ['lg', 1200], ['xl', 1536],
];

function colWidth(val: string): string {
  if (val === 'auto') return 'flex:0 0 auto;max-width:none;width:auto';
  if (val === 'true') return 'flex-grow:1;flex-basis:0;max-width:100%';
  const n = Number(val);
  if (n === 12) return 'flex:0 0 100%;max-width:100%';
  const pct = `${parseFloat(((n / 12) * 100).toFixed(6))}%`;
  return `flex:0 0 ${pct};max-width:${pct}`;
}

export class MEGrid extends MEElement {
  static observedAttributes = [
    'container', 'item', 'spacing', 'direction', 'justify', 'align',
    'xs', 'sm', 'md', 'lg', 'xl', 'columns',
  ];

  constructor() {
    super();
  }

  protected render(): void {
    const isContainer = this.hasAttribute('container');
    const isItem = this.hasAttribute('item') || !isContainer;

    let css = ':host{box-sizing:border-box;}';

    if (isContainer) {
      const spacing = this.getAttribute('spacing') ?? '0';
      const direction = this.getAttribute('direction') ?? 'row';
      const justify = this.getAttribute('justify') ?? 'flex-start';
      const align = this.getAttribute('align') ?? 'stretch';
      const gap = isNaN(Number(spacing))
        ? spacing
        : `calc(var(--me-spacing,8px)*${spacing})`;
      css += `:host{display:flex;flex-wrap:wrap;flex-direction:${direction};justify-content:${justify};align-items:${align};gap:${gap};width:100%;}`;
    }

    if (isItem) {
      // Mobile-first: xs applies from 0, each breakpoint overrides upward
      for (const [bp, minPx] of BP) {
        const val = this.getAttribute(bp);
        if (val === null) continue;
        const rule = `:host{${colWidth(val)};}`;
        css += minPx === 0 ? rule : `@media(min-width:${minPx}px){${rule}}`;
      }
    }

    this.shadow.innerHTML = `<style>${css}</style><slot></slot>`;
  }
}
