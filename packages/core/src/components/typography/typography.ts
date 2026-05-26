import { MEElement } from '../../base/me-element.js';
import sheet from './typography.styles.js';

const VARIANT_TAG: Record<string, string> = {
  h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6',
  subtitle1: 'h6', subtitle2: 'h6',
  body1: 'p', body2: 'p',
  button: 'span', caption: 'span', overline: 'span',
};

export class METypography extends MEElement {
  static observedAttributes = ['variant', 'color', 'align', 'gutter-bottom', 'no-wrap', 'component'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    const variant = this.getAttribute('variant') ?? 'body1';
    const color = this.getAttribute('color');
    const align = this.getAttribute('align');
    const gutterBottom = this.hasAttribute('gutter-bottom');
    const noWrap = this.hasAttribute('no-wrap');
    const tag = this.getAttribute('component') ?? VARIANT_TAG[variant] ?? 'p';

    const cls = ['me-typography', `me-typography--${variant}`];
    if (color && color !== 'initial') cls.push(`me-typography--color-${color}`);
    if (align && align !== 'inherit') cls.push(`me-typography--align-${align}`);
    if (gutterBottom) cls.push('me-typography--gutter-bottom');
    if (noWrap) cls.push('me-typography--no-wrap');

    this.shadow.innerHTML = `<${tag} class="${cls.join(' ')}"><slot></slot></${tag}>`;
  }
}
