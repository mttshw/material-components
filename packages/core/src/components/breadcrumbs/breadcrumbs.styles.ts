const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: block;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.875rem;
    font-weight: var(--me-typography-fontWeightRegular, 400);
    line-height: 1.43;
    letter-spacing: 0.01071em;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
  }

  .me-breadcrumbs {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .me-breadcrumbs__item {
    display: flex;
    align-items: center;
  }

  .me-breadcrumbs__separator {
    display: flex;
    align-items: center;
    margin: 0 8px;
    user-select: none;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
  }

  /* Non-last items: style all content as primary-colored links.
     Items are copied into shadow DOM via outerHTML so ::slotted() won't work — target directly. */
  .me-breadcrumbs__item:not(:last-child) * {
    color: var(--me-palette-primary-main, #1976d2);
    text-decoration: none;
    cursor: pointer;
  }
  .me-breadcrumbs__item:not(:last-child) a,
  .me-breadcrumbs__item:not(:last-child) [href] {
    color: var(--me-palette-primary-main, #1976d2);
    text-decoration: none;
  }
  .me-breadcrumbs__item:not(:last-child) a:hover,
  .me-breadcrumbs__item:not(:last-child) [href]:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  /* Last item: current page — plain text, no link interaction */
  .me-breadcrumbs__item:last-child {
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
  }
  .me-breadcrumbs__item:last-child * {
    color: inherit;
    text-decoration: none;
    pointer-events: none;
  }

  /* Collapsed items expand button */
  .me-breadcrumbs__expand {
    display: inline-flex;
    align-items: center;
    border: 0;
    background: none;
    padding: 0 4px;
    cursor: pointer;
    font-size: 1rem;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    line-height: 1;
  }
  .me-breadcrumbs__expand:hover {
    background-color: var(--me-palette-action-hover, rgba(0,0,0,0.04));
  }
`);
export default sheet;
