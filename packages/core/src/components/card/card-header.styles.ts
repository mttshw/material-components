const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: flex;
    align-items: center;
    padding: 16px;
    box-sizing: border-box;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }

  .me-card-header__avatar {
    display: flex;
    flex: 0 0 auto;
    margin-right: 16px;
  }

  .me-card-header__content {
    flex: 1 1 auto;
    min-width: 0;
  }

  .me-card-header__title {
    display: block;
    font-size: 1rem;
    font-weight: var(--me-typography-fontWeightMedium, 500);
    line-height: 1.5;
    letter-spacing: 0.00938em;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .me-card-header__subheader {
    display: block;
    font-size: 0.875rem;
    font-weight: var(--me-typography-fontWeightRegular, 400);
    line-height: 1.43;
    letter-spacing: 0.01071em;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .me-card-header__subheader:empty { display: none; }

  .me-card-header__action {
    flex: 0 0 auto;
    align-self: flex-start;
    margin-top: -8px;
    margin-right: -8px;
    margin-bottom: -8px;
    margin-left: 8px;
  }

  [hidden] { display: none !important; }
`);
export default sheet;
