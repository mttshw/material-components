"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  MCAvatar: () => MCAvatar,
  MCBadge: () => MCBadge,
  MCBox: () => MCBox,
  MCButton: () => MCButton,
  MCCheckbox: () => MCCheckbox,
  MCChip: () => MCChip,
  MCContainer: () => MCContainer,
  MCCssBaseline: () => MCCssBaseline,
  MCDivider: () => MCDivider,
  MCElement: () => MCElement,
  MCGrid: () => MCGrid,
  MCIcon: () => MCIcon,
  MCIconButton: () => MCIconButton,
  MCList: () => MCList,
  MCListItem: () => MCListItem,
  MCListItemButton: () => MCListItemButton,
  MCListItemIcon: () => MCListItemIcon,
  MCListItemText: () => MCListItemText,
  MCPaper: () => MCPaper,
  MCRadio: () => MCRadio,
  MCRadioGroup: () => MCRadioGroup,
  MCSelect: () => MCSelect,
  MCStack: () => MCStack,
  MCSwitch: () => MCSwitch,
  MCTable: () => MCTable,
  MCTableBody: () => MCTableBody,
  MCTableCell: () => MCTableCell,
  MCTableHead: () => MCTableHead,
  MCTableRow: () => MCTableRow,
  MCTextField: () => MCTextField,
  MCThemeProvider: () => MCThemeProvider,
  MCTooltip: () => MCTooltip,
  MCTypography: () => MCTypography,
  RippleController: () => RippleController,
  defaultTheme: () => defaultTheme,
  dispatch: () => dispatch,
  elevationVar: () => elevationVar,
  getAttr: () => getAttr,
  getBoolAttr: () => getBoolAttr,
  themeToVars: () => themeToVars,
  transition: () => transition
});
module.exports = __toCommonJS(src_exports);

// src/theme/default-theme.ts
var defaultTheme = {
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff"
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#fff"
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#fff"
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "rgba(0,0,0,0.87)"
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#fff"
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#fff"
    },
    grey: {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#eeeeee",
      "300": "#e0e0e0",
      "400": "#bdbdbd",
      "500": "#9e9e9e",
      "600": "#757575",
      "700": "#616161",
      "800": "#424242",
      "900": "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161"
    },
    text: {
      primary: "rgba(0,0,0,0.87)",
      secondary: "rgba(0,0,0,0.6)",
      disabled: "rgba(0,0,0,0.38)"
    },
    divider: "rgba(0,0,0,0.12)",
    background: {
      default: "#fff",
      paper: "#fff"
    },
    action: {
      active: "rgba(0,0,0,0.54)",
      hover: "rgba(0,0,0,0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0,0,0,0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0,0,0,0.26)",
      disabledBackground: "rgba(0,0,0,0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0,0,0,0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    },
    common: {
      black: "#000",
      white: "#fff"
    }
  },
  typography: {
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: { fontWeight: 300, fontSize: "6rem", lineHeight: 1.167, letterSpacing: "-0.01562em" },
    h2: { fontWeight: 300, fontSize: "3.75rem", lineHeight: 1.2, letterSpacing: "-0.00833em" },
    h3: { fontWeight: 400, fontSize: "3rem", lineHeight: 1.167, letterSpacing: "0em" },
    h4: { fontWeight: 400, fontSize: "2.125rem", lineHeight: 1.235, letterSpacing: "0.00735em" },
    h5: { fontWeight: 400, fontSize: "1.5rem", lineHeight: 1.334, letterSpacing: "0em" },
    h6: { fontWeight: 500, fontSize: "1.25rem", lineHeight: 1.6, letterSpacing: "0.0075em" },
    subtitle1: { fontWeight: 400, fontSize: "1rem", lineHeight: 1.75, letterSpacing: "0.00938em" },
    subtitle2: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em"
    },
    body1: { fontWeight: 400, fontSize: "1rem", lineHeight: 1.5, letterSpacing: "0.00938em" },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em"
    },
    button: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase"
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em"
    },
    overline: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase"
    }
  },
  spacing: 8,
  shape: { borderRadius: 4 },
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
  ],
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  zIndex: {
    mobileStepper: 1e3,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }
  }
};

// src/theme/css-variables.ts
function isPlainObject(val) {
  return val !== null && typeof val === "object" && !Array.isArray(val);
}
function themeToVars(theme) {
  const vars = {};
  function flatten(obj, prefix) {
    for (const key of Object.keys(obj)) {
      const val = obj[key];
      const path = prefix ? `${prefix}-${key}` : key;
      if (key === "spacing" && (typeof val === "number" || typeof val === "function")) {
        continue;
      }
      if (Array.isArray(val)) {
        val.forEach((item, idx) => {
          vars[`--mc-${path}-${idx}`] = String(item);
        });
      } else if (isPlainObject(val)) {
        flatten(val, path);
      } else {
        vars[`--mc-${path}`] = String(val);
      }
    }
  }
  const { spacing, ...rest } = theme;
  flatten(rest, "");
  if (typeof spacing === "number") {
    vars["--mc-spacing"] = `${spacing}px`;
  } else if (typeof spacing === "function") {
    const base = spacing(1);
    vars["--mc-spacing"] = typeof base === "string" ? base : `${base}px`;
  }
  return vars;
}
function varsToStyle(vars) {
  return Object.entries(vars).map(([k, v]) => `${k}:${v}`).join(";");
}

// src/theme/theme-provider.ts
function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    const srcVal = source[key];
    const tgtVal = target[key];
    if (srcVal !== void 0 && srcVal !== null && typeof srcVal === "object" && !Array.isArray(srcVal) && typeof tgtVal === "object" && tgtVal !== null && !Array.isArray(tgtVal)) {
      result[key] = deepMerge(tgtVal, srcVal);
    } else if (srcVal !== void 0) {
      result[key] = srcVal;
    }
  }
  return result;
}
var MCThemeProvider = class extends HTMLElement {
  _theme = defaultTheme;
  connectedCallback() {
    this._applyTheme(this._theme);
  }
  get theme() {
    return this._theme;
  }
  set theme(value) {
    this._theme = deepMerge(defaultTheme, value);
    this._applyTheme(this._theme);
  }
  _applyTheme(theme) {
    const vars = themeToVars(theme);
    this.setAttribute("style", varsToStyle(vars));
  }
};
if (!customElements.get("mc-theme-provider")) {
  customElements.define("mc-theme-provider", MCThemeProvider);
}

// src/base/mc-element.ts
var MCElement = class extends HTMLElement {
  shadow;
  constructor(init = { mode: "open" }) {
    super();
    this.shadow = this.attachShadow(init);
  }
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }
  disconnectedCallback() {
    this.cleanup();
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      this.onAttributeChanged(name, oldVal, newVal);
      this.render();
    }
  }
  addEventListeners() {
  }
  cleanup() {
  }
  onAttributeChanged(_name, _oldVal, _newVal) {
  }
  cssVar(name, fallback) {
    return `var(--mc-${name}${fallback ? ", " + fallback : ""})`;
  }
  spacing(factor = 1) {
    return `calc(var(--mc-spacing, 8px) * ${factor})`;
  }
};

// src/components/css-baseline/css-baseline.styles.ts
var sheet = new CSSStyleSheet();
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
var css_baseline_styles_default = sheet;

// src/components/css-baseline/css-baseline.ts
var MCCssBaseline = class _MCCssBaseline extends HTMLElement {
  static _injected = false;
  connectedCallback() {
    if (_MCCssBaseline._injected) return;
    _MCCssBaseline._injected = true;
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, css_baseline_styles_default];
  }
  disconnectedCallback() {
    _MCCssBaseline._injected = false;
    document.adoptedStyleSheets = document.adoptedStyleSheets.filter((s) => s !== css_baseline_styles_default);
  }
};

// src/components/css-baseline/index.ts
if (!customElements.get("mc-css-baseline")) {
  customElements.define("mc-css-baseline", MCCssBaseline);
}

