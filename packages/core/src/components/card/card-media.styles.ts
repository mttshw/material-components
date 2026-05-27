const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host { display: block; }

  .me-card-media {
    display: block;
    width: 100%;
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
  }

  div.me-card-media {
    height: 140px;
  }

  img.me-card-media {
    height: auto;
  }
`);
export default sheet;
