const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--mc-palette-grey-400, #bdbdbd);
    color: var(--mc-palette-background-default, #fff);
    font-family: var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 1.25rem;
    line-height: 1;
    user-select: none;
    position: relative;
  }
  :host([variant="rounded"]) { border-radius: var(--mc-shape-borderRadius, 4px); }
  :host([variant="square"])  { border-radius: 0; }

  .mc-avatar__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    text-indent: -9999px;
  }
`);
export default sheet;
