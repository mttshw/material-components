const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
    vertical-align: top;
    --_primary: var(--mc-palette-primary-main, #1976d2);
    --_error: var(--mc-palette-error-main, #d32f2f);
    --_text: var(--mc-palette-text-primary, rgba(0,0,0,0.87));
    --_secondary-text: var(--mc-palette-text-secondary, rgba(0,0,0,0.6));
    --_border: rgba(0,0,0,0.23);
    --_bg: rgba(0,0,0,0.06);
    --_active-color: var(--_primary);
    font-family: var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }
  :host([color="secondary"]) { --_active-color: var(--mc-palette-secondary-main, #9c27b0); }
  :host([error])             { --_active-color: var(--_error); }
  :host([disabled])          { opacity: 0.38; pointer-events: none; }

  /* ── INPUT WRAPPER ── */
  .mc-text-field {
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    cursor: text;
    width: 100%;
  }

  /* ── FILLED ── */
  :host([variant="filled"]) .mc-text-field {
    background-color: var(--_bg);
    border-radius: 4px 4px 0 0;
  }
  :host([variant="filled"]) .mc-text-field::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background-color: rgba(0,0,0,0.42);
    pointer-events: none;
  }
  :host([variant="filled"]) .mc-text-field::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background-color: var(--_active-color);
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0,0,0.2,1);
  }
  :host(.mc-text-field--focused[variant="filled"]) .mc-text-field::after { transform: scaleX(1); }

  /* ── OUTLINED ──
     Three-div notch: leading | notch | trailing.
     The notch div's width is set by JS (label.offsetWidth * 0.75 + 10px) so the
     gap in the top border is always exactly as wide as the floating label. */
  .mc-notched-outline {
    display: none;
    position: absolute;
    top: -5px; right: 0; bottom: 0; left: 0;
    pointer-events: none;
  }
  :host([variant="outlined"]) .mc-notched-outline { display: flex; }

  .mc-notched-outline__leading {
    width: 9px;
    border: 1px solid var(--_border);
    border-right: none;
    border-radius: 4px 0 0 4px;
    transition: border-color 200ms, border-width 0ms;
    flex-shrink: 0;
  }
  .mc-notched-outline__notch {
    border: 1px solid var(--_border);
    border-left: none;
    border-right: none;
    transition: border-color 200ms, border-top-color 0ms, border-width 0ms;
    flex-shrink: 0;
  }
  .mc-notched-outline__trailing {
    flex: 1;
    border: 1px solid var(--_border);
    border-left: none;
    border-radius: 0 4px 4px 0;
    transition: border-color 200ms, border-width 0ms;
  }

  /* Open notch: remove the top border segment over the label */
  :host(.mc-text-field--floating[variant="outlined"]) .mc-notched-outline__notch {
    border-top-color: transparent;
  }

  /* Focus */
  :host(.mc-text-field--focused[variant="outlined"]) .mc-notched-outline__leading,
  :host(.mc-text-field--focused[variant="outlined"]) .mc-notched-outline__notch,
  :host(.mc-text-field--focused[variant="outlined"]) .mc-notched-outline__trailing {
    border-color: var(--_active-color);
    border-width: 2px;
  }
  :host(.mc-text-field--focused.mc-text-field--floating[variant="outlined"]) .mc-notched-outline__notch {
    border-top-color: transparent;
  }

  /* Error */
  :host([error][variant="outlined"]) .mc-notched-outline__leading,
  :host([error][variant="outlined"]) .mc-notched-outline__notch,
  :host([error][variant="outlined"]) .mc-notched-outline__trailing {
    border-color: var(--_error);
  }
  :host([error].mc-text-field--floating[variant="outlined"]) .mc-notched-outline__notch {
    border-top-color: transparent;
  }

  /* ── STANDARD ── */
  /* margin-top pushes the wrapper below the label's resting position, so the
     border-bottom cannot intersect the label text. */
  :host([variant="standard"]) .mc-text-field,
  :host(:not([variant])) .mc-text-field {
    margin-top: 16px;
    border-bottom: 1px solid rgba(0,0,0,0.42);
  }
  :host([variant="standard"]) .mc-text-field::after,
  :host(:not([variant])) .mc-text-field::after {
    content: '';
    position: absolute;
    bottom: -1px; left: 0; right: 0;
    height: 2px;
    background-color: var(--_active-color);
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0,0,0.2,1);
  }
  :host(.mc-text-field--focused[variant="standard"]) .mc-text-field::after,
  :host(.mc-text-field--focused:not([variant])) .mc-text-field::after { transform: scaleX(1); }

  /* ── LABEL ──
     Positioned relative to :host (which is position:relative).
     The label is a sibling of .mc-text-field, not inside it, so
     border-bottom / background never intersect it. */
  .mc-text-field__label {
    position: absolute;
    left: 0;
    top: 0;
    color: var(--_secondary-text);
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.4375em;
    pointer-events: none;
    transform-origin: top left;
    transition: color 200ms cubic-bezier(0,0,0.2,1), transform 200ms cubic-bezier(0,0,0.2,1);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 24px);
    z-index: 1;
  }

  /* Filled */
  :host([variant="filled"]) .mc-text-field__label {
    transform: translate(12px, 20px) scale(1);
  }
  :host(.mc-text-field--floating[variant="filled"]) .mc-text-field__label {
    transform: translate(12px, 7px) scale(0.75);
  }
  :host(.mc-text-field--focused[variant="filled"]) .mc-text-field__label {
    color: var(--_active-color);
  }

  /* Outlined — resting: label sits at input text level (padding-top 16.5px ≈ y=16px).
     Floating: text must be centered on the border (y=−5px, center=−4.5px).
     With scale(0.75), leading above text = 3.5*0.75 = 2.625px, text height = 12px.
     Required Y: −4.5 − 2.625 − 6 = −13.125 ≈ −13px. */
  :host([variant="outlined"]) .mc-text-field__label {
    transform: translate(14px, 16px) scale(1);
  }
  :host([size="small"][variant="outlined"]) .mc-text-field__label {
    transform: translate(14px, 9px) scale(1);
  }
  :host(.mc-text-field--floating[variant="outlined"]) .mc-text-field__label {
    transform: translate(14px, -13px) scale(0.75);
  }
  :host(.mc-text-field--focused[variant="outlined"]) .mc-text-field__label {
    color: var(--_active-color);
  }

  /* Standard — .mc-text-field has margin-top:16px, so input text is at y=20px.
     Resting label at translate(0,20px) overlaps input text (acts as placeholder).
     Floating label at translate(0,-1.5px) sits at the top of :host. */
  :host([variant="standard"]) .mc-text-field__label,
  :host(:not([variant])) .mc-text-field__label {
    transform: translate(0, 20px) scale(1);
  }
  :host(.mc-text-field--floating[variant="standard"]) .mc-text-field__label,
  :host(.mc-text-field--floating:not([variant])) .mc-text-field__label {
    transform: translate(0, -1.5px) scale(0.75);
  }
  :host(.mc-text-field--focused[variant="standard"]) .mc-text-field__label,
  :host(.mc-text-field--focused:not([variant])) .mc-text-field__label {
    color: var(--_active-color);
  }

  :host([error]) .mc-text-field__label { color: var(--_error); }

  /* ── INPUT ── */
  .mc-text-field__input {
    box-sizing: border-box;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.4375em;
    color: var(--_text);
    padding: 0;
    margin: 0;
    min-width: 0;
  }
  :host([variant="filled"]) .mc-text-field__input          { padding: 25px 12px 8px; }
  :host([variant="outlined"]) .mc-text-field__input        { padding: 16.5px 14px; }
  :host([variant="standard"]) .mc-text-field__input,
  :host(:not([variant])) .mc-text-field__input             { padding: 4px 0 5px; }

  /* Small size */
  :host([size="small"][variant="filled"]) .mc-text-field__input   { padding: 17px 12px 4px; }
  /* Small filled box is 44px tall (17+23+4); center = 22px. Without this rule the label
     inherits translate(12px,20px) from the base filled rule, centering it at y=31.5px —
     nearly 10px too low. translate(12px,10px) puts the center at y=21.5px ≈ 22px. */
  :host([size="small"][variant="filled"]) .mc-text-field__label {
    transform: translate(12px, 10px) scale(1);
  }
  :host(.mc-text-field--floating[size="small"][variant="filled"]) .mc-text-field__label {
    transform: translate(12px, 4px) scale(0.75);
  }
  :host([size="small"][variant="outlined"]) .mc-text-field__input { padding: 8.5px 14px; }
  :host([size="small"][variant="standard"]) .mc-text-field__input,
  :host([size="small"]:not([variant])) .mc-text-field__input      { padding: 2px 0 3px; }

  /* ── HELPER TEXT ── */
  .mc-text-field__helper {
    font-family: inherit;
    font-size: 0.75rem;
    line-height: 1.66;
    color: var(--_secondary-text);
    margin: 3px 0 0;
    min-height: 1.25em;
  }
  :host([error]) .mc-text-field__helper { color: var(--_error); }

  /* ── ADORNMENTS ── */
  .mc-text-field__adornment-start,
  .mc-text-field__adornment-end {
    display: flex;
    align-items: center;
    color: var(--_secondary-text);
    white-space: nowrap;
    flex-shrink: 0;
  }
  .mc-text-field__adornment-start { padding-left: 14px; margin-right: 4px; }
  .mc-text-field__adornment-end   { padding-right: 14px; margin-left: 4px; }
  :host([variant="filled"]) .mc-text-field__adornment-start { padding-left: 12px; padding-top: 16px; }
  :host([variant="filled"]) .mc-text-field__adornment-end   { padding-right: 12px; padding-top: 16px; }
`);
export default sheet;
