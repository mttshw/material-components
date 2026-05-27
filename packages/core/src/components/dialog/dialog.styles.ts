export const backdropSheet = new CSSStyleSheet();
backdropSheet.replaceSync(`
  .me-dialog__backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: var(--me-zIndex-modal, 1300);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  :host([open]) .me-dialog__backdrop {
    opacity: 1;
  }
  :host(:not([open])) .me-dialog__backdrop {
    pointer-events: none;
  }
`);

export const dialogSheet = new CSSStyleSheet();
dialogSheet.replaceSync(`
  :host {
    display: contents;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }

  .me-dialog__backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: var(--me-zIndex-modal, 1300);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  }
  :host([open]) .me-dialog__backdrop {
    opacity: 1;
    pointer-events: auto;
  }

  .me-dialog__paper {
    background-color: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    box-shadow: var(--me-shadows-24, 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12));
    display: flex;
    flex-direction: column;
    max-height: calc(100% - 64px);
    max-width: 600px;
    width: calc(100% - 64px);
    margin: 32px;
    position: relative;
    overflow-y: auto;
    transform: scale(0.8);
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms;
    opacity: 0;
  }
  :host([open]) .me-dialog__paper {
    transform: scale(1);
    opacity: 1;
  }

  /* maxWidth variants */
  :host([max-width="xs"]) .me-dialog__paper  { max-width: 444px; }
  :host([max-width="sm"]) .me-dialog__paper  { max-width: 600px; }
  :host([max-width="md"]) .me-dialog__paper  { max-width: 960px; }
  :host([max-width="lg"]) .me-dialog__paper  { max-width: 1280px; }
  :host([max-width="xl"]) .me-dialog__paper  { max-width: 1920px; }
  :host([full-width]) .me-dialog__paper      { width: 100%; }
  :host([full-screen]) .me-dialog__paper {
    margin: 0;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
  }
`);

export const titleSheet = new CSSStyleSheet();
titleSheet.replaceSync(`
  :host {
    display: block;
    padding: 16px 24px;
    flex-shrink: 0;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
  }
`);

export const contentSheet = new CSSStyleSheet();
contentSheet.replaceSync(`
  :host {
    display: block;
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 8px 24px 20px;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 1rem;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
  }
  :host([dividers]) {
    padding: 16px 24px;
    border-top: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
    border-bottom: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
  }
`);

export const actionsSheet = new CSSStyleSheet();
actionsSheet.replaceSync(`
  :host {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 8px;
    flex-shrink: 0;
    gap: 8px;
  }
  :host([disable-spacing]) {
    gap: 0;
    padding: 0;
  }
`);
