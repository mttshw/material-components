const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host { display: block; margin: 0; }
  :host([variant="caption"]),
  :host([variant="overline"]),
  :host([variant="button"]) { display: inline; }

  .me-typography { margin: 0; }

  /* Variants */
  .me-typography--h1 {
    font-family: var(--me-typography-h1-fontFamily, var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif));
    font-weight: var(--me-typography-h1-fontWeight, 300);
    font-size: var(--me-typography-h1-fontSize, 6rem);
    line-height: var(--me-typography-h1-lineHeight, 1.167);
    letter-spacing: var(--me-typography-h1-letterSpacing, -0.01562em);
  }
  .me-typography--h2 {
    font-family: var(--me-typography-h2-fontFamily, var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif));
    font-weight: var(--me-typography-h2-fontWeight, 300);
    font-size: var(--me-typography-h2-fontSize, 3.75rem);
    line-height: var(--me-typography-h2-lineHeight, 1.2);
    letter-spacing: var(--me-typography-h2-letterSpacing, -0.00833em);
  }
  .me-typography--h3 {
    font-family: var(--me-typography-h3-fontFamily, var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif));
    font-weight: var(--me-typography-h3-fontWeight, 400);
    font-size: var(--me-typography-h3-fontSize, 3rem);
    line-height: var(--me-typography-h3-lineHeight, 1.167);
    letter-spacing: var(--me-typography-h3-letterSpacing, 0em);
  }
  .me-typography--h4 {
    font-family: var(--me-typography-h4-fontFamily, var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif));
    font-weight: var(--me-typography-h4-fontWeight, 400);
    font-size: var(--me-typography-h4-fontSize, 2.125rem);
    line-height: var(--me-typography-h4-lineHeight, 1.235);
    letter-spacing: var(--me-typography-h4-letterSpacing, 0.00735em);
  }
  .me-typography--h5 {
    font-family: var(--me-typography-h5-fontFamily, var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif));
    font-weight: var(--me-typography-h5-fontWeight, 400);
    font-size: var(--me-typography-h5-fontSize, 1.5rem);
    line-height: var(--me-typography-h5-lineHeight, 1.334);
    letter-spacing: var(--me-typography-h5-letterSpacing, 0em);
  }
  .me-typography--h6 {
    font-family: var(--me-typography-h6-fontFamily, var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif));
    font-weight: var(--me-typography-h6-fontWeight, 500);
    font-size: var(--me-typography-h6-fontSize, 1.25rem);
    line-height: var(--me-typography-h6-lineHeight, 1.6);
    letter-spacing: var(--me-typography-h6-letterSpacing, 0.0075em);
  }
  .me-typography--subtitle1 {
    font-weight: var(--me-typography-subtitle1-fontWeight, 400);
    font-size: var(--me-typography-subtitle1-fontSize, 1rem);
    line-height: var(--me-typography-subtitle1-lineHeight, 1.75);
    letter-spacing: var(--me-typography-subtitle1-letterSpacing, 0.00938em);
  }
  .me-typography--subtitle2 {
    font-weight: var(--me-typography-subtitle2-fontWeight, 500);
    font-size: var(--me-typography-subtitle2-fontSize, 0.875rem);
    line-height: var(--me-typography-subtitle2-lineHeight, 1.57);
    letter-spacing: var(--me-typography-subtitle2-letterSpacing, 0.00714em);
  }
  .me-typography--body1 {
    font-weight: var(--me-typography-body1-fontWeight, 400);
    font-size: var(--me-typography-body1-fontSize, 1rem);
    line-height: var(--me-typography-body1-lineHeight, 1.5);
    letter-spacing: var(--me-typography-body1-letterSpacing, 0.00938em);
  }
  .me-typography--body2 {
    font-weight: var(--me-typography-body2-fontWeight, 400);
    font-size: var(--me-typography-body2-fontSize, 0.875rem);
    line-height: var(--me-typography-body2-lineHeight, 1.43);
    letter-spacing: var(--me-typography-body2-letterSpacing, 0.01071em);
  }
  .me-typography--button {
    font-weight: var(--me-typography-button-fontWeight, 500);
    font-size: var(--me-typography-button-fontSize, 0.875rem);
    line-height: var(--me-typography-button-lineHeight, 1.75);
    letter-spacing: var(--me-typography-button-letterSpacing, 0.02857em);
    text-transform: var(--me-typography-button-textTransform, uppercase);
  }
  .me-typography--caption {
    font-weight: var(--me-typography-caption-fontWeight, 400);
    font-size: var(--me-typography-caption-fontSize, 0.75rem);
    line-height: var(--me-typography-caption-lineHeight, 1.66);
    letter-spacing: var(--me-typography-caption-letterSpacing, 0.03333em);
  }
  .me-typography--overline {
    font-weight: var(--me-typography-overline-fontWeight, 400);
    font-size: var(--me-typography-overline-fontSize, 0.75rem);
    line-height: var(--me-typography-overline-lineHeight, 2.66);
    letter-spacing: var(--me-typography-overline-letterSpacing, 0.08333em);
    text-transform: var(--me-typography-overline-textTransform, uppercase);
  }

  /* Colors */
  .me-typography--color-primary    { color: var(--me-palette-primary-main); }
  .me-typography--color-secondary  { color: var(--me-palette-secondary-main); }
  .me-typography--color-error      { color: var(--me-palette-error-main); }
  .me-typography--color-textPrimary { color: var(--me-palette-text-primary); }
  .me-typography--color-textSecondary { color: var(--me-palette-text-secondary); }
  .me-typography--color-inherit    { color: inherit; }

  /* Modifiers */
  .me-typography--gutter-bottom { margin-bottom: 0.35em; }
  .me-typography--no-wrap {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .me-typography--align-left    { text-align: left; }
  .me-typography--align-center  { text-align: center; }
  .me-typography--align-right   { text-align: right; }
  .me-typography--align-justify { text-align: justify; }
`);

export default sheet;
