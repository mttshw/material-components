const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    position: fixed;
    inset: 0;
    z-index: var(--me-zIndex-modal, 1300);
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-tap-highlight-color: transparent;
  }
  :host([open]) {
    opacity: 1;
    pointer-events: auto;
  }
  :host([invisible]) {
    background-color: transparent;
  }
`);
export default sheet;