// src/components/typography/typography.styles.ts
var sheet2 = new CSSStyleSheet();
sheet2.replaceSync(`
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
var typography_styles_default = sheet2;

// src/components/typography/typography.ts
var VARIANT_TAG = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  button: "span",
  caption: "span",
  overline: "span"
};
var MCTypography = class extends MCElement {
  static observedAttributes = ["variant", "color", "align", "gutter-bottom", "no-wrap", "component"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [typography_styles_default];
  }
  render() {
    const variant = this.getAttribute("variant") ?? "body1";
    const color = this.getAttribute("color");
    const align = this.getAttribute("align");
    const gutterBottom = this.hasAttribute("gutter-bottom");
    const noWrap = this.hasAttribute("no-wrap");
    const tag = this.getAttribute("component") ?? VARIANT_TAG[variant] ?? "p";
    const cls = ["mc-typography", `mc-typography--${variant}`];
    if (color && color !== "initial") cls.push(`mc-typography--color-${color}`);
    if (align && align !== "inherit") cls.push(`mc-typography--align-${align}`);
    if (gutterBottom) cls.push("mc-typography--gutter-bottom");
    if (noWrap) cls.push("mc-typography--no-wrap");
    this.shadow.innerHTML = `<${tag} class="${cls.join(" ")}"><slot></slot></${tag}>`;
  }
};

// src/components/typography/index.ts
if (!customElements.get("mc-typography")) {
  customElements.define("mc-typography", MCTypography);
}

// src/utils/ripple.ts
var rippleSheet = new CSSStyleSheet();
rippleSheet.replaceSync(`
  @keyframes mc-ripple { to { transform: scale(1); opacity: 0; } }

  .mc-ripple-wave {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    transform: scale(0);
    animation: mc-ripple 550ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    background-color: currentColor;
    opacity: 0.3;
  }
`);
var RippleController = class {
  _target = null;
  _onPointerDown = null;
  _centered = false;
  attach(target, options) {
    this.detach();
    this._target = target;
    this._centered = options?.centered ?? false;
    this._onPointerDown = (e) => this._trigger(e);
    target.addEventListener("pointerdown", this._onPointerDown);
  }
  detach() {
    if (this._target && this._onPointerDown) {
      this._target.removeEventListener("pointerdown", this._onPointerDown);
    }
    this._target = null;
    this._onPointerDown = null;
  }
  _trigger(e) {
    const target = this._target;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = this._centered ? (rect.width - size) / 2 : e.clientX - rect.left - size / 2;
    const y = this._centered ? (rect.height - size) / 2 : e.clientY - rect.top - size / 2;
    const wave = document.createElement("span");
    wave.className = "mc-ripple-wave";
    wave.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
    wave.addEventListener("animationend", () => wave.remove());
    target.appendChild(wave);
  }
};

// src/components/button/button.styles.ts
var sheet3 = new CSSStyleSheet();
sheet3.replaceSync(`
  /* \u2500\u2500 Local color tokens (overridden per color attribute) \u2500\u2500 */
  :host {
    display: inline-flex;
    vertical-align: middle;
    outline: none;
    --_main:     var(--mc-palette-primary-main);
    --_dark:     var(--mc-palette-primary-dark);
    --_contrast: var(--mc-palette-primary-contrastText);
    --_hover-bg: rgba(25,118,210,0.04);
    --_border:   rgba(25,118,210,0.5);
  }
  :host([color="secondary"]) {
    --_main:     var(--mc-palette-secondary-main);
    --_dark:     var(--mc-palette-secondary-dark);
    --_contrast: var(--mc-palette-secondary-contrastText);
    --_hover-bg: rgba(156,39,176,0.04);
    --_border:   rgba(156,39,176,0.5);
  }
  :host([color="error"]) {
    --_main:     var(--mc-palette-error-main);
    --_dark:     var(--mc-palette-error-dark);
    --_contrast: var(--mc-palette-error-contrastText);
    --_hover-bg: rgba(211,47,47,0.04);
    --_border:   rgba(211,47,47,0.5);
  }
  :host([color="warning"]) {
    --_main:     var(--mc-palette-warning-main);
    --_dark:     var(--mc-palette-warning-dark);
    --_contrast: var(--mc-palette-warning-contrastText);
    --_hover-bg: rgba(237,108,2,0.04);
    --_border:   rgba(237,108,2,0.5);
  }
  :host([color="info"]) {
    --_main:     var(--mc-palette-info-main);
    --_dark:     var(--mc-palette-info-dark);
    --_contrast: var(--mc-palette-info-contrastText);
    --_hover-bg: rgba(2,136,209,0.04);
    --_border:   rgba(2,136,209,0.5);
  }
  :host([color="success"]) {
    --_main:     var(--mc-palette-success-main);
    --_dark:     var(--mc-palette-success-dark);
    --_contrast: var(--mc-palette-success-contrastText);
    --_hover-bg: rgba(46,125,50,0.04);
    --_border:   rgba(46,125,50,0.5);
  }
  :host([color="inherit"]) {
    --_main:     inherit;
    --_dark:     inherit;
    --_contrast: inherit;
    --_hover-bg: rgba(0,0,0,0.04);
    --_border:   rgba(0,0,0,0.23);
  }

  /* \u2500\u2500 Base button \u2500\u2500 */
  .mc-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    cursor: pointer;
    border: none;
    outline: none;
    margin: 0;
    text-decoration: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    vertical-align: middle;
    font-family: var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: var(--mc-typography-button-fontSize, 0.875rem);
    font-weight: var(--mc-typography-button-fontWeight, 500);
    letter-spacing: var(--mc-typography-button-letterSpacing, 0.02857em);
    text-transform: var(--mc-typography-button-textTransform, uppercase);
    line-height: var(--mc-typography-button-lineHeight, 1.75);
    border-radius: calc(var(--mc-shape-borderRadius, 4) * 1px);
    padding: 6px 16px;
    min-width: 64px;
    transition:
      background-color var(--mc-transitions-duration-short, 250ms) var(--mc-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1)),
      box-shadow       var(--mc-transitions-duration-short, 250ms) var(--mc-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1)),
      border-color     var(--mc-transitions-duration-short, 250ms) var(--mc-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1)),
      color            var(--mc-transitions-duration-short, 250ms) var(--mc-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1));
  }

  /* \u2500\u2500 Sizes \u2500\u2500 */
  :host([size="small"])  .mc-button { padding: 4px 10px;  font-size: 0.8125rem; }
  :host([size="large"])  .mc-button { padding: 8px 22px;  font-size: 0.9375rem; }

  /* \u2500\u2500 Text variant (default) \u2500\u2500 */
  :host(:not([variant])) .mc-button,
  :host([variant="text"]) .mc-button {
    background-color: transparent;
    color: var(--_main);
  }
  :host(:not([variant])) .mc-button:hover,
  :host([variant="text"]) .mc-button:hover {
    background-color: var(--_hover-bg);
  }

  /* \u2500\u2500 Contained variant \u2500\u2500 */
  :host([variant="contained"]) .mc-button {
    background-color: var(--_main);
    color: var(--_contrast);
    box-shadow: var(--mc-shadows-2);
  }
  :host([variant="contained"]) .mc-button:hover {
    background-color: var(--_dark);
    box-shadow: var(--mc-shadows-4);
  }
  :host([variant="contained"]) .mc-button:active {
    box-shadow: var(--mc-shadows-8);
  }

  /* \u2500\u2500 Outlined variant \u2500\u2500 */
  :host([variant="outlined"]) .mc-button {
    background-color: transparent;
    color: var(--_main);
    border: 1px solid var(--_border);
    padding: 5px 15px;
  }
  :host([variant="outlined"][size="small"])  .mc-button { padding: 3px 9px; }
  :host([variant="outlined"][size="large"])  .mc-button { padding: 7px 21px; }
  :host([variant="outlined"]) .mc-button:hover {
    background-color: var(--_hover-bg);
    border-color: var(--_main);
  }

  /* \u2500\u2500 Disabled \u2500\u2500 */
  :host([disabled]) .mc-button {
    color: var(--mc-palette-action-disabled, rgba(0,0,0,0.26));
    cursor: default;
    pointer-events: none;
  }
  :host([variant="contained"][disabled]) .mc-button {
    background-color: var(--mc-palette-action-disabledBackground, rgba(0,0,0,0.12));
    box-shadow: none;
  }
  :host([variant="outlined"][disabled]) .mc-button {
    border-color: var(--mc-palette-action-disabledBackground, rgba(0,0,0,0.12));
  }

  /* \u2500\u2500 Focus visible \u2500\u2500 */
  .mc-button:focus-visible {
    outline: 2px solid var(--_main);
    outline-offset: 2px;
  }

  /* \u2500\u2500 Icon slots \u2500\u2500 */
  .mc-button__start-icon,
  .mc-button__end-icon {
    display: inherit;
    align-items: inherit;
  }
  .mc-button__start-icon { margin-right: 8px; margin-left: -4px; }
  .mc-button__end-icon   { margin-left: 8px;  margin-right: -4px; }
  :host([size="small"]) .mc-button__start-icon { margin-left: -2px; margin-right: 6px; }
  :host([size="small"]) .mc-button__end-icon   { margin-right: -2px; margin-left: 6px; }
  [hidden] { display: none !important; }
`);
var button_styles_default = sheet3;

// src/components/button/button.ts
var MCButton = class extends MCElement {
  static observedAttributes = ["variant", "color", "size", "disabled", "href", "target"];
  _ripple = new RippleController();
  constructor() {
    super({ mode: "open", delegatesFocus: true });
    this.shadow.adoptedStyleSheets = [button_styles_default, rippleSheet];
  }
  render() {
    const disabled = this.hasAttribute("disabled");
    const href = this.getAttribute("href");
    const tag = href ? "a" : "button";
    const attrs = href ? `href="${href}"${this.getAttribute("target") ? ` target="${this.getAttribute("target")}"` : ""}` : `type="button"${disabled ? " disabled" : ""}`;
    this.shadow.innerHTML = `
      <${tag} class="mc-button" ${attrs} ${href && disabled ? 'aria-disabled="true"' : ""}>
        <span class="mc-button__start-icon" hidden><slot name="start-icon"></slot></span>
        <span class="mc-button__label"><slot></slot></span>
        <span class="mc-button__end-icon" hidden><slot name="end-icon"></slot></span>
      </${tag}>
    `;
    this._syncIconSlots();
    this._ripple.detach();
    if (!disabled) {
      const btn = this.shadow.querySelector(".mc-button");
      if (btn) this._ripple.attach(btn);
    }
  }
  cleanup() {
    this._ripple.detach();
  }
  _syncIconSlots() {
    for (const name of ["start-icon", "end-icon"]) {
      const slot = this.shadow.querySelector(`slot[name="${name}"]`);
      const wrapper = slot?.parentElement;
      if (!slot || !wrapper) continue;
      const sync = () => {
        wrapper.hidden = slot.assignedNodes({ flatten: true }).length === 0;
      };
      slot.addEventListener("slotchange", sync);
      Promise.resolve().then(sync);
    }
  }
};

// src/components/button/index.ts
if (!customElements.get("mc-button")) {
  customElements.define("mc-button", MCButton);
}

// src/components/icon-button/icon-button.styles.ts
var sheet4 = new CSSStyleSheet();
sheet4.replaceSync(`
  :host {
    display: inline-flex;
    vertical-align: middle;
    outline: none;
    --_main:     var(--mc-palette-action-active, rgba(0,0,0,0.54));
    --_hover-bg: var(--mc-palette-action-hover, rgba(0,0,0,0.04));
  }
  :host([color="primary"])   { --_main: var(--mc-palette-primary-main);   --_hover-bg: rgba(25,118,210,0.04); }
  :host([color="secondary"]) { --_main: var(--mc-palette-secondary-main); --_hover-bg: rgba(156,39,176,0.04); }
  :host([color="error"])     { --_main: var(--mc-palette-error-main);     --_hover-bg: rgba(211,47,47,0.04); }
  :host([color="warning"])   { --_main: var(--mc-palette-warning-main);   --_hover-bg: rgba(237,108,2,0.04); }
  :host([color="info"])      { --_main: var(--mc-palette-info-main);      --_hover-bg: rgba(2,136,209,0.04); }
  :host([color="success"])   { --_main: var(--mc-palette-success-main);   --_hover-bg: rgba(46,125,50,0.04); }
  :host([color="inherit"])   { --_main: inherit; }

  .mc-icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 50%;
    background-color: transparent;
    color: var(--_main);
    -webkit-tap-highlight-color: transparent;
    transition: background-color var(--mc-transitions-duration-shorter, 200ms) var(--mc-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1));
  }
  .mc-icon-button:hover { background-color: var(--_hover-bg); }
  :host([size="small"])  .mc-icon-button { padding: 5px; font-size: 1.125rem; }
  :host([size="large"])  .mc-icon-button { padding: 12px; font-size: 1.75rem; }
  :host([edge="start"])  { margin-left: -12px; }
  :host([edge="end"])    { margin-right: -12px; }
  :host([disabled]) .mc-icon-button {
    color: var(--mc-palette-action-disabled, rgba(0,0,0,0.26));
    cursor: default;
    pointer-events: none;
  }
  .mc-icon-button:focus-visible {
    outline: 2px solid var(--_main);
    outline-offset: 2px;
  }
