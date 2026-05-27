const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    position: fixed;
    z-index: var(--me-zIndex-snackbar, 1400);
    display: flex;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(200%);
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1),
                opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    pointer-events: none;
    min-width: 288px;
    max-width: 568px;
  }

  /* anchor-origin positions */
  :host([anchor-origin="bottom-left"])   { left: 24px;  right: auto; transform: translateX(0) translateY(200%); }
  :host([anchor-origin="bottom-right"])  { right: 24px; left: auto;  transform: translateX(0) translateY(200%); }
  :host([anchor-origin="top-center"])    { top: 24px; bottom: auto; left: 50%; transform: translateX(-50%) translateY(-200%); }
  :host([anchor-origin="top-left"])      { top: 24px; bottom: auto; left: 24px; right: auto; transform: translateX(0) translateY(-200%); }
  :host([anchor-origin="top-right"])     { top: 24px; bottom: auto; right: 24px; left: auto; transform: translateX(0) translateY(-200%); }

  :host([open]) {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0) !important;
  }
  :host([anchor-origin="bottom-left"][open]),
  :host([anchor-origin="bottom-right"][open]),
  :host([anchor-origin="top-left"][open]),
  :host([anchor-origin="top-right"][open]) {
    transform: translateX(0) translateY(0) !important;
  }

  .me-snackbar__content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 6px 16px;
    min-width: 288px;
    background-color: #323232;
    color: rgba(255,255,255,0.87);
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
                0px 6px 10px 0px rgba(0,0,0,0.14),
                0px 1px 18px 0px rgba(0,0,0,0.12);
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.43;
    gap: 8px;
  }

  .me-snackbar__message {
    flex: 1;
    padding: 8px 0;
  }

  .me-snackbar__action {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: -8px;
  }
  .me-snackbar__action:empty { display: none; }
`);
export default sheet;
