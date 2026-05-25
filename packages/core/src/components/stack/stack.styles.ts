const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  :host([direction="row"])            { flex-direction: row; }
  :host([direction="row-reverse"])    { flex-direction: row-reverse; }
  :host([direction="column"])         { flex-direction: column; }
  :host([direction="column-reverse"]) { flex-direction: column-reverse; }

  :host([align="flex-start"])  { align-items: flex-start; }
  :host([align="flex-end"])    { align-items: flex-end; }
  :host([align="center"])      { align-items: center; }
  :host([align="stretch"])     { align-items: stretch; }
  :host([align="baseline"])    { align-items: baseline; }

  :host([justify="flex-start"])    { justify-content: flex-start; }
  :host([justify="flex-end"])      { justify-content: flex-end; }
  :host([justify="center"])        { justify-content: center; }
  :host([justify="space-between"]) { justify-content: space-between; }
  :host([justify="space-around"])  { justify-content: space-around; }
  :host([justify="space-evenly"])  { justify-content: space-evenly; }

  :host([flex-wrap="wrap"])         { flex-wrap: wrap; }
  :host([flex-wrap="nowrap"])       { flex-wrap: nowrap; }
  :host([flex-wrap="wrap-reverse"]) { flex-wrap: wrap-reverse; }
`);

export default sheet;
