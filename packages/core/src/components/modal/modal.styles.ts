const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: none;
    position: fixed;
    inset: 0;
    z-index: var(--me-zIndex-modal, 1300);
    align-items: center;
    justify-content: center;
  }
  :host([open]) { display: flex; }

  .me-modal__backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    -webkit-tap-highlight-color: transparent;
    animation: me-modal-backdrop-in var(--me-transitions-duration-standard, 300ms) cubic-bezier(0.4,0,0.2,1);
  }
  @keyframes me-modal-backdrop-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .me-modal__container {
    position: relative;
    z-index: 1;
    outline: none;
    animation: me-modal-in var(--me-transitions-duration-standard, 300ms) cubic-bezier(0.4,0,0.2,1);
  }
  @keyframes me-modal-in {
    from { opacity: 0; transform: scale(0.9); }
    to   { opacity: 1; transform: scale(1); }
  }
`);
export default sheet;