`);
var icon_button_styles_default = sheet4;

// src/components/icon-button/icon-button.ts
var MCIconButton = class extends MCElement {
  static observedAttributes = ["color", "size", "disabled", "edge"];
  _ripple = new RippleController();
  constructor() {
    super({ mode: "open", delegatesFocus: true });
    this.shadow.adoptedStyleSheets = [icon_button_styles_default, rippleSheet];
  }
  render() {
    const disabled = this.hasAttribute("disabled");
    this.shadow.innerHTML = `
      <button class="mc-icon-button" type="button" ${disabled ? "disabled" : ""} aria-label="${this.getAttribute("aria-label") ?? ""}">
        <slot></slot>
      </button>
    `;
    this._ripple.detach();
    if (!disabled) {
      const btn = this.shadow.querySelector(".mc-icon-button");
      if (btn) this._ripple.attach(btn);
    }
  }
  cleanup() {
    this._ripple.detach();
  }
};

// src/components/icon-button/index.ts
if (!customElements.get("mc-icon-button")) {
  customElements.define("mc-icon-button", MCIconButton);
}

// src/components/paper/paper.styles.ts
var sheet5 = new CSSStyleSheet();
sheet5.replaceSync(`
  :host {
    display: block;
    background-color: var(--mc-palette-background-paper, #fff);
    color: var(--mc-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: calc(var(--mc-shape-borderRadius, 4) * 1px);
    transition: box-shadow var(--mc-transitions-duration-standard, 300ms) var(--mc-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1));
  }
  :host([square]) { border-radius: 0; }

  .mc-paper { width: 100%; height: 100%; }

  /* elevation variant \u2014 box-shadow set via inline style on host */
  :host([variant="outlined"]),
  :host([variant="outlined"][elevation]) {
    box-shadow: none !important;
    border: 1px solid var(--mc-palette-divider, rgba(0,0,0,0.12));
  }
`);
var paper_styles_default = sheet5;

// src/components/paper/paper.ts
var MCPaper = class extends MCElement {
  static observedAttributes = ["elevation", "variant", "square"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [paper_styles_default];
  }
  render() {
    const variant = this.getAttribute("variant") ?? "elevation";
    const elevation = Math.max(0, Math.min(24, parseInt(this.getAttribute("elevation") ?? "1")));
    if (variant !== "outlined") {
      this.style.boxShadow = `var(--mc-shadows-${elevation})`;
    } else {
      this.style.removeProperty("box-shadow");
    }
    this.shadow.innerHTML = `<div class="mc-paper"><slot></slot></div>`;
  }
};

// src/components/paper/index.ts
if (!customElements.get("mc-paper")) {
  customElements.define("mc-paper", MCPaper);
}

// src/components/divider/divider.styles.ts
var sheet6 = new CSSStyleSheet();
sheet6.replaceSync(`
  :host {
    display: block;
    border: none;
    margin: 0;
    flex-shrink: 0;
    border-top: thin solid var(--mc-palette-divider, rgba(0,0,0,0.12));
  }

  /* Vertical */
  :host([orientation="vertical"]) {
    border-top: none;
    border-left: thin solid var(--mc-palette-divider, rgba(0,0,0,0.12));
    height: auto;
    align-self: stretch;
  }

  /* Variants */
  :host([variant="inset"])  { margin-left: 72px; }
  :host([variant="middle"]) { margin-left: 16px; margin-right: 16px; }

  :host([orientation="vertical"][variant="inset"])  { margin-top: 72px; margin-left: 0; }
  :host([orientation="vertical"][variant="middle"]) { margin-top: 16px; margin-bottom: 16px; margin-left: 0; }

  /* Light */
  :host([light]) {
    border-color: rgba(0,0,0,0.08);
  }
`);
var divider_styles_default = sheet6;

// src/components/divider/divider.ts
var MCDivider = class extends MCElement {
  static observedAttributes = ["variant", "orientation", "light"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [divider_styles_default];
    this.setAttribute("role", "separator");
  }
  render() {
    const isVertical = this.getAttribute("orientation") === "vertical";
    this.setAttribute("aria-orientation", isVertical ? "vertical" : "horizontal");
    this.shadow.innerHTML = "";
  }
};

// src/components/divider/index.ts
if (!customElements.get("mc-divider")) {
  customElements.define("mc-divider", MCDivider);
}

// src/components/icon/icon.styles.ts
var sheet7 = new CSSStyleSheet();
sheet7.replaceSync(`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;   /* medium default */
    width: 1em;
    height: 1em;
    overflow: hidden;
    flex-shrink: 0;
    user-select: none;
    color: inherit;
    fill: currentColor;
  }

  /* Font sizes */
  :host([font-size="inherit"]) { font-size: inherit; }
  :host([font-size="small"])   { font-size: 1.25rem; }
  :host([font-size="medium"])  { font-size: 1.5rem; }
  :host([font-size="large"])   { font-size: 2.1875rem; }

  /* Colors */
  :host([color="primary"])   { color: var(--mc-palette-primary-main); }
  :host([color="secondary"]) { color: var(--mc-palette-secondary-main); }
  :host([color="action"])    { color: var(--mc-palette-action-active, rgba(0,0,0,0.54)); }
  :host([color="error"])     { color: var(--mc-palette-error-main); }
  :host([color="disabled"])  { color: var(--mc-palette-action-disabled, rgba(0,0,0,0.26)); }
  :host([color="inherit"])   { color: inherit; }

  /* SVG children fill with currentColor */
  ::slotted(svg) {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: block;
  }
`);
var icon_styles_default = sheet7;

// src/components/icon/icon.ts
var MCIcon = class extends MCElement {
  static observedAttributes = ["color", "font-size"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [icon_styles_default];
    this.setAttribute("aria-hidden", "true");
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};

// src/components/icon/index.ts
if (!customElements.get("mc-icon")) {
  customElements.define("mc-icon", MCIcon);
}

// src/components/box/box.ts
var PROP_MAP = {
  display: "display",
  "flex-direction": "flex-direction",
  "flex-wrap": "flex-wrap",
  "justify-content": "justify-content",
  "align-items": "align-items",
  "align-content": "align-content",
  gap: "gap",
  "row-gap": "row-gap",
  "column-gap": "column-gap",
  width: "width",
  height: "height",
  "min-width": "min-width",
  "min-height": "min-height",
  "max-width": "max-width",
  "max-height": "max-height",
  overflow: "overflow",
  position: "position",
  top: "top",
  right: "right",
  bottom: "bottom",
  left: "left",
  "z-index": "z-index",
  bgcolor: "background-color",
  color: "color",
  border: "border",
  "border-radius": "border-radius",
  padding: "padding",
  "padding-top": "padding-top",
  "padding-right": "padding-right",
  "padding-bottom": "padding-bottom",
  "padding-left": "padding-left",
  margin: "margin",
  "margin-top": "margin-top",
  "margin-right": "margin-right",
  "margin-bottom": "margin-bottom",
  "margin-left": "margin-left",
  // shorthands
  p: "padding",
  pt: "padding-top",
  pr: "padding-right",
  pb: "padding-bottom",
  pl: "padding-left",
  m: "margin",
  mt: "margin-top",
  mr: "margin-right",
  mb: "margin-bottom",
  ml: "margin-left"
};
var sheet8 = new CSSStyleSheet();
sheet8.replaceSync(`:host { display: block; box-sizing: border-box; }`);
var MCBox = class extends MCElement {
  static observedAttributes = Object.keys(PROP_MAP);
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet8];
  }
  render() {
    for (const [attr, cssProp] of Object.entries(PROP_MAP)) {
      const val = this.getAttribute(attr);
      if (val !== null) {
        this.style.setProperty(cssProp, val);
      }
    }
    this.shadow.innerHTML = `<slot></slot>`;
  }
};

// src/components/box/index.ts
if (!customElements.get("mc-box")) {
  customElements.define("mc-box", MCBox);
}

// src/components/container/container.styles.ts
var sheet9 = new CSSStyleSheet();
sheet9.replaceSync(`
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

  .mc-container { width: 100%; }
`);
var container_styles_default = sheet9;

// src/components/container/container.ts
var MCContainer = class extends MCElement {
  static observedAttributes = ["max-width", "fixed"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [container_styles_default];
  }
  render() {
    this.shadow.innerHTML = `<div class="mc-container"><slot></slot></div>`;
  }
};

// src/components/container/index.ts
if (!customElements.get("mc-container")) {
  customElements.define("mc-container", MCContainer);
}

// src/components/stack/stack.styles.ts
var sheet10 = new CSSStyleSheet();
sheet10.replaceSync(`
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
var stack_styles_default = sheet10;

// src/components/stack/stack.ts
var MCStack = class extends MCElement {
  static observedAttributes = ["direction", "spacing", "align", "justify", "flex-wrap"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [stack_styles_default];
  }
  render() {
    const spacing = this.getAttribute("spacing");
    if (spacing !== null) {
      const gap = isNaN(Number(spacing)) ? spacing : `calc(var(--mc-spacing, 8px) * ${spacing})`;
      this.style.setProperty("gap", gap);
    } else {
      this.style.removeProperty("gap");
    }
    this.shadow.innerHTML = `<slot></slot>`;
  }
};

// src/components/stack/index.ts
if (!customElements.get("mc-stack")) {
  customElements.define("mc-stack", MCStack);
}

// src/components/grid/grid.ts
var BP = [
  ["xs", 0],
  ["sm", 600],
  ["md", 900],
  ["lg", 1200],
  ["xl", 1536]
];
function colWidth(val) {
  if (val === "auto") return "flex:0 0 auto;max-width:none;width:auto";
  if (val === "true") return "flex-grow:1;flex-basis:0;max-width:100%";
  const n = Number(val);
  if (n === 12) return "flex:0 0 100%;max-width:100%";
  const pct = `${parseFloat((n / 12 * 100).toFixed(6))}%`;
  return `flex:0 0 ${pct};max-width:${pct}`;
}
var MCGrid = class extends MCElement {
  static observedAttributes = [
    "container",
    "item",
    "spacing",
    "direction",
    "justify",
    "align",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "columns"
  ];
  constructor() {
    super();
  }
  render() {
    const isContainer = this.hasAttribute("container");
    const isItem = this.hasAttribute("item") || !isContainer;
    let css = ":host{box-sizing:border-box;}";
    if (isContainer) {
      const spacing = this.getAttribute("spacing") ?? "0";
      const direction = this.getAttribute("direction") ?? "row";
      const justify = this.getAttribute("justify") ?? "flex-start";
      const align = this.getAttribute("align") ?? "stretch";
      const gap = isNaN(Number(spacing)) ? spacing : `calc(var(--mc-spacing,8px)*${spacing})`;
      css += `:host{display:flex;flex-wrap:wrap;flex-direction:${direction};justify-content:${justify};align-items:${align};gap:${gap};width:100%;}`;
    }
    if (isItem) {
      for (const [bp, minPx] of BP) {
        const val = this.getAttribute(bp);
        if (val === null) continue;
        const rule = `:host{${colWidth(val)};}`;
        css += minPx === 0 ? rule : `@media(min-width:${minPx}px){${rule}}`;
      }
    }
    this.shadow.innerHTML = `<style>${css}</style><slot></slot>`;
  }
};

// src/components/grid/index.ts
if (!customElements.get("mc-grid")) {
  customElements.define("mc-grid", MCGrid);
}

// src/components/checkbox/checkbox.styles.ts
var sheet11 = new CSSStyleSheet();
sheet11.replaceSync(`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    user-select: none;
    --_color: var(--mc-palette-primary-main, #1976d2);
    --_color-checked: var(--mc-palette-primary-main, #1976d2);
  }
  :host([color="secondary"]) { --_color: var(--mc-palette-secondary-main, #9c27b0); --_color-checked: var(--mc-palette-secondary-main, #9c27b0); }
  :host([color="error"])     { --_color: var(--mc-palette-error-main, #d32f2f);     --_color-checked: var(--mc-palette-error-main, #d32f2f); }
  :host([color="warning"])   { --_color: var(--mc-palette-warning-main, #ed6c02);   --_color-checked: var(--mc-palette-warning-main, #ed6c02); }
  :host([color="info"])      { --_color: var(--mc-palette-info-main, #0288d1);      --_color-checked: var(--mc-palette-info-main, #0288d1); }
  :host([color="success"])   { --_color: var(--mc-palette-success-main, #2e7d32);   --_color-checked: var(--mc-palette-success-main, #2e7d32); }

  :host([disabled]) { cursor: default; opacity: 0.38; pointer-events: none; }

  .mc-checkbox {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    overflow: hidden;
  }

  .mc-checkbox__input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: inherit;
    z-index: 1;
  }

  .mc-checkbox__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    pointer-events: none;
    color: var(--mc-palette-text-secondary, rgba(0,0,0,0.6));
    transition: color 150ms cubic-bezier(0.4,0,0.2,1);
  }

  :host([checked]) .mc-checkbox__icon,
  :host([indeterminate]) .mc-checkbox__icon {
    color: var(--_color-checked);
  }

  .mc-checkbox__icon svg {
    fill: currentColor;
    width: 18px;
    height: 18px;
  }

  .mc-checkbox:hover { background-color: rgba(0,0,0,0.04); }
  :host([checked]) .mc-checkbox:hover,
  :host([indeterminate]) .mc-checkbox:hover { background-color: color-mix(in srgb, var(--_color) 8%, transparent); }

  .mc-checkbox { outline: none; }
  :host(:focus-visible) .mc-checkbox {
    background-color: color-mix(in srgb, var(--_color) 12%, transparent);
  }
`);
var checkbox_styles_default = sheet11;

