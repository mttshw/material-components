const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  /*
   * Height animation via CSS grid trick: grid-template-rows transitions from
   * 0fr (collapsed) to 1fr (expanded). The inner div needs min-height:0 and
   * overflow:hidden to actually collapse to zero.
   */
  :host {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 250ms cubic-bezier(0.4,0,0.2,1);
  }

  :host([expanded]) {
    grid-template-rows: 1fr;
  }

  .me-accordion-details {
    overflow: hidden;
    min-height: 0;
    padding: 8px 16px 16px;
    box-sizing: border-box;
  }
`);
export default sheet;
