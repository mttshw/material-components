const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (min-width: 600px)  { :host { padding-left: 24px; padding-right: 24px; } }

  /* maxWidth values match MUI defaults */
  :host([max-width="xs"])  { max-width: 444px; }
  :host([max-width="sm"])  { max-width: 600px; }
  :host([max-width="md"])  { max-width: 900px; }
  :host([max-width="lg"])  { max-width: 1200px; }
  :host([max-width="xl"])  { max-width: 1536px; }
  :host([max-width="false"]) { max-width: none; }

  /* fixed: snap to breakpoint widths rather than fluid */
  :host([fixed][max-width="xs"])  { width: 444px; }
  :host([fixed][max-width="sm"])  { width: 600px; }
  :host([fixed][max-width="md"])  { width: 900px; }
  :host([fixed][max-width="lg"])  { width: 1200px; }
  :host([fixed][max-width="xl"])  { width: 1536px; }

  .me-container { width: 100%; }
`);

export default sheet;
