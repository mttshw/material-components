const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: flex;
    align-items: center;
    position: relative;
    min-height: 56px;
    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
    width: 100%;
  }

  @media (min-width: 600px) {
    :host { min-height: 64px; padding-left: 24px; padding-right: 24px; }
  }

  :host([variant="dense"]) { min-height: 48px; }
  :host([disable-gutters]) { padding-left: 0; padding-right: 0; }
`);
export default sheet;
