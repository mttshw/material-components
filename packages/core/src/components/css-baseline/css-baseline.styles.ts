const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-size-adjust: 100%;
  }

  body {
    margin: 0;
    color: var(--mc-palette-text-primary, rgba(0,0,0,0.87));
    font-family: var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-weight: var(--mc-typography-fontWeightRegular, 400);
    font-size: var(--mc-typography-fontSize, 14px);
    line-height: 1.5;
    letter-spacing: 0.00938em;
    background-color: var(--mc-palette-background-default, #fff);
  }

  strong, b {
    font-weight: var(--mc-typography-fontWeightBold, 700);
  }

  body > :where(h1, h2, h3, h4, h5, h6) {
    margin: 0;
  }

  @media print {
    body {
      background-color: #fff;
    }
  }
`);

export default sheet;
