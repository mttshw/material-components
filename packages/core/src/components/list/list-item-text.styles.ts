const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin: 4px 0;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }
  :host([inset]) { padding-left: 56px; }

  .me-list-item-text__primary {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: var(--me-typography-fontWeightRegular, 400);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .me-list-item-text__secondary {
    font-size: 0.875rem;
    line-height: 1.43;
    font-weight: var(--me-typography-fontWeightRegular, 400);
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /* Dense */
  :host-context(me-list[dense]) .me-list-item-text__primary { font-size: 0.875rem; }
`);
export default sheet;
