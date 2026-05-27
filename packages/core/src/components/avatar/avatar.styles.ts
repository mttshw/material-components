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
    background-color: var(--me-palette-grey-400, #bdbdbd);
    color: var(--me-palette-background-default, #fff);
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 1.25rem;
    line-height: 1;
    user-select: none;
    position: relative;
  }
  :host([variant="rounded"]) { border-radius: calc(var(--me-shape-borderRadius, 4) * 1px); }
  :host([variant="square"])  { border-radius: 0; }

  .me-avatar__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    text-indent: -9999px;
  }

  /* Shift letters down to compensate for cap-height sitting above the em-square center */
  .me-avatar__letter {
    display: block;
    padding-top: calc((1em - 1cap) / 2);
  }
`);
export default sheet;
