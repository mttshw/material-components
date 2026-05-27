import { MEElement } from '../../base/me-element.js';
import { titleSheet, contentSheet, actionsSheet } from './dialog.styles.js';

export class MEDialogTitle extends MEElement {
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [titleSheet];
  }
  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

export class MEDialogContent extends MEElement {
  static observedAttributes = ['dividers'];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [contentSheet];
  }
  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

export class MEDialogActions extends MEElement {
  static observedAttributes = ['disable-spacing'];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [actionsSheet];
  }
  protected render(): void {
    this.shadow.innerHTML = `<slot></slot>`;
  }
}

customElements.define('me-dialog-title', MEDialogTitle);
customElements.define('me-dialog-content', MEDialogContent);
customElements.define('me-dialog-actions', MEDialogActions);
