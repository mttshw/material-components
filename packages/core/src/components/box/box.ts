import { MCElement } from '../../base/mc-element.js';

// Attribute → CSS property map for sx-like shorthand
const PROP_MAP: Record<string, string> = {
  display: 'display',
  'flex-direction': 'flex-direction',
  'flex-wrap': 'flex-wrap',
  'justify-content': 'justify-content',
  'align-items': 'align-items',
  'align-content': 'align-content',
  gap: 'gap',
  'row-gap': 'row-gap',
  'column-gap': 'column-gap',
  width: 'width',
  height: 'height',
  'min-width': 'min-width',
  'min-height': 'min-height',
  'max-width': 'max-width',
  'max-height': 'max-height',
  overflow: 'overflow',
  position: 'position',
  top: 'top', right: 'right', bottom: 'bottom', left: 'left',
  'z-index': 'z-index',
  bgcolor: 'background-color',
  color: 'color',
  border: 'border',
  'border-radius': 'border-radius',
  padding: 'padding',
  'padding-top': 'padding-top',
  'padding-right': 'padding-right',
  'padding-bottom': 'padding-bottom',
  'padding-left': 'padding-left',
  margin: 'margin',
  'margin-top': 'margin-top',
  'margin-right': 'margin-right',
  'margin-bottom': 'margin-bottom',
  'margin-left': 'margin-left',
  // shorthands
  p: 'padding', pt: 'padding-top', pr: 'padding-right', pb: 'padding-bottom', pl: 'padding-left',
  m: 'margin',  mt: 'margin-top',  mr: 'margin-right',  mb: 'margin-bottom',  ml: 'margin-left',
};

const sheet = new CSSStyleSheet();
sheet.replaceSync(`:host { display: block; box-sizing: border-box; }`);

export class MCBox extends MCElement {
  static observedAttributes = Object.keys(PROP_MAP);

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    // Apply sx-like attributes as inline styles on the host
    for (const [attr, cssProp] of Object.entries(PROP_MAP)) {
      const val = this.getAttribute(attr);
      if (val !== null) {
        this.style.setProperty(cssProp, val);
      }
    }
    this.shadow.innerHTML = `<slot></slot>`;
  }
}
