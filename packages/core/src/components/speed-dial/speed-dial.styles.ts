const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    flex-direction: column-reverse;
    align-items: center;
    position: relative;
  }
  :host([direction="up"])    { flex-direction: column-reverse; }
  :host([direction="down"])  { flex-direction: column; }
  :host([direction="left"])  { flex-direction: row-reverse; }
  :host([direction="right"]) { flex-direction: row; }

  .me-speed-dial__fab {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    outline: none;
    background-color: var(--me-palette-primary-main, #1976d2);
    color: var(--me-palette-primary-contrastText, #fff);
    box-shadow: var(--me-shadows-6,
      0px 3px 5px -1px rgba(0,0,0,.2),
      0px 6px 10px rgba(0,0,0,.14),
      0px 1px 18px rgba(0,0,0,.12));
    transition: box-shadow 250ms cubic-bezier(0.4,0,0.2,1),
                transform 250ms cubic-bezier(0.4,0,0.2,1),
                background-color 250ms cubic-bezier(0.4,0,0.2,1);
    -webkit-tap-highlight-color: transparent;
  }
  .me-speed-dial__fab:hover {
    box-shadow: var(--me-shadows-8,
      0px 5px 5px -3px rgba(0,0,0,.2),
      0px 8px 10px 1px rgba(0,0,0,.14),
      0px 3px 14px 2px rgba(0,0,0,.12));
  }
  .me-speed-dial__fab svg { pointer-events: none; }

  :host([open]) .me-speed-dial__fab-icon--open    { display: none; }
  :host(:not([open])) .me-speed-dial__fab-icon--close { display: none; }

  .me-speed-dial__actions {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 8px;
    padding-bottom: 8px;
    visibility: hidden;
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 200ms cubic-bezier(0.4,0,0.2,1),
                transform 200ms cubic-bezier(0.4,0,0.2,1),
                visibility 0ms linear 200ms;
    transform-origin: bottom center;
  }
  :host([direction="down"])  .me-speed-dial__actions { flex-direction: column; padding-bottom: 0; padding-top: 8px; transform-origin: top center; }
  :host([direction="left"])  .me-speed-dial__actions { flex-direction: row-reverse; padding-bottom: 0; padding-right: 8px; transform-origin: right center; }
  :host([direction="right"]) .me-speed-dial__actions { flex-direction: row; padding-bottom: 0; padding-left: 8px; transform-origin: left center; }

  :host([open]) .me-speed-dial__actions {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
    transition-delay: 0ms;
  }
`);
export default sheet;

export const actionSheet = (() => {
  const s = new CSSStyleSheet();
  s.replaceSync(`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      position: relative;
    }
    .me-speed-dial-action__btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      outline: none;
      background: var(--me-palette-background-paper, #fff);
      color: var(--me-palette-text-secondary, rgba(0,0,0,0.54));
      box-shadow: var(--me-shadows-4,
        0px 2px 4px -1px rgba(0,0,0,.2),
        0px 4px 5px rgba(0,0,0,.14),
        0px 1px 10px rgba(0,0,0,.12));
      transition: box-shadow 250ms cubic-bezier(0.4,0,0.2,1),
                  background-color 250ms cubic-bezier(0.4,0,0.2,1);
      -webkit-tap-highlight-color: transparent;
    }
    .me-speed-dial-action__btn:hover {
      background: var(--me-palette-grey-100, #f5f5f5);
    }
    .me-speed-dial-action__tooltip {
      position: absolute;
      right: calc(100% + 8px);
      white-space: nowrap;
      background: var(--me-palette-grey-700, #616161);
      color: #fff;
      font-size: 0.75rem;
      padding: 4px 8px;
      border-radius: 4px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 150ms;
    }
    :host(:hover) .me-speed-dial-action__tooltip { opacity: 1; }
  `);
  return s;
})();
