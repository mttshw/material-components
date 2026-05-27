const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--me-zIndex-appBar, 1100);
    background-color: var(--me-palette-primary-main, #1976d2);
    color: var(--me-palette-primary-contrastText, #fff);
    box-shadow: var(--me-shadows-4, 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12));
    transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1);
  }

  :host([position="absolute"])  { position: absolute; }
  :host([position="sticky"])    { position: sticky; top: 0; }
  :host([position="static"])    { position: static; box-shadow: none; }
  :host([position="relative"])  { position: relative; box-shadow: none; }

  :host([color="default"]) {
    background-color: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
  }
  :host([color="secondary"]) {
    background-color: var(--me-palette-secondary-main, #9c27b0);
    color: var(--me-palette-secondary-contrastText, #fff);
  }
  :host([color="inherit"]) { background-color: inherit; color: inherit; }
  :host([color="transparent"]) { background-color: transparent; color: inherit; box-shadow: none; }

  :host([elevation="0"]) { box-shadow: none; }
  :host([elevation="1"]) { box-shadow: var(--me-shadows-1); }
  :host([elevation="2"]) { box-shadow: var(--me-shadows-2); }
`);
export default sheet;
