const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host { display: block; margin: 0; }
  :host([variant="caption"]),
  :host([variant="overline"]),
  :host([variant="button"]) { display: inline; }

  .mc-typography { margin: 0; }

  /* Variants */
  .mc-typography--h1 {
    font-family: var(--mc-typography-h1-fontFamily, var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif));
    font-weight: var(--mc-typography-h1-fontWeight, 300);
    font-size: var(--mc-typography-h1-fontSize, 6rem);
    line-height: var(--mc-typography-h1-lineHeight, 1.167);
    letter-spacing: var(--mc-typography-h1-letterSpacing, -0.01562em);
  }
  .mc-typography--h2 {
    font-family: var(--mc-typography-h2-fontFamily, var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif));
    font-weight: var(--mc-typography-h2-fontWeight, 300);
    font-size: var(--mc-typography-h2-fontSize, 3.75rem);
    line-height: var(--mc-typography-h2-lineHeight, 1.2);
    letter-spacing: var(--mc-typography-h2-letterSpacing, -0.00833em);
  }
  .mc-typography--h3 {
    font-family: var(--mc-typography-h3-fontFamily, var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif));
    font-weight: var(--mc-typography-h3-fontWeight, 400);
    font-size: var(--mc-typography-h3-fontSize, 3rem);
    line-height: var(--mc-typography-h3-lineHeight, 1.167);
    letter-spacing: var(--mc-typography-h3-letterSpacing, 0em);
  }
  .mc-typography--h4 {
    font-family: var(--mc-typography-h4-fontFamily, var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif));
    font-weight: var(--mc-typography-h4-fontWeight, 400);
    font-size: var(--mc-typography-h4-fontSize, 2.125rem);
    line-height: var(--mc-typography-h4-lineHeight, 1.235);
    letter-spacing: var(--mc-typography-h4-letterSpacing, 0.00735em);
  }
  .mc-typography--h5 {
    font-family: var(--mc-typography-h5-fontFamily, var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif));
    font-weight: var(--mc-typography-h5-fontWeight, 400);
    font-size: var(--mc-typography-h5-fontSize, 1.5rem);
    line-height: var(--mc-typography-h5-lineHeight, 1.334);
    letter-spacing: var(--mc-typography-h5-letterSpacing, 0em);
  }
  .mc-typography--h6 {
    font-family: var(--mc-typography-h6-fontFamily, var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif));
    font-weight: var(--mc-typography-h6-fontWeight, 500);
    font-size: var(--mc-typography-h6-fontSize, 1.25rem);
    line-height: var(--mc-typography-h6-lineHeight, 1.6);
    letter-spacing: var(--mc-typography-h6-letterSpacing, 0.0075em);
  }
  .mc-typography--subtitle1 {
    font-weight: var(--mc-typography-subtitle1-fontWeight, 400);
    font-size: var(--mc-typography-subtitle1-fontSize, 1rem);
    line-height: var(--mc-typography-subtitle1-lineHeight, 1.75);
    letter-spacing: var(--mc-typography-subtitle1-letterSpacing, 0.00938em);
  }
  .mc-typography--subtitle2 {
    font-weight: var(--mc-typography-subtitle2-fontWeight, 500);
    font-size: var(--mc-typography-subtitle2-fontSize, 0.875rem);
    line-height: var(--mc-typography-subtitle2-lineHeight, 1.57);
    letter-spacing: var(--mc-typography-subtitle2-letterSpacing, 0.00714em);
  }
  .mc-typography--body1 {
    font-weight: var(--mc-typography-body1-fontWeight, 400);
    font-size: var(--mc-typography-body1-fontSize, 1rem);
    line-height: var(--mc-typography-body1-lineHeight, 1.5);
    letter-spacing: var(--mc-typography-body1-letterSpacing, 0.00938em);
  }
  .mc-typography--body2 {
    font-weight: var(--mc-typography-body2-fontWeight, 400);
    font-size: var(--mc-typography-body2-fontSize, 0.875rem);
    line-height: var(--mc-typography-body2-lineHeight, 1.43);
    letter-spacing: var(--mc-typography-body2-letterSpacing, 0.01071em);
  }
  .mc-typography--button {
    font-weight: var(--mc-typography-button-fontWeight, 500);
    font-size: var(--mc-typography-button-fontSize, 0.875rem);
    line-height: var(--mc-typography-button-lineHeight, 1.75);
    letter-spacing: var(--mc-typography-button-letterSpacing, 0.02857em);
    text-transform: var(--mc-typography-button-textTransform, uppercase);
  }
  .mc-typography--caption {
    font-weight: var(--mc-typography-caption-fontWeight, 400);
    font-size: var(--mc-typography-caption-fontSize, 0.75rem);
    line-height: var(--mc-typography-caption-lineHeight, 1.66);
    letter-spacing: var(--mc-typography-caption-letterSpacing, 0.03333em);
  }
  .mc-typography--overline {
    font-weight: var(--mc-typography-overline-fontWeight, 400);
    font-size: var(--mc-typography-overline-fontSize, 0.75rem);
    line-height: var(--mc-typography-overline-lineHeight, 2.66);
    letter-spacing: var(--mc-typography-overline-letterSpacing, 0.08333em);
    text-transform: var(--mc-typography-overline-textTransform, uppercase);
  }

  /* Colors */
  .mc-typography--color-primary    { color: var(--mc-palette-primary-main); }
  .mc-typography--color-secondary  { color: var(--mc-palette-secondary-main); }
  .mc-typography--color-error      { color: var(--mc-palette-error-main); }
  .mc-typography--color-textPrimary { color: var(--mc-palette-text-primary); }
  .mc-typography--color-textSecondary { color: var(--mc-palette-text-secondary); }
  .mc-typography--color-inherit    { color: inherit; }

  /* Modifiers */
  .mc-typography--gutter-bottom { margin-bottom: 0.35em; }
  .mc-typography--no-wrap {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .mc-typography--align-left    { text-align: left; }
  .mc-typography--align-center  { text-align: center; }
  .mc-typography--align-right   { text-align: right; }
  .mc-typography--align-justify { text-align: justify; }
`);

export default sheet;