// src/components/checkbox/checkbox.ts
var MCCheckbox = class extends MCElement {
  static formAssociated = true;
  static observedAttributes = ["checked", "indeterminate", "disabled", "value", "color", "required", "name"];
  _internals;
  _ripple = new RippleController();
  constructor() {
    super({ mode: "open", delegatesFocus: true });
    this._internals = this.attachInternals();
    this.shadow.adoptedStyleSheets = [checkbox_styles_default, rippleSheet];
  }
  get checked() {
    return this.hasAttribute("checked");
  }
  set checked(val) {
    val ? this.setAttribute("checked", "") : this.removeAttribute("checked");
  }
  get indeterminate() {
    return this.hasAttribute("indeterminate");
  }
  set indeterminate(val) {
    val ? this.setAttribute("indeterminate", "") : this.removeAttribute("indeterminate");
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  get value() {
    return this.getAttribute("value") ?? "on";
  }
  render() {
    const checked = this.hasAttribute("checked");
    const indeterminate = this.hasAttribute("indeterminate");
    const disabled = this.hasAttribute("disabled");
    this._internals.setFormValue(checked ? this.value : null);
    this._internals.ariaChecked = indeterminate ? "mixed" : String(checked);
    this.setAttribute("role", "checkbox");
    this.setAttribute("aria-checked", indeterminate ? "mixed" : String(checked));
    this.setAttribute("tabindex", disabled ? "-1" : "0");
    this.shadow.innerHTML = `
      <div class="mc-checkbox">
        <input
          class="mc-checkbox__input"
          type="checkbox"
          tabindex="-1"
          ${checked ? "checked" : ""}
          ${indeterminate ? "data-indeterminate" : ""}
          ${disabled ? "disabled" : ""}
        />
        <span class="mc-checkbox__icon">
          ${indeterminate ? ICON_INDETERMINATE : checked ? ICON_CHECKED : ICON_UNCHECKED}
        </span>
      </div>
    `;
    const input = this.shadow.querySelector("input");
    if (indeterminate) input.indeterminate = true;
    this._ripple.detach();
    if (!disabled) {
      const box = this.shadow.querySelector(".mc-checkbox");
      this._ripple.attach(box, { centered: true });
    }
  }
  addEventListeners() {
    this.addEventListener("click", this._handleClick);
    this.addEventListener("keydown", this._handleKeydown);
  }
  cleanup() {
    this._ripple.detach();
    this.removeEventListener("click", this._handleClick);
    this.removeEventListener("keydown", this._handleKeydown);
  }
  _handleClick = (e) => {
    if (this.disabled) return;
    e.preventDefault();
    this._toggle();
  };
  _handleKeydown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      this._toggle();
    }
  };
  _toggle() {
    if (this.indeterminate) {
      this.removeAttribute("indeterminate");
      this.setAttribute("checked", "");
    } else {
      this.toggleAttribute("checked");
    }
    this.dispatchEvent(new Event("change", { bubbles: true }));
  }
};
var ICON_UNCHECKED = `<svg viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>`;
var ICON_CHECKED = `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`;
var ICON_INDETERMINATE = `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"/></svg>`;
customElements.define("mc-checkbox", MCCheckbox);

// src/components/radio/radio.styles.ts
var sheet12 = new CSSStyleSheet();
sheet12.replaceSync(`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    user-select: none;
    --_color: var(--mc-palette-primary-main, #1976d2);
  }
  :host([color="secondary"]) { --_color: var(--mc-palette-secondary-main, #9c27b0); }
  :host([color="error"])     { --_color: var(--mc-palette-error-main, #d32f2f); }
  :host([color="warning"])   { --_color: var(--mc-palette-warning-main, #ed6c02); }
  :host([color="info"])      { --_color: var(--mc-palette-info-main, #0288d1); }
  :host([color="success"])   { --_color: var(--mc-palette-success-main, #2e7d32); }

  :host([disabled]) { cursor: default; opacity: 0.38; pointer-events: none; }

  .mc-radio {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    overflow: hidden;
  }

  .mc-radio__input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: inherit;
    z-index: 1;
  }

  .mc-radio__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    pointer-events: none;
    color: var(--mc-palette-text-secondary, rgba(0,0,0,0.6));
    transition: color 150ms cubic-bezier(0.4,0,0.2,1);
  }

  :host([checked]) .mc-radio__icon { color: var(--_color); }

  .mc-radio__icon svg { fill: currentColor; width: 20px; height: 20px; }

  .mc-radio:hover { background-color: rgba(0,0,0,0.04); }
  :host([checked]) .mc-radio:hover { background-color: color-mix(in srgb, var(--_color) 8%, transparent); }

  :host(:focus-visible) .mc-radio {
    background-color: color-mix(in srgb, var(--_color) 12%, transparent);
  }
`);
var radio_styles_default = sheet12;

