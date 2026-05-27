import { MEElement } from '../../base/me-element.js';

function makeSheet(enterCss: string, exitCss: string, baseCss = '') {
  const s = new CSSStyleSheet();
  s.replaceSync(`
    :host { display: block; ${baseCss} }
    .me-transition {
      transition-duration: var(--_dur, 300ms);
      transition-timing-function: cubic-bezier(0.4,0,0.2,1);
    }
    .me-transition--enter { ${enterCss} }
    .me-transition--exit  { ${exitCss} }
  `);
  return s;
}

abstract class TransitionBase extends MEElement {
  protected abstract _sheet: CSSStyleSheet;
  static observedAttributes = ['in', 'timeout'];

  connectedCallback(): void {
    this.shadow.adoptedStyleSheets = [this._sheet];
    super.connectedCallback();
  }

  protected render(): void {
    if (this.shadow.querySelector('.me-transition')) { this._sync(); return; }
    this.shadow.innerHTML = `<div class="me-transition me-transition--exit"><slot></slot></div>`;
    requestAnimationFrame(() => this._sync());
  }

  protected _sync(): void {
    const div = this.shadow.querySelector<HTMLElement>('.me-transition');
    if (!div) return;
    div.style.setProperty('--_dur', (this.getAttribute('timeout') ?? '300') + 'ms');
    const isIn = this.hasAttribute('in');
    div.classList.toggle('me-transition--enter', isIn);
    div.classList.toggle('me-transition--exit', !isIn);
  }

  protected onAttributeChanged(): void { this._sync(); }
}

const _fadeSheet = makeSheet('opacity:1;', 'opacity:0;');
export class MEFade extends TransitionBase {
  protected _sheet = _fadeSheet;
}

const _growSheet = makeSheet('opacity:1;transform:scale(1);', 'opacity:0;transform:scale(0.75);');
export class MEGrow extends TransitionBase {
  protected _sheet = _growSheet;
}

const _zoomSheet = makeSheet('opacity:1;transform:scale(1);', 'opacity:0;transform:scale(0);');
export class MEZoom extends TransitionBase {
  protected _sheet = _zoomSheet;
}

const _collapseSheet = (() => {
  const s = new CSSStyleSheet();
  s.replaceSync(`
    :host { display: block; }
    .me-collapse {
      overflow: hidden;
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows var(--_dur, 300ms) cubic-bezier(0.4,0,0.2,1);
    }
    .me-collapse--in { grid-template-rows: 1fr; }
    .me-collapse__inner { min-height: 0; }
  `);
  return s;
})();

export class MECollapse extends MEElement {
  static observedAttributes = ['in', 'timeout'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [_collapseSheet];
  }

  protected render(): void {
    if (this.shadow.querySelector('.me-collapse')) { this._sync(); return; }
    this.shadow.innerHTML = `<div class="me-collapse"><div class="me-collapse__inner"><slot></slot></div></div>`;
    requestAnimationFrame(() => this._sync());
  }

  private _sync(): void {
    const div = this.shadow.querySelector<HTMLElement>('.me-collapse');
    if (!div) return;
    div.style.setProperty('--_dur', (this.getAttribute('timeout') ?? '300') + 'ms');
    div.classList.toggle('me-collapse--in', this.hasAttribute('in'));
  }

  protected onAttributeChanged(): void { this._sync(); }
}

const _slideSheet = (() => {
  const s = new CSSStyleSheet();
  s.replaceSync(`
    :host { display: block; overflow: hidden; }
    .me-slide {
      transition: transform var(--_dur, 300ms) cubic-bezier(0.4,0,0.2,1);
      transform: var(--_exit, translateY(-100%));
    }
    .me-slide--in { transform: none; }
  `);
  return s;
})();

export class MESlide extends MEElement {
  static observedAttributes = ['in', 'direction', 'timeout'];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [_slideSheet];
  }

  protected render(): void {
    if (this.shadow.querySelector('.me-slide')) { this._sync(); return; }
    this.shadow.innerHTML = `<div class="me-slide"><slot></slot></div>`;
    requestAnimationFrame(() => this._sync());
  }

  private _sync(): void {
    const div = this.shadow.querySelector<HTMLElement>('.me-slide');
    if (!div) return;
    div.style.setProperty('--_dur', (this.getAttribute('timeout') ?? '300') + 'ms');
    const exits: Record<string, string> = {
      down: 'translateY(-100%)', up: 'translateY(100%)',
      right: 'translateX(-100%)', left: 'translateX(100%)',
    };
    div.style.setProperty('--_exit', exits[this.getAttribute('direction') ?? 'down'] ?? exits['down']);
    div.classList.toggle('me-slide--in', this.hasAttribute('in'));
  }

  protected onAttributeChanged(): void { this._sync(); }
}

customElements.define('me-fade',     MEFade);
customElements.define('me-grow',     MEGrow);
customElements.define('me-zoom',     MEZoom);
customElements.define('me-collapse', MECollapse);
customElements.define('me-slide',    MESlide);