// src/components/radio/radio.ts
var MCRadio = class extends MCElement {
  static formAssociated = true;
  static observedAttributes = ["checked", "disabled", "value", "color", "required", "name"];
  _internals;
  _ripple = new RippleController();
  constructor() {
    super({ mode: "open", delegatesFocus: true });
    this._internals = this.attachInternals();
    this.shadow.adoptedStyleSheets = [radio_styles_default, rippleSheet];
  }
  get checked() {
    return this.hasAttribute("checked");
  }
  set checked(val) {
    val ? this.setAttribute("checked", "") : this.removeAttribute("checked");
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  get value() {
    return this.getAttribute("value") ?? "";
  }
  get name() {
    return this.getAttribute("name") ?? "";
  }
  render() {
    const checked = this.hasAttribute("checked");
    const disabled = this.hasAttribute("disabled");
    this._internals.setFormValue(checked ? this.value : null);
    this.setAttribute("role", "radio");
    this.setAttribute("aria-checked", String(checked));
    this.setAttribute("tabindex", disabled ? "-1" : "0");
    this.shadow.innerHTML = `
      <div class="mc-radio">
        <input
          class="mc-radio__input"
          type="radio"
          tabindex="-1"
          ${checked ? "checked" : ""}
          ${disabled ? "disabled" : ""}
        />
        <span class="mc-radio__icon">
          ${checked ? ICON_CHECKED2 : ICON_UNCHECKED2}
        </span>
      </div>
    `;
    this._ripple.detach();
    if (!disabled) {
      const dot = this.shadow.querySelector(".mc-radio");
      this._ripple.attach(dot, { centered: true });
    }
  }
  addEventListeners() {
    this.addEventListener("click", this._handleClick);
    this.addEventListener("keydown", this._handleKeydown);
  }
  cleanup() {
    this._ripple.detach();
    this.removeEventListener("click", this._handleClick);
    this.removeEventListener("keydown", this._handleKeydown);
  }
  _handleClick = (e) => {
    if (this.disabled || this.checked) return;
    e.preventDefault();
    this._select();
  };
  _handleKeydown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      if (!this.checked) this._select();
    }
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      this._moveFocus(1);
    }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      this._moveFocus(-1);
    }
  };
  _select() {
    this.dispatchEvent(new CustomEvent("mc-radio-select", { bubbles: true, detail: { value: this.value } }));
    this.checked = true;
    this.dispatchEvent(new Event("change", { bubbles: true }));
  }
  _moveFocus(dir) {
    const group = this.closest("mc-radio-group");
    if (!group) return;
    const radios = Array.from(group.querySelectorAll("mc-radio:not([disabled])"));
    const idx = radios.indexOf(this);
    const next = radios[(idx + dir + radios.length) % radios.length];
    if (next) {
      next.focus();
      next._select();
    }
  }
};
var ICON_UNCHECKED2 = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`;
var ICON_CHECKED2 = `<svg viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`;
customElements.define("mc-radio", MCRadio);

// src/components/radio/radio-group.ts
var sheet13 = new CSSStyleSheet();
sheet13.replaceSync(`
  :host {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  :host([row]) { flex-direction: row; flex-wrap: wrap; }
`);
var MCRadioGroup = class extends MCElement {
  static observedAttributes = ["value", "name", "row"];
  constructor() {
    super({ mode: "open" });
    this.shadow.adoptedStyleSheets = [sheet13];
  }
  get value() {
    return this.getAttribute("value") ?? "";
  }
  set value(val) {
    this.setAttribute("value", val);
  }
  render() {
    this.shadow.innerHTML = "<slot></slot>";
    this._syncRadios();
  }
  addEventListeners() {
    this.addEventListener("mc-radio-select", this._handleSelect);
  }
  cleanup() {
    this.removeEventListener("mc-radio-select", this._handleSelect);
  }
  _handleSelect = (e) => {
    const target = e.target;
    const selected = target.value;
    const radios = this.querySelectorAll("mc-radio");
    radios.forEach((r) => {
      r.checked = r.value === selected;
    });
    this.setAttribute("value", selected);
    this.dispatchEvent(new Event("change", { bubbles: true }));
  };
  _syncRadios() {
    const name = this.getAttribute("name");
    const value = this.getAttribute("value");
    const radios = this.querySelectorAll("mc-radio");
    radios.forEach((r) => {
      if (name && !r.getAttribute("name")) r.setAttribute("name", name);
      if (value !== null) r.checked = r.value === value;
    });
  }
  onAttributeChanged(name, _oldVal, _newVal) {
    if (name === "value") this._syncRadios();
  }
};
customElements.define("mc-radio-group", MCRadioGroup);

// src/components/switch/switch.styles.ts
var sheet14 = new CSSStyleSheet();
sheet14.replaceSync(`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    user-select: none;
    --_color: var(--mc-palette-primary-main, #1976d2);
  }
  :host([color="secondary"]) { --_color: var(--mc-palette-secondary-main, #9c27b0); }
  :host([color="error"])     { --_color: var(--mc-palette-error-main, #d32f2f); }
  :host([color="warning"])   { --_color: var(--mc-palette-warning-main, #ed6c02); }
  :host([color="info"])      { --_color: var(--mc-palette-info-main, #0288d1); }
  :host([color="success"])   { --_color: var(--mc-palette-success-main, #2e7d32); }

  :host([disabled]) { cursor: default; opacity: 0.38; pointer-events: none; }

  .mc-switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 58px;
    height: 38px;
    padding: 9px;
    box-sizing: border-box;
  }

  .mc-switch__input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: inherit;
    z-index: 1;
  }

  .mc-switch__track {
    width: 34px;
    height: 14px;
    border-radius: 7px;
    background-color: rgba(0,0,0,0.38);
    transition: background-color 150ms cubic-bezier(0.4,0,0.2,1);
    position: relative;
  }

  :host([checked]) .mc-switch__track {
    background-color: color-mix(in srgb, var(--_color) 50%, transparent);
  }

  .mc-switch__thumb-wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: left 150ms cubic-bezier(0.4,0,0.2,1);
  }

  :host([checked]) .mc-switch__thumb-wrapper {
    left: 14px;
  }

  .mc-switch__thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fafafa;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: background-color 150ms cubic-bezier(0.4,0,0.2,1);
  }

  :host([checked]) .mc-switch__thumb {
    background-color: var(--_color);
  }

  .mc-switch__ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    overflow: hidden;
  }

  .mc-switch__thumb-wrapper:hover .mc-switch__ripple {
    background-color: rgba(0,0,0,0.04);
  }

  :host([checked]) .mc-switch__thumb-wrapper:hover .mc-switch__ripple {
    background-color: color-mix(in srgb, var(--_color) 8%, transparent);
  }

  :host(:focus-visible) .mc-switch__ripple {
    background-color: color-mix(in srgb, var(--_color) 12%, transparent);
  }
`);
var switch_styles_default = sheet14;

// src/components/switch/switch.ts
var MCSwitch = class extends MCElement {
  static formAssociated = true;
  static observedAttributes = ["checked", "disabled", "value", "color", "required", "name"];
  _internals;
  _ripple = new RippleController();
  constructor() {
    super({ mode: "open", delegatesFocus: true });
    this._internals = this.attachInternals();
    this.shadow.adoptedStyleSheets = [switch_styles_default, rippleSheet];
  }
  get checked() {
    return this.hasAttribute("checked");
  }
  set checked(val) {
    val ? this.setAttribute("checked", "") : this.removeAttribute("checked");
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  get value() {
    return this.getAttribute("value") ?? "on";
  }
  render() {
    const checked = this.hasAttribute("checked");
    const disabled = this.hasAttribute("disabled");
    this._internals.setFormValue(checked ? this.value : null);
    this.setAttribute("role", "switch");
    this.setAttribute("aria-checked", String(checked));
    this.setAttribute("tabindex", disabled ? "-1" : "0");
    this.shadow.innerHTML = `
      <div class="mc-switch">
        <input class="mc-switch__input" type="checkbox" tabindex="-1" ${checked ? "checked" : ""} ${disabled ? "disabled" : ""}/>
        <div class="mc-switch__track">
          <div class="mc-switch__thumb-wrapper">
            <div class="mc-switch__ripple"></div>
            <div class="mc-switch__thumb"></div>
          </div>
        </div>
      </div>
    `;
    this._ripple.detach();
    if (!disabled) {
      const rippleEl = this.shadow.querySelector(".mc-switch__ripple");
      this._ripple.attach(rippleEl, { centered: true });
    }
  }
  addEventListeners() {
    this.addEventListener("click", this._handleClick);
    this.addEventListener("keydown", this._handleKeydown);
  }
  cleanup() {
    this._ripple.detach();
    this.removeEventListener("click", this._handleClick);
    this.removeEventListener("keydown", this._handleKeydown);
  }
  _handleClick = (e) => {
    if (this.disabled) return;
    e.preventDefault();
    this.checked = !this.checked;
    this.dispatchEvent(new Event("change", { bubbles: true }));
  };
  _handleKeydown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      this.checked = !this.checked;
      this.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };
};
customElements.define("mc-switch", MCSwitch);

// src/components/text-field/text-field.styles.ts
var sheet15 = new CSSStyleSheet();
sheet15.replaceSync(`
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

  /* \u2500\u2500 INPUT WRAPPER \u2500\u2500 */
  .mc-text-field {
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    cursor: text;
    width: 100%;
  }

  /* \u2500\u2500 FILLED \u2500\u2500 */
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

  /* \u2500\u2500 OUTLINED \u2500\u2500
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

  /* \u2500\u2500 STANDARD \u2500\u2500 */
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

  /* \u2500\u2500 LABEL \u2500\u2500
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

  /* Outlined \u2014 resting: label sits at input text level (padding-top 16.5px \u2248 y=16px).
     Floating: text must be centered on the border (y=\u22125px, center=\u22124.5px).
     With scale(0.75), leading above text = 3.5*0.75 = 2.625px, text height = 12px.
     Required Y: \u22124.5 \u2212 2.625 \u2212 6 = \u221213.125 \u2248 \u221213px. */
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

  /* Standard \u2014 .mc-text-field has margin-top:16px, so input text is at y=20px.
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

  /* \u2500\u2500 INPUT \u2500\u2500 */
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
     inherits translate(12px,20px) from the base filled rule, centering it at y=31.5px \u2014
     nearly 10px too low. translate(12px,10px) puts the center at y=21.5px \u2248 22px. */
  :host([size="small"][variant="filled"]) .mc-text-field__label {
    transform: translate(12px, 10px) scale(1);
  }
  :host(.mc-text-field--floating[size="small"][variant="filled"]) .mc-text-field__label {
    transform: translate(12px, 4px) scale(0.75);
  }
  :host([size="small"][variant="outlined"]) .mc-text-field__input { padding: 8.5px 14px; }
  :host([size="small"][variant="standard"]) .mc-text-field__input,
  :host([size="small"]:not([variant])) .mc-text-field__input      { padding: 2px 0 3px; }

  /* \u2500\u2500 HELPER TEXT \u2500\u2500 */
  .mc-text-field__helper {
    font-family: inherit;
    font-size: 0.75rem;
    line-height: 1.66;
    color: var(--_secondary-text);
    margin: 3px 0 0;
    min-height: 1.25em;
  }
  :host([error]) .mc-text-field__helper { color: var(--_error); }

  /* \u2500\u2500 ADORNMENTS \u2500\u2500 */
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
var text_field_styles_default = sheet15;

// src/components/text-field/text-field.ts
var MCTextField = class extends MCElement {
  static formAssociated = true;
  static observedAttributes = [
    "variant",
    "label",
    "placeholder",
    "value",
    "type",
    "disabled",
    "readonly",
    "required",
    "error",
    "helper-text",
    "color",
    "size",
    "multiline",
    "rows",
    "start-adornment",
    "end-adornment",
    "name",
    "autocomplete",
    "autofocus",
    "min",
    "max",
    "minlength",
    "maxlength",
    "pattern",
    "step"
  ];
  _internals;
  _focused = false;
  _value = "";
  constructor() {
    super({ mode: "open", delegatesFocus: true });
    this._internals = this.attachInternals();
    this.shadow.adoptedStyleSheets = [text_field_styles_default];
  }
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = v;
    const input = this.shadow.querySelector(".mc-text-field__input");
    if (input) input.value = v;
    this._internals.setFormValue(v);
    this._updateFloating();
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  render() {
    const variant = this.getAttribute("variant") ?? "outlined";
    const label = this.getAttribute("label") ?? "";
    const type = this.getAttribute("type") ?? "text";
    const placeholder = this.getAttribute("placeholder") ?? "";
    const disabled = this.hasAttribute("disabled");
    const readonly = this.hasAttribute("readonly");
    const required = this.hasAttribute("required");
    const helperText = this.getAttribute("helper-text") ?? "";
    const multiline = this.hasAttribute("multiline");
    const rows = this.getAttribute("rows") ?? "4";
    const startAdornment = this.getAttribute("start-adornment") ?? "";
    const endAdornment = this.getAttribute("end-adornment") ?? "";
    const autocomplete = this.getAttribute("autocomplete") ?? "";
    const name = this.getAttribute("name") ?? "";
    const hasLabel = label.length > 0;
    const isFloating = this._focused || this._value.length > 0 || placeholder.length > 0 || startAdornment.length > 0;
    this.classList.toggle("mc-text-field--floating", isFloating);
    this.classList.toggle("mc-text-field--focused", this._focused);
    const inputAttrs = [
      `class="mc-text-field__input"`,
      multiline ? "" : `type="${type}"`,
      `value="${this._value.replace(/"/g, "&quot;")}"`,
      placeholder ? `placeholder="${placeholder}"` : "",
      disabled ? "disabled" : "",
      readonly ? "readonly" : "",
      required ? "required" : "",
      name ? `name="${name}"` : "",
      autocomplete ? `autocomplete="${autocomplete}"` : "",
      this.getAttribute("minlength") ? `minlength="${this.getAttribute("minlength")}"` : "",
      this.getAttribute("maxlength") ? `maxlength="${this.getAttribute("maxlength")}"` : "",
      this.getAttribute("pattern") ? `pattern="${this.getAttribute("pattern")}"` : "",
      this.getAttribute("min") ? `min="${this.getAttribute("min")}"` : "",
      this.getAttribute("max") ? `max="${this.getAttribute("max")}"` : "",
      this.getAttribute("step") ? `step="${this.getAttribute("step")}"` : "",
      this.getAttribute("autofocus") !== null ? "autofocus" : ""
    ].filter(Boolean).join(" ");
    const inputEl = multiline ? `<textarea ${inputAttrs} rows="${rows}"></textarea>` : `<input ${inputAttrs}/>`;
    const notch = variant === "outlined" ? `
      <div class="mc-notched-outline" aria-hidden="true">
        <div class="mc-notched-outline__leading"></div>
        <div class="mc-notched-outline__notch"></div>
        <div class="mc-notched-outline__trailing"></div>
      </div>` : "";
    this.shadow.innerHTML = `
      ${hasLabel ? `<label class="mc-text-field__label">${label}</label>` : ""}
      <div class="mc-text-field">
        ${notch}
        ${startAdornment ? `<div class="mc-text-field__adornment-start">${startAdornment}</div>` : ""}
        ${inputEl}
        ${endAdornment ? `<div class="mc-text-field__adornment-end">${endAdornment}</div>` : ""}
      </div>
      ${helperText ? `<p class="mc-text-field__helper">${helperText}</p>` : ""}
    `;
    this._updateNotchWidth(isFloating);
    this._bindInput();
  }
  _bindInput() {
    const input = this.shadow.querySelector(".mc-text-field__input");
    if (!input) return;
    input.addEventListener("focus", () => {
      this._focused = true;
      this._syncStateClasses();
    });
    input.addEventListener("blur", () => {
      this._focused = false;
      this._syncStateClasses();
    });
    input.addEventListener("input", () => {
      this._value = input.value;
      this._internals.setFormValue(this._value);
      this._updateFloating();
      this.dispatchEvent(new Event("input", { bubbles: true }));
    });
    input.addEventListener("change", () => {
      this._value = input.value;
      this._internals.setFormValue(this._value);
      this.dispatchEvent(new Event("change", { bubbles: true }));
    });
  }
  // State is tracked via :host classes so CSS transitions work without re-rendering.
  _syncStateClasses() {
    const placeholder = this.getAttribute("placeholder") ?? "";
    const startAdornment = this.getAttribute("start-adornment") ?? "";
    const isFloating = this._focused || this._value.length > 0 || placeholder.length > 0 || startAdornment.length > 0;
    this.classList.toggle("mc-text-field--floating", isFloating);
    this.classList.toggle("mc-text-field--focused", this._focused);
    this._updateNotchWidth(isFloating);
  }
  // Sets the outlined notch div width to exactly match the floating label's visual width.
  // offsetWidth gives the layout width (unaffected by CSS transform), so multiply by 0.75
  // to get the visual width at scale(0.75). Add 10px: the leading div ends at x=9px while
  // the label starts at x=14px, leaving a natural 5px left buffer; we add 5px right buffer.
  _updateNotchWidth(isFloating) {
    if ((this.getAttribute("variant") ?? "outlined") !== "outlined") return;
    const notch = this.shadow.querySelector(".mc-notched-outline__notch");
    if (!notch) return;
    const label = this.shadow.querySelector(".mc-text-field__label");
    if (isFloating && label && label.offsetWidth > 0) {
      notch.style.width = `${label.offsetWidth * 0.75 + 10}px`;
    } else {
      notch.style.width = "";
    }
  }
  _updateFloating() {
    this._syncStateClasses();
  }
  onAttributeChanged(name, _oldVal, newVal) {
    if (name === "value") {
      this._value = newVal ?? "";
      this._internals.setFormValue(this._value);
    }
  }
  formResetCallback() {
    this._value = this.getAttribute("value") ?? "";
    this._internals.setFormValue(this._value);
    this.render();
  }
};
customElements.define("mc-text-field", MCTextField);

// src/components/select/select.styles.ts
var sheet16 = new CSSStyleSheet();
sheet16.replaceSync(`
  :host {
    display: inline-flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    min-width: 0;
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
  :host([error]) { --_active-color: var(--_error); }
  :host([disabled]) { opacity: 0.38; pointer-events: none; }

  .mc-select {
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
  }

  .mc-select__native {
    box-sizing: border-box;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.4375em;
    color: var(--_text);
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    padding-right: 32px;
  }

  .mc-select__arrow {
    position: absolute;
    right: 0;
    pointer-events: none;
    color: var(--_secondary-text);
    display: flex;
    align-items: center;
  }
  :host([variant="filled"]) .mc-select__arrow,
  :host([variant="outlined"]) .mc-select__arrow { right: 14px; }
  :host(:not([variant])) .mc-select__arrow,
  :host([variant="standard"]) .mc-select__arrow { right: 0; }

  .mc-select__arrow svg { fill: currentColor; width: 24px; height: 24px; }

  /* Filled */
  :host([variant="filled"]) .mc-select {
    background-color: var(--_bg);
    border-radius: 4px 4px 0 0;
  }
  :host([variant="filled"]) .mc-select::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: rgba(0,0,0,0.42);
    pointer-events: none;
  }
  :host([variant="filled"]) .mc-select--focused::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: var(--_active-color);
  }
  :host([variant="filled"]) .mc-select__native { padding: 25px 32px 8px 12px; }

  /* Outlined */
  :host([variant="outlined"]) .mc-select {
    border-radius: 4px;
  }
  .mc-notched-outline { display: none; position: absolute; inset: 0; pointer-events: none; }
  :host([variant="outlined"]) .mc-notched-outline { display: flex; }
  .mc-notched-outline__leading {
    width: 12px;
    border: 1px solid var(--_border);
    border-right: none;
    border-radius: 4px 0 0 4px;
    transition: border-color 200ms;
  }
  .mc-notched-outline__notch {
    flex: 0 0 auto;
    border: 1px solid var(--_border);
    border-left: none;
    border-right: none;
    transition: border-color 200ms;
    padding: 0 4px;
  }
  .mc-notched-outline__trailing {
    flex: 1;
    border: 1px solid var(--_border);
    border-left: none;
    border-radius: 0 4px 4px 0;
    transition: border-color 200ms;
  }
  .mc-notched-outline__notch--open { border-top-color: transparent; }
  :host([variant="outlined"]) .mc-select--focused .mc-notched-outline__leading,
  :host([variant="outlined"]) .mc-select--focused .mc-notched-outline__notch,
  :host([variant="outlined"]) .mc-select--focused .mc-notched-outline__trailing {
    border-color: var(--_active-color);
    border-width: 2px;
  }
  :host([variant="outlined"]) .mc-select--focused .mc-notched-outline__notch--open {
    border-top-color: transparent;
  }
  :host([variant="outlined"]) .mc-select__native { padding: 16.5px 32px 16.5px 14px; }

  /* Standard */
  :host([variant="standard"]) .mc-select,
  :host(:not([variant])) .mc-select {
    border-bottom: 1px solid rgba(0,0,0,0.42);
  }
  :host([variant="standard"]) .mc-select--focused::after,
  :host(:not([variant])) .mc-select--focused::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: var(--_active-color);
  }
  :host([variant="standard"]) .mc-select__native,
  :host(:not([variant])) .mc-select__native { padding: 4px 24px 5px 0; }

  /* Label */
  .mc-select__label {
    position: absolute;
    left: 0;
    top: 0;
    color: var(--_secondary-text);
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.4375em;
    pointer-events: none;
    transform-origin: top left;
    transition: color 200ms, transform 200ms;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 1;
  }
  :host([variant="filled"]) .mc-select__label { transform: translate(12px, 20px) scale(1); }
  :host([variant="filled"]) .mc-select--floating .mc-select__label { transform: translate(12px, 7px) scale(0.75); }
  :host([variant="outlined"]) .mc-select__label { transform: translate(14px, -50%) translateY(50%) translateY(16px) scale(1); }
  :host([variant="outlined"]) .mc-select--floating .mc-select__label { transform: translate(14px, -50%) scale(0.75); }
  :host([variant="standard"]) .mc-select__label,
  :host(:not([variant])) .mc-select__label { transform: translate(0, 20px) scale(1); }
  :host([variant="standard"]) .mc-select--floating .mc-select__label,
  :host(:not([variant])) .mc-select--floating .mc-select__label { transform: translate(0, -1.5px) scale(0.75); }
  .mc-select--focused .mc-select__label { color: var(--_active-color); }
  :host([error]) .mc-select__label { color: var(--_error); }

  /* Helper */
  .mc-select__helper {
    font-family: inherit;
    font-size: 0.75rem;
    line-height: 1.66;
    color: var(--_secondary-text);
    margin: 3px 14px 0;
    min-height: 1.25em;
  }
  :host([error]) .mc-select__helper { color: var(--_error); }

  /* Hidden slot for option sync */
  .mc-select__slot { display: none; }
`);
var select_styles_default = sheet16;

// src/components/select/select.ts
var MCSelect = class extends MCElement {
  static formAssociated = true;
  static observedAttributes = [
    "variant",
    "label",
    "value",
    "disabled",
    "required",
    "error",
    "helper-text",
    "color",
    "size",
    "name",
    "multiple"
  ];
  _internals;
  _focused = false;
  _value = "";
  constructor() {
    super({ mode: "open", delegatesFocus: true });
    this._internals = this.attachInternals();
    this.shadow.adoptedStyleSheets = [select_styles_default];
  }
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = v;
    const select = this.shadow.querySelector(".mc-select__native");
    if (select) select.value = v;
    this._internals.setFormValue(v);
    this._updateFloating();
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  render() {
    const variant = this.getAttribute("variant") ?? "outlined";
    const label = this.getAttribute("label") ?? "";
    const disabled = this.hasAttribute("disabled");
    const required = this.hasAttribute("required");
    const helperText = this.getAttribute("helper-text") ?? "";
    const name = this.getAttribute("name") ?? "";
    const multiple = this.hasAttribute("multiple");
    const isFloating = true;
    const hasLabel = label.length > 0;
    const wrapperClass = [
      "mc-select",
      this._focused ? "mc-select--focused" : "",
      "mc-select--floating"
    ].filter(Boolean).join(" ");
    const notch = variant === "outlined" ? `
      <div class="mc-notched-outline" aria-hidden="true">
        <div class="mc-notched-outline__leading"></div>
        <div class="mc-notched-outline__notch ${hasLabel ? "mc-notched-outline__notch--open" : ""}">
          ${hasLabel ? `<legend class="mc-notched-outline__legend"><span>${label}</span></legend>` : ""}
        </div>
        <div class="mc-notched-outline__trailing"></div>
      </div>` : "";
    this.shadow.innerHTML = `
      <div class="${wrapperClass}">
        ${notch}
        ${hasLabel ? `<label class="mc-select__label">${label}</label>` : ""}
        <select
          class="mc-select__native"
          ${disabled ? "disabled" : ""}
          ${required ? "required" : ""}
          ${name ? `name="${name}"` : ""}
          ${multiple ? "multiple" : ""}
        ></select>
        <span class="mc-select__arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
        </span>
      </div>
      <div class="mc-select__slot"><slot></slot></div>
      ${helperText ? `<p class="mc-select__helper">${helperText}</p>` : ""}
    `;
    this._syncOptions();
    this._bindSelect();
  }
  addEventListeners() {
    this.addEventListener("slotchange", this._onSlotChange);
  }
  cleanup() {
    this.removeEventListener("slotchange", this._onSlotChange);
  }
  _onSlotChange = () => {
    this._syncOptions();
  };
  _syncOptions() {
    const native = this.shadow.querySelector(".mc-select__native");
    if (!native) return;
    const slotEl = this.shadow.querySelector("slot");
    const assigned = slotEl ? slotEl.assignedElements({ flatten: true }) : [];
    const lightOptions = assigned.length > 0 ? assigned : Array.from(this.querySelectorAll("option, optgroup"));
    native.innerHTML = "";
    for (const el of lightOptions) {
      if (el.tagName === "OPTION") {
        const opt = document.createElement("option");
        opt.value = el.value ?? el.textContent ?? "";
        opt.textContent = el.textContent ?? "";
        opt.disabled = el.disabled;
        opt.selected = el.hasAttribute("selected");
        native.appendChild(opt);
      } else if (el.tagName === "OPTGROUP") {
        const grp = document.createElement("optgroup");
        grp.label = el.label ?? "";
        for (const child of Array.from(el.querySelectorAll("option"))) {
          const opt = document.createElement("option");
          opt.value = child.value;
          opt.textContent = child.textContent ?? "";
          opt.disabled = child.disabled;
          opt.selected = child.hasAttribute("selected");
          grp.appendChild(opt);
        }
        native.appendChild(grp);
      }
    }
    if (this._value) native.value = this._value;
    this._value = native.value;
    this._internals.setFormValue(this._value);
    this._updateFloating();
  }
  _bindSelect() {
    const native = this.shadow.querySelector(".mc-select__native");
    if (!native) return;
    native.addEventListener("focus", () => {
      this._focused = true;
      const wrapper = this.shadow.querySelector(".mc-select");
      wrapper?.classList.add("mc-select--focused");
      const label = this.shadow.querySelector(".mc-select__label");
      if (label) label.style.color = "";
    });
    native.addEventListener("blur", () => {
      this._focused = false;
      const wrapper = this.shadow.querySelector(".mc-select");
      wrapper?.classList.remove("mc-select--focused");
    });
    native.addEventListener("change", () => {
      this._value = native.value;
      this._internals.setFormValue(this._value);
      this._updateFloating();
      this.dispatchEvent(new Event("change", { bubbles: true }));
    });
  }
  _updateFloating() {
    const notch = this.shadow.querySelector(".mc-notched-outline__notch");
    if (notch) notch.classList.add("mc-notched-outline__notch--open");
  }
  onAttributeChanged(name, _oldVal, newVal) {
    if (name === "value") {
      this._value = newVal ?? "";
      const native = this.shadow.querySelector(".mc-select__native");
      if (native) {
        native.value = this._value;
      }
      this._internals.setFormValue(this._value);
    }
  }
  formResetCallback() {
    this._value = this.getAttribute("value") ?? "";
    this._internals.setFormValue(this._value);
    this.render();
  }
};
customElements.define("mc-select", MCSelect);

// src/components/avatar/avatar.styles.ts
var sheet17 = new CSSStyleSheet();
sheet17.replaceSync(`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--mc-palette-grey-400, #bdbdbd);
    color: var(--mc-palette-background-default, #fff);
    font-family: var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 1.25rem;
    line-height: 1;
    user-select: none;
    position: relative;
  }
  :host([variant="rounded"]) { border-radius: var(--mc-shape-borderRadius, 4px); }
  :host([variant="square"])  { border-radius: 0; }

  .mc-avatar__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    text-indent: -9999px;
  }
`);
var avatar_styles_default = sheet17;

// src/components/avatar/avatar.ts
var MCAvatar = class extends MCElement {
  static observedAttributes = ["src", "alt", "variant"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [avatar_styles_default];
  }
  render() {
    const src = this.getAttribute("src") ?? "";
    const alt = this.getAttribute("alt") ?? "";
    this.shadow.innerHTML = src ? `<img class="mc-avatar__img" src="${src}" alt="${alt}">` : `<slot></slot>`;
  }
};
customElements.define("mc-avatar", MCAvatar);

// src/components/badge/badge.styles.ts
var sheet18 = new CSSStyleSheet();
sheet18.replaceSync(`
  :host {
    display: inline-flex;
    position: relative;
    vertical-align: middle;
    flex-shrink: 0;
    --_color: var(--mc-palette-error-main, #d32f2f);
    --_contrast: var(--mc-palette-error-contrastText, #fff);
  }
  :host([color="primary"]) {
    --_color: var(--mc-palette-primary-main, #1976d2);
    --_contrast: var(--mc-palette-primary-contrastText, #fff);
  }
  :host([color="secondary"]) {
    --_color: var(--mc-palette-secondary-main, #9c27b0);
    --_contrast: var(--mc-palette-secondary-contrastText, #fff);
  }
  :host([color="success"]) {
    --_color: var(--mc-palette-success-main, #2e7d32);
    --_contrast: var(--mc-palette-success-contrastText, #fff);
  }
  :host([color="warning"]) {
    --_color: var(--mc-palette-warning-main, #ed6c02);
    --_contrast: var(--mc-palette-warning-contrastText, #fff);
  }
  :host([color="info"]) {
    --_color: var(--mc-palette-info-main, #0288d1);
    --_contrast: var(--mc-palette-info-contrastText, #fff);
  }

  .mc-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0%;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: 10px;
    background-color: var(--_color);
    color: var(--_contrast);
    font-family: var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.75rem;
    font-weight: var(--mc-typography-fontWeightMedium, 500);
    line-height: 1;
    white-space: nowrap;
    box-sizing: border-box;
    z-index: 1;
  }

  /* dot variant */
  :host([variant="dot"]) .mc-badge {
    min-width: 8px;
    width: 8px;
    height: 8px;
    padding: 0;
    border-radius: 50%;
  }

  /* overlap="rectangular" shifts anchor from corner to edge-center */
  :host([overlap="rectangular"]) .mc-badge {
    transform: translate(50%, -50%);
  }
`);
var badge_styles_default = sheet18;

// src/components/badge/badge.ts
var MCBadge = class extends MCElement {
  static observedAttributes = ["badge-content", "color", "variant", "max", "invisible", "overlap"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [badge_styles_default];
  }
  render() {
    const content = this.getAttribute("badge-content") ?? "";
    const variant = this.getAttribute("variant") ?? "standard";
    const max = parseInt(this.getAttribute("max") ?? "99");
    const invisible = this.hasAttribute("invisible");
    let label = content;
    if (variant !== "dot") {
      const num = Number(content);
      if (!isNaN(num) && content !== "") label = num > max ? `${max}+` : String(num);
    }
    const badge = invisible ? "" : `<span class="mc-badge" aria-label="${label}">${variant === "dot" ? "" : label}</span>`;
    this.shadow.innerHTML = `<slot></slot>${badge}`;
  }
};
customElements.define("mc-badge", MCBadge);

// src/components/chip/chip.styles.ts
var sheet19 = new CSSStyleSheet();
sheet19.replaceSync(`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    border-radius: 16px;
    box-sizing: border-box;
    font-family: var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.8125rem;
    font-weight: var(--mc-typography-fontWeightRegular, 400);
    cursor: default;
    outline: 0;
    vertical-align: middle;
    text-decoration: none;
    --_color: var(--mc-palette-primary-main, #1976d2);
    --_color-light: rgba(25, 118, 210, 0.12);
  }
  :host([color="secondary"]) {
    --_color: var(--mc-palette-secondary-main, #9c27b0);
    --_color-light: rgba(156, 39, 176, 0.12);
  }
  :host([color="error"]) {
    --_color: var(--mc-palette-error-main, #d32f2f);
    --_color-light: rgba(211, 47, 47, 0.12);
  }
  :host([color="success"]) {
    --_color: var(--mc-palette-success-main, #2e7d32);
    --_color-light: rgba(46, 125, 50, 0.12);
  }
  :host([color="warning"]) {
    --_color: var(--mc-palette-warning-main, #ed6c02);
    --_color-light: rgba(237, 108, 2, 0.12);
  }
  :host([color="info"]) {
    --_color: var(--mc-palette-info-main, #0288d1);
    --_color-light: rgba(2, 136, 209, 0.12);
  }
  :host([size="small"]) { height: 24px; font-size: 0.75rem; }

  /* \u2500\u2500 FILLED \u2500\u2500 */
  .mc-chip {
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    gap: 4px;
  }
  :host(:not([variant="outlined"])) .mc-chip {
    background-color: var(--mc-palette-action-selected, rgba(0,0,0,0.08));
    padding: 0 12px;
    color: var(--mc-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: inherit;
    width: 100%;
    height: 100%;
  }
  :host([clickable]:not([variant="outlined"])) .mc-chip:hover {
    background-color: rgba(0,0,0,0.12);
  }
  :host([color]:not([color="default"]):not([variant="outlined"])) .mc-chip {
    background-color: var(--_color);
    color: #fff;
  }
  :host([color]:not([color="default"])[clickable]:not([variant="outlined"])) .mc-chip:hover {
    filter: brightness(0.9);
  }

  /* \u2500\u2500 OUTLINED \u2500\u2500 */
  :host([variant="outlined"]) .mc-chip {
    background-color: transparent;
    border: 1px solid var(--mc-palette-action-disabled, rgba(0,0,0,0.26));
    padding: 0 11px;
    color: var(--mc-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: inherit;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  :host([color]:not([color="default"])[variant="outlined"]) .mc-chip {
    border-color: var(--_color);
    color: var(--_color);
  }
  :host([clickable][variant="outlined"]) .mc-chip:hover {
    background-color: var(--_color-light);
  }

  /* \u2500\u2500 DISABLED \u2500\u2500 */
  :host([disabled]) { opacity: 0.38; pointer-events: none; }

  /* \u2500\u2500 SIZE SMALL inner padding \u2500\u2500 */
  :host([size="small"]:not([variant="outlined"])) .mc-chip { padding: 0 8px; }
  :host([size="small"][variant="outlined"]) .mc-chip { padding: 0 7px; }

  /* \u2500\u2500 ICONS \u2500\u2500 */
  .mc-chip__icon-start,
  .mc-chip__icon-end {
    display: inherit;
    font-size: 18px;
    width: 18px;
    height: 18px;
  }
  :host([size="small"]) .mc-chip__icon-start,
  :host([size="small"]) .mc-chip__icon-end { font-size: 16px; width: 16px; height: 16px; }

  /* \u2500\u2500 DELETE BUTTON \u2500\u2500 */
  .mc-chip__delete {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    color: inherit;
    opacity: 0.7;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .mc-chip__delete:hover { opacity: 1; background-color: rgba(0,0,0,0.12); }
  .mc-chip__delete svg { width: 14px; height: 14px; fill: currentColor; display: block; }
  :host([size="small"]) .mc-chip__delete { width: 16px; height: 16px; }
`);
var rippleSheet2 = new CSSStyleSheet();
rippleSheet2.replaceSync(`
  @keyframes mc-ripple { to { transform: scale(1); opacity: 0; } }
  .mc-ripple-wave {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    transform: scale(0);
    animation: mc-ripple 550ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    background-color: currentColor;
    opacity: 0.3;
  }
`);
var chip_styles_default = sheet19;

// src/components/chip/chip.ts
var DELETE_ICON = `<svg viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>`;
var MCChip = class extends MCElement {
  static observedAttributes = ["variant", "color", "size", "label", "deletable", "clickable", "disabled"];
  _ripple = new RippleController();
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [chip_styles_default, rippleSheet2];
  }
  render() {
    const deletable = this.hasAttribute("deletable");
    const clickable = this.hasAttribute("clickable");
    const deleteBtn = deletable ? `<button class="mc-chip__delete" aria-label="delete" tabindex="-1" type="button">${DELETE_ICON}</button>` : "";
    if (clickable) {
      this.setAttribute("role", "button");
      this.setAttribute("tabindex", "0");
    }
    this.shadow.innerHTML = `
      <div class="mc-chip">
        <span class="mc-chip__icon-start" hidden><slot name="icon"></slot></span>
        <span class="mc-chip__label"><slot></slot></span>
        ${deleteBtn}
      </div>
    `;
    const iconSlot = this.shadow.querySelector('slot[name="icon"]');
    if (iconSlot) {
      const iconWrap = this.shadow.querySelector(".mc-chip__icon-start");
      iconSlot.addEventListener("slotchange", () => {
        iconWrap.hidden = iconSlot.assignedNodes().length === 0;
      });
    }
    if (clickable) {
      const inner = this.shadow.querySelector(".mc-chip");
      this._ripple.attach(inner);
    }
    if (deletable) {
      this.shadow.querySelector(".mc-chip__delete")?.addEventListener("click", (e) => {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent("mc-delete", { bubbles: true, composed: true }));
      });
    }
  }
  addEventListeners() {
    this.addEventListener("keydown", (e) => {
      if (!this.hasAttribute("clickable")) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      } else if (e.key === "Delete" || e.key === "Backspace") {
        if (this.hasAttribute("deletable")) {
          this.dispatchEvent(new CustomEvent("mc-delete", { bubbles: true, composed: true }));
        }
      }
    });
  }
};
customElements.define("mc-chip", MCChip);

// src/components/list/list.styles.ts
var sheet20 = new CSSStyleSheet();
sheet20.replaceSync(`
  :host {
    display: block;
    list-style: none;
    margin: 0;
    padding: 8px 0;
    position: relative;
  }
  :host([disablePadding]) { padding: 0; }
  /* Dense flag propagates to children via CSS custom property inheritance */
  :host([dense]) { --mc-list-dense: 1; }
`);
var list_styles_default = sheet20;

// src/components/list/list.ts
var MCList = class extends MCElement {
  static observedAttributes = ["dense", "disablePadding"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [list_styles_default];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("mc-list", MCList);

// src/components/list/list-item.styles.ts
var sheet21 = new CSSStyleSheet();
sheet21.replaceSync(`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: calc(8px - (4px * var(--mc-list-dense, 0))) 16px;
    width: 100%;
    position: relative;
    text-align: left;
  }
  :host([disableGutters]) { padding-left: 0; padding-right: 0; }
  :host([disablePadding])  { padding: 0; }
  :host([alignItems="flex-start"]) { align-items: flex-start; }
  :host([divider]) {
    border-bottom: 1px solid var(--mc-palette-divider, rgba(0,0,0,0.12));
  }
`);
var list_item_styles_default = sheet21;

// src/components/list/list-item.ts
var MCListItem = class extends MCElement {
  static observedAttributes = ["disablePadding", "disableGutters", "divider", "alignItems"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [list_item_styles_default];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("mc-list-item", MCListItem);

// src/components/list/list-item-button.styles.ts
var sheet22 = new CSSStyleSheet();
sheet22.replaceSync(`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: calc(8px - (4px * var(--mc-list-dense, 0))) 16px;
    width: 100%;
    position: relative;
    text-align: left;
    cursor: pointer;
    outline: 0;
    border: 0;
    background: transparent;
    text-decoration: none;
    color: var(--mc-palette-text-primary, rgba(0,0,0,0.87));
    font-family: var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 1rem;
  }
  :host(:hover) {
    background-color: var(--mc-palette-action-hover, rgba(0,0,0,0.04));
  }
  :host([selected]) {
    background-color: var(--mc-palette-action-selected, rgba(0,0,0,0.08));
    color: var(--mc-palette-primary-main, #1976d2);
  }
  :host([selected]:hover) {
    background-color: rgba(25, 118, 210, 0.12);
  }
  :host([disabled]) {
    opacity: 0.38;
    pointer-events: none;
  }
  :host([divider]) {
    border-bottom: 1px solid var(--mc-palette-divider, rgba(0,0,0,0.12));
  }
  :host([alignItems="flex-start"]) { align-items: flex-start; }
  :host([disableGutters]) { padding-left: 0; padding-right: 0; }

  .mc-list-item-button {
    display: contents;
  }
`);
var rippleSheet3 = new CSSStyleSheet();
rippleSheet3.replaceSync(`
  @keyframes mc-ripple { to { transform: scale(1); opacity: 0; } }
  .mc-ripple-wave {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    transform: scale(0);
    animation: mc-ripple 550ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    background-color: currentColor;
    opacity: 0.2;
  }
`);
var list_item_button_styles_default = sheet22;

// src/components/list/list-item-button.ts
var MCListItemButton = class extends MCElement {
  static observedAttributes = ["selected", "disabled", "divider", "alignItems", "disableGutters"];
  _ripple = new RippleController();
  constructor() {
    super({ mode: "open", delegatesFocus: true });
    this.shadow.adoptedStyleSheets = [list_item_button_styles_default, rippleSheet3];
    this.setAttribute("role", "button");
    this.setAttribute("tabindex", "0");
  }
  render() {
    if (this.hasAttribute("disabled")) this.setAttribute("tabindex", "-1");
    else this.setAttribute("tabindex", "0");
    this.shadow.innerHTML = `<slot></slot>`;
    this._ripple.attach(this);
  }
  addEventListeners() {
    this.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }
    });
  }
};
customElements.define("mc-list-item-button", MCListItemButton);

// src/components/list/list-item-text.styles.ts
var sheet23 = new CSSStyleSheet();
sheet23.replaceSync(`
  :host {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin: 4px 0;
    font-family: var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }
  :host([inset]) { padding-left: 56px; }

  .mc-list-item-text__primary {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: var(--mc-typography-fontWeightRegular, 400);
    color: var(--mc-palette-text-primary, rgba(0,0,0,0.87));
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .mc-list-item-text__secondary {
    font-size: 0.875rem;
    line-height: 1.43;
    font-weight: var(--mc-typography-fontWeightRegular, 400);
    color: var(--mc-palette-text-secondary, rgba(0,0,0,0.6));
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /* Dense */
  :host-context(mc-list[dense]) .mc-list-item-text__primary { font-size: 0.875rem; }
`);
var list_item_text_styles_default = sheet23;

// src/components/list/list-item-text.ts
var MCListItemText = class extends MCElement {
  static observedAttributes = ["primary", "secondary", "inset"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [list_item_text_styles_default];
  }
  render() {
    const primary = this.getAttribute("primary") ?? "";
    const secondary = this.getAttribute("secondary") ?? "";
    this.shadow.innerHTML = `
      <span class="mc-list-item-text__primary">
        ${primary ? primary : '<slot name="primary"><slot></slot></slot>'}
      </span>
      ${secondary ? `<span class="mc-list-item-text__secondary">${secondary}</span>` : '<slot name="secondary"></slot>'}
    `;
  }
};
customElements.define("mc-list-item-text", MCListItemText);

// src/components/list/list-item-icon.styles.ts
var sheet24 = new CSSStyleSheet();
sheet24.replaceSync(`
  :host {
    display: inline-flex;
    min-width: 56px;
    flex-shrink: 0;
    color: var(--mc-palette-text-secondary, rgba(0,0,0,0.6));
  }
  :host([alignItems="flex-start"]) { margin-top: 8px; }
`);
var list_item_icon_styles_default = sheet24;

// src/components/list/list-item-icon.ts
var MCListItemIcon = class extends MCElement {
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [list_item_icon_styles_default];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("mc-list-item-icon", MCListItemIcon);

// src/components/table/table.styles.ts
var sheet25 = new CSSStyleSheet();
sheet25.replaceSync(`
  :host {
    display: table;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    font-family: var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.875rem;
    color: var(--mc-palette-text-primary, rgba(0,0,0,0.87));
  }
  :host([size="small"]) { font-size: 0.8125rem; }
  :host([stickyHeader]) { border-collapse: separate; }
`);
var table_styles_default = sheet25;

// src/components/table/table.ts
var MCTable = class extends MCElement {
  static observedAttributes = ["size", "stickyHeader"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [table_styles_default];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("mc-table", MCTable);

// src/components/table/table-head.ts
var sheet26 = new CSSStyleSheet();
sheet26.replaceSync(`:host { display: table-header-group; }`);
var MCTableHead = class extends MCElement {
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet26];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("mc-table-head", MCTableHead);

// src/components/table/table-body.ts
var sheet27 = new CSSStyleSheet();
sheet27.replaceSync(`:host { display: table-row-group; }`);
var MCTableBody = class extends MCElement {
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet27];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("mc-table-body", MCTableBody);

// src/components/table/table-row.styles.ts
var sheet28 = new CSSStyleSheet();
sheet28.replaceSync(`
  :host {
    display: table-row;
    vertical-align: middle;
    outline: 0;
  }
  :host([hover]:hover) {
    background-color: var(--mc-palette-action-hover, rgba(0,0,0,0.04));
  }
  :host([selected]) {
    background-color: rgba(25, 118, 210, 0.08);
  }
  :host([selected]:hover) {
    background-color: rgba(25, 118, 210, 0.12);
  }
`);
var table_row_styles_default = sheet28;

// src/components/table/table-row.ts
var MCTableRow = class extends MCElement {
  static observedAttributes = ["selected", "hover"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [table_row_styles_default];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("mc-table-row", MCTableRow);

// src/components/table/table-cell.styles.ts
var sheet29 = new CSSStyleSheet();
sheet29.replaceSync(`
  :host {
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid var(--mc-palette-divider, rgba(0,0,0,0.12));
    text-align: left;
    padding: 16px;
    color: var(--mc-palette-text-primary, rgba(0,0,0,0.87));
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.5;
    letter-spacing: 0;
  }

  /* head variant */
  :host([variant="head"]) {
    color: var(--mc-palette-text-primary, rgba(0,0,0,0.87));
    font-weight: var(--mc-typography-fontWeightMedium, 500);
    line-height: 1.5rem;
    background-color: var(--mc-palette-background-paper, #fff);
    border-bottom: 1px solid var(--mc-palette-divider, rgba(0,0,0,0.12));
  }

  /* footer variant */
  :host([variant="footer"]) {
    color: var(--mc-palette-text-secondary, rgba(0,0,0,0.6));
    font-size: 0.75rem;
    border-top: 1px solid var(--mc-palette-divider, rgba(0,0,0,0.12));
    border-bottom: none;
  }

  /* align */
  :host([align="center"]) { text-align: center; }
  :host([align="right"])  { text-align: right; flex-direction: row-reverse; }
  :host([align="justify"]) { text-align: justify; }

  /* padding */
  :host([padding="checkbox"]) { width: 48px; padding: 0 0 0 4px; }
  :host([padding="none"])     { padding: 0; }

  /* size: small (via mc-table[size=small] inherits --mc-table-size) */
  :host-context(mc-table[size="small"]) { padding: 6px 16px; }
`);
var table_cell_styles_default = sheet29;

// src/components/table/table-cell.ts
var MCTableCell = class extends MCElement {
  static observedAttributes = ["variant", "align", "padding"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [table_cell_styles_default];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("mc-table-cell", MCTableCell);

// src/components/tooltip/tooltip.styles.ts
var sheet30 = new CSSStyleSheet();
sheet30.replaceSync(`
  :host {
    display: inline-flex;
    position: relative;
  }

  .mc-tooltip__trigger {
    display: contents;
  }

  .mc-tooltip__bubble {
    position: fixed;
    z-index: var(--mc-zIndex-tooltip, 1500);
    padding: 4px 8px;
    border-radius: 4px;
    background-color: rgba(97, 97, 97, 0.92);
    color: #fff;
    font-family: var(--mc-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.6875rem;
    font-weight: var(--mc-typography-fontWeightMedium, 500);
    line-height: 1.4em;
    letter-spacing: 0;
    max-width: 300px;
    word-wrap: break-word;
    pointer-events: none;
    white-space: pre-line;
    opacity: 0;
    transition: opacity 150ms cubic-bezier(0.4, 0, 1, 1);
  }
  .mc-tooltip__bubble[data-show] {
    opacity: 1;
    transition: opacity 200ms cubic-bezier(0, 0, 0.2, 1) 100ms;
  }

  /* Arrow */
  .mc-tooltip__arrow {
    position: absolute;
    width: 0;
    height: 0;
    display: none;
  }
  :host([arrow]) .mc-tooltip__arrow { display: block; }

  /* Arrow shapes per placement */
  .mc-tooltip__bubble[data-placement="top"] .mc-tooltip__arrow {
    bottom: -4px; left: 50%; transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgba(97, 97, 97, 0.92);
  }
  .mc-tooltip__bubble[data-placement="bottom"] .mc-tooltip__arrow {
    top: -4px; left: 50%; transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid rgba(97, 97, 97, 0.92);
  }
  .mc-tooltip__bubble[data-placement="left"] .mc-tooltip__arrow {
    right: -4px; top: 50%; transform: translateY(-50%);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid rgba(97, 97, 97, 0.92);
  }
  .mc-tooltip__bubble[data-placement="right"] .mc-tooltip__arrow {
    left: -4px; top: 50%; transform: translateY(-50%);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid rgba(97, 97, 97, 0.92);
  }
`);
var tooltip_styles_default = sheet30;

// src/components/tooltip/tooltip.ts
var GAP = 8;
var MCTooltip = class extends MCElement {
  static observedAttributes = ["title", "placement", "arrow"];
  _bubble = null;
  _showTimeout = null;
  _hideTimeout = null;
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [tooltip_styles_default];
  }
  render() {
    this.shadow.innerHTML = `
      <span class="mc-tooltip__trigger"><slot></slot></span>
      <div class="mc-tooltip__bubble" role="tooltip">
        ${this.getAttribute("title") ?? ""}
        <span class="mc-tooltip__arrow"></span>
      </div>
    `;
    this._bubble = this.shadow.querySelector(".mc-tooltip__bubble");
  }
  addEventListeners() {
    this.addEventListener("mouseenter", this._show);
    this.addEventListener("mouseleave", this._hide);
    this.addEventListener("focusin", this._show);
    this.addEventListener("focusout", this._hide);
    this.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this._hideNow();
    });
  }
  cleanup() {
    this.removeEventListener("mouseenter", this._show);
    this.removeEventListener("mouseleave", this._hide);
    this.removeEventListener("focusin", this._show);
    this.removeEventListener("focusout", this._hide);
    if (this._showTimeout) clearTimeout(this._showTimeout);
    if (this._hideTimeout) clearTimeout(this._hideTimeout);
  }
  _show = () => {
    if (this._hideTimeout) {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = null;
    }
    this._showTimeout = setTimeout(() => {
      this._position();
      this._bubble?.setAttribute("data-show", "");
    }, 100);
  };
  _hide = () => {
    if (this._showTimeout) {
      clearTimeout(this._showTimeout);
      this._showTimeout = null;
    }
    this._hideTimeout = setTimeout(() => this._hideNow(), 0);
  };
  _hideNow() {
    this._bubble?.removeAttribute("data-show");
  }
  _position() {
    const bubble = this._bubble;
    if (!bubble) return;
    const trigger = this.shadow.querySelector(".mc-tooltip__trigger");
    if (!trigger) return;
    const rawPlacement = this.getAttribute("placement") ?? "bottom";
    const side = rawPlacement.split("-")[0];
    const align = rawPlacement.split("-")[1];
    bubble.setAttribute("data-placement", side);
    bubble.style.visibility = "hidden";
    bubble.style.left = "0";
    bubble.style.top = "0";
    const slot = trigger.querySelector("slot");
    const assigned = slot?.assignedElements?.();
    const triggerEl = assigned && assigned.length > 0 ? assigned[0] : this;
    const tr = triggerEl.getBoundingClientRect();
    const br = bubble.getBoundingClientRect();
    let top = 0;
    let left = 0;
    switch (side) {
      case "top":
        top = tr.top - br.height - GAP;
        left = this._hAlign(align, tr, br);
        break;
      case "bottom":
        top = tr.bottom + GAP;
        left = this._hAlign(align, tr, br);
        break;
      case "left":
        top = this._vAlign(align, tr, br);
        left = tr.left - br.width - GAP;
        break;
      case "right":
        top = this._vAlign(align, tr, br);
        left = tr.right + GAP;
        break;
    }
    const vw = window.innerWidth, vh = window.innerHeight;
    left = Math.max(8, Math.min(left, vw - br.width - 8));
    top = Math.max(8, Math.min(top, vh - br.height - 8));
    bubble.style.left = `${left}px`;
    bubble.style.top = `${top}px`;
    bubble.style.visibility = "";
  }
  _hAlign(align, tr, br) {
    if (align === "start") return tr.left;
    if (align === "end") return tr.right - br.width;
    return tr.left + tr.width / 2 - br.width / 2;
  }
  _vAlign(align, tr, br) {
    if (align === "start") return tr.top;
    if (align === "end") return tr.bottom - br.height;
    return tr.top + tr.height / 2 - br.height / 2;
  }
};
customElements.define("mc-tooltip", MCTooltip);

// src/utils/elevation.ts
function elevationVar(level) {
  return `var(--mc-shadows-${level})`;
}

// src/utils/transitions.ts
function transition(properties, durationVar = "var(--mc-transitions-duration-standard, 300ms)", easingVar = "var(--mc-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1))") {
  return properties.map((p) => `${p} ${durationVar} ${easingVar}`).join(", ");
}

// src/utils/dom.ts
function getAttr(el, name, defaultValue) {
  return el.getAttribute(name) ?? defaultValue;
}
function getBoolAttr(el, name) {
  return el.hasAttribute(name);
}
function dispatch(el, type, detail = null) {
  el.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
}
//# sourceMappingURL=index.cjs.map
