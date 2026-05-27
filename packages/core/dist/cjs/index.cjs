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
  MEAccordion: () => MEAccordion,
  MEAccordionDetails: () => MEAccordionDetails,
  MEAccordionSummary: () => MEAccordionSummary,
  MEAlert: () => MEAlert,
  MEAppBar: () => MEAppBar,
  MEAutocomplete: () => MEAutocomplete,
  MEAvatar: () => MEAvatar,
  MEBackdrop: () => MEBackdrop,
  MEBadge: () => MEBadge,
  MEBottomNavAction: () => MEBottomNavAction,
  MEBottomNavigation: () => MEBottomNavigation,
  MEBox: () => MEBox,
  MEBreadcrumbs: () => MEBreadcrumbs,
  MEButton: () => MEButton,
  MECard: () => MECard,
  MECardActions: () => MECardActions,
  MECardContent: () => MECardContent,
  MECardHeader: () => MECardHeader,
  MECardMedia: () => MECardMedia,
  MECheckbox: () => MECheckbox,
  MEChip: () => MEChip,
  MECircularProgress: () => MECircularProgress,
  MECollapse: () => MECollapse,
  MEContainer: () => MEContainer,
  MECssBaseline: () => MECssBaseline,
  MEDialog: () => MEDialog,
  MEDialogActions: () => MEDialogActions,
  MEDialogContent: () => MEDialogContent,
  MEDialogTitle: () => MEDialogTitle,
  MEDivider: () => MEDivider,
  MEDrawer: () => MEDrawer,
  MEElement: () => MEElement,
  MEFade: () => MEFade,
  MEGrid: () => MEGrid,
  MEGrow: () => MEGrow,
  MEIcon: () => MEIcon,
  MEIconButton: () => MEIconButton,
  MELinearProgress: () => MELinearProgress,
  MEList: () => MEList,
  MEListItem: () => MEListItem,
  MEListItemButton: () => MEListItemButton,
  MEListItemIcon: () => MEListItemIcon,
  MEListItemText: () => MEListItemText,
  MEMenu: () => MEMenu,
  MEMenuItem: () => MEMenuItem,
  MEModal: () => MEModal,
  MEPagination: () => MEPagination,
  MEPaper: () => MEPaper,
  MEPopover: () => MEPopover,
  MEPopper: () => MEPopper,
  MEPortal: () => MEPortal,
  MERadio: () => MERadio,
  MERadioGroup: () => MERadioGroup,
  MERating: () => MERating,
  MESelect: () => MESelect,
  MESkeleton: () => MESkeleton,
  MESlide: () => MESlide,
  MESlider: () => MESlider,
  MESnackbar: () => MESnackbar,
  MESpeedDial: () => MESpeedDial,
  MESpeedDialAction: () => MESpeedDialAction,
  MEStack: () => MEStack,
  MEStep: () => MEStep,
  MEStepContent: () => MEStepContent,
  MEStepLabel: () => MEStepLabel,
  MEStepper: () => MEStepper,
  MESwitch: () => MESwitch,
  METab: () => METab,
  METable: () => METable,
  METableBody: () => METableBody,
  METableCell: () => METableCell,
  METableHead: () => METableHead,
  METableRow: () => METableRow,
  METabs: () => METabs,
  METextField: () => METextField,
  METhemeProvider: () => METhemeProvider,
  METoolbar: () => METoolbar,
  METooltip: () => METooltip,
  METypography: () => METypography,
  MEZoom: () => MEZoom,
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
          vars[`--me-${path}-${idx}`] = String(item);
        });
      } else if (isPlainObject(val)) {
        flatten(val, path);
      } else {
        vars[`--me-${path}`] = String(val);
      }
    }
  }
  const { spacing, ...rest } = theme;
  flatten(rest, "");
  if (typeof spacing === "number") {
    vars["--me-spacing"] = `${spacing}px`;
  } else if (typeof spacing === "function") {
    const base = spacing(1);
    vars["--me-spacing"] = typeof base === "string" ? base : `${base}px`;
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
var METhemeProvider = class extends HTMLElement {
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
    const root = document.documentElement;
    for (const key of Array.from(root.style)) {
      if (key.startsWith("--me-")) root.style.removeProperty(key);
    }
    for (const [k, v] of Object.entries(vars)) {
      root.style.setProperty(k, v);
    }
  }
};
if (!customElements.get("me-theme-provider")) {
  customElements.define("me-theme-provider", METhemeProvider);
}

// src/base/me-element.ts
var MEElement = class extends HTMLElement {
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
    return `var(--me-${name}${fallback ? ", " + fallback : ""})`;
  }
  spacing(factor = 1) {
    return `calc(var(--me-spacing, 8px) * ${factor})`;
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
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-weight: var(--me-typography-fontWeightRegular, 400);
    font-size: var(--me-typography-fontSize, 14px);
    line-height: 1.5;
    letter-spacing: 0.00938em;
    background-color: var(--me-palette-background-default, #fff);
  }

  strong, b {
    font-weight: var(--me-typography-fontWeightBold, 700);
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
var MECssBaseline = class _MECssBaseline extends HTMLElement {
  static _injected = false;
  connectedCallback() {
    if (_MECssBaseline._injected) return;
    _MECssBaseline._injected = true;
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, css_baseline_styles_default];
  }
  disconnectedCallback() {
    _MECssBaseline._injected = false;
    document.adoptedStyleSheets = document.adoptedStyleSheets.filter((s) => s !== css_baseline_styles_default);
  }
};

// src/components/css-baseline/index.ts
if (!customElements.get("me-css-baseline")) {
  customElements.define("me-css-baseline", MECssBaseline);
}

// src/components/typography/typography.styles.ts
var sheet2 = new CSSStyleSheet();
sheet2.replaceSync(`
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
var METypography = class extends MEElement {
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
    const cls = ["me-typography", `me-typography--${variant}`];
    if (color && color !== "initial") cls.push(`me-typography--color-${color}`);
    if (align && align !== "inherit") cls.push(`me-typography--align-${align}`);
    if (gutterBottom) cls.push("me-typography--gutter-bottom");
    if (noWrap) cls.push("me-typography--no-wrap");
    this.shadow.innerHTML = `<${tag} class="${cls.join(" ")}"><slot></slot></${tag}>`;
  }
};

// src/components/typography/index.ts
if (!customElements.get("me-typography")) {
  customElements.define("me-typography", METypography);
}

// src/utils/ripple.ts
var rippleSheet = new CSSStyleSheet();
rippleSheet.replaceSync(`
  @keyframes me-ripple { to { transform: scale(1); opacity: 0; } }

  .me-ripple-wave {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    transform: scale(0);
    animation: me-ripple 550ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
    wave.className = "me-ripple-wave";
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
    --_main:     var(--me-palette-primary-main);
    --_dark:     var(--me-palette-primary-dark);
    --_contrast: var(--me-palette-primary-contrastText);
    --_hover-bg: rgba(25,118,210,0.04);
    --_border:   rgba(25,118,210,0.5);
  }
  :host([color="secondary"]) {
    --_main:     var(--me-palette-secondary-main);
    --_dark:     var(--me-palette-secondary-dark);
    --_contrast: var(--me-palette-secondary-contrastText);
    --_hover-bg: rgba(156,39,176,0.04);
    --_border:   rgba(156,39,176,0.5);
  }
  :host([color="error"]) {
    --_main:     var(--me-palette-error-main);
    --_dark:     var(--me-palette-error-dark);
    --_contrast: var(--me-palette-error-contrastText);
    --_hover-bg: rgba(211,47,47,0.04);
    --_border:   rgba(211,47,47,0.5);
  }
  :host([color="warning"]) {
    --_main:     var(--me-palette-warning-main);
    --_dark:     var(--me-palette-warning-dark);
    --_contrast: var(--me-palette-warning-contrastText);
    --_hover-bg: rgba(237,108,2,0.04);
    --_border:   rgba(237,108,2,0.5);
  }
  :host([color="info"]) {
    --_main:     var(--me-palette-info-main);
    --_dark:     var(--me-palette-info-dark);
    --_contrast: var(--me-palette-info-contrastText);
    --_hover-bg: rgba(2,136,209,0.04);
    --_border:   rgba(2,136,209,0.5);
  }
  :host([color="success"]) {
    --_main:     var(--me-palette-success-main);
    --_dark:     var(--me-palette-success-dark);
    --_contrast: var(--me-palette-success-contrastText);
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
  .me-button {
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
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: var(--me-typography-button-fontSize, 0.875rem);
    font-weight: var(--me-typography-button-fontWeight, 500);
    letter-spacing: var(--me-typography-button-letterSpacing, 0.02857em);
    text-transform: var(--me-typography-button-textTransform, uppercase);
    line-height: var(--me-typography-button-lineHeight, 1.75);
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    padding: 6px 16px;
    min-width: 64px;
    transition:
      background-color var(--me-transitions-duration-short, 250ms) var(--me-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1)),
      box-shadow       var(--me-transitions-duration-short, 250ms) var(--me-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1)),
      border-color     var(--me-transitions-duration-short, 250ms) var(--me-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1)),
      color            var(--me-transitions-duration-short, 250ms) var(--me-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1));
  }

  /* \u2500\u2500 Sizes \u2500\u2500 */
  :host([size="small"])  .me-button { padding: 4px 10px;  font-size: 0.8125rem; }
  :host([size="large"])  .me-button { padding: 8px 22px;  font-size: 0.9375rem; }

  /* \u2500\u2500 Text variant (default) \u2500\u2500 */
  :host(:not([variant])) .me-button,
  :host([variant="text"]) .me-button {
    background-color: transparent;
    color: var(--_main);
  }
  :host(:not([variant])) .me-button:hover,
  :host([variant="text"]) .me-button:hover {
    background-color: var(--_hover-bg);
  }

  /* \u2500\u2500 Contained variant \u2500\u2500 */
  :host([variant="contained"]) .me-button {
    background-color: var(--_main);
    color: var(--_contrast);
    box-shadow: var(--me-shadows-2);
  }
  :host([variant="contained"]) .me-button:hover {
    background-color: var(--_dark);
    box-shadow: var(--me-shadows-4);
  }
  :host([variant="contained"]) .me-button:active {
    box-shadow: var(--me-shadows-8);
  }

  /* \u2500\u2500 Outlined variant \u2500\u2500 */
  :host([variant="outlined"]) .me-button {
    background-color: transparent;
    color: var(--_main);
    border: 1px solid var(--_border);
    padding: 5px 15px;
  }
  :host([variant="outlined"][size="small"])  .me-button { padding: 3px 9px; }
  :host([variant="outlined"][size="large"])  .me-button { padding: 7px 21px; }
  :host([variant="outlined"]) .me-button:hover {
    background-color: var(--_hover-bg);
    border-color: var(--_main);
  }

  /* \u2500\u2500 Disabled \u2500\u2500 */
  :host([disabled]) .me-button {
    color: var(--me-palette-action-disabled, rgba(0,0,0,0.26));
    cursor: default;
    pointer-events: none;
  }
  :host([variant="contained"][disabled]) .me-button {
    background-color: var(--me-palette-action-disabledBackground, rgba(0,0,0,0.12));
    box-shadow: none;
  }
  :host([variant="outlined"][disabled]) .me-button {
    border-color: var(--me-palette-action-disabledBackground, rgba(0,0,0,0.12));
  }

  /* \u2500\u2500 Focus visible \u2500\u2500 */
  .me-button:focus-visible {
    outline: 2px solid var(--_main);
    outline-offset: 2px;
  }

  /* \u2500\u2500 Icon slots \u2500\u2500 */
  .me-button__start-icon,
  .me-button__end-icon {
    display: inherit;
    align-items: inherit;
  }
  .me-button__start-icon { margin-right: 8px; margin-left: -4px; }
  .me-button__end-icon   { margin-left: 8px;  margin-right: -4px; }
  :host([size="small"]) .me-button__start-icon { margin-left: -2px; margin-right: 6px; }
  :host([size="small"]) .me-button__end-icon   { margin-right: -2px; margin-left: 6px; }
  [hidden] { display: none !important; }
`);
var button_styles_default = sheet3;

// src/components/button/button.ts
var MEButton = class extends MEElement {
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
      <${tag} class="me-button" ${attrs} ${href && disabled ? 'aria-disabled="true"' : ""}>
        <span class="me-button__start-icon" hidden><slot name="start-icon"></slot></span>
        <span class="me-button__label"><slot></slot></span>
        <span class="me-button__end-icon" hidden><slot name="end-icon"></slot></span>
      </${tag}>
    `;
    this._syncIconSlots();
    this._ripple.detach();
    if (!disabled) {
      const btn = this.shadow.querySelector(".me-button");
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
if (!customElements.get("me-button")) {
  customElements.define("me-button", MEButton);
}

// src/components/icon-button/icon-button.styles.ts
var sheet4 = new CSSStyleSheet();
sheet4.replaceSync(`
  :host {
    display: inline-flex;
    vertical-align: middle;
    outline: none;
    --_main:     var(--me-palette-action-active, rgba(0,0,0,0.54));
    --_hover-bg: var(--me-palette-action-hover, rgba(0,0,0,0.04));
  }
  :host([color="primary"])   { --_main: var(--me-palette-primary-main);   --_hover-bg: rgba(25,118,210,0.04); }
  :host([color="secondary"]) { --_main: var(--me-palette-secondary-main); --_hover-bg: rgba(156,39,176,0.04); }
  :host([color="error"])     { --_main: var(--me-palette-error-main);     --_hover-bg: rgba(211,47,47,0.04); }
  :host([color="warning"])   { --_main: var(--me-palette-warning-main);   --_hover-bg: rgba(237,108,2,0.04); }
  :host([color="info"])      { --_main: var(--me-palette-info-main);      --_hover-bg: rgba(2,136,209,0.04); }
  :host([color="success"])   { --_main: var(--me-palette-success-main);   --_hover-bg: rgba(46,125,50,0.04); }
  :host([color="inherit"])   { --_main: inherit; }

  .me-icon-button {
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
    transition: background-color var(--me-transitions-duration-shorter, 200ms) var(--me-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1));
  }
  .me-icon-button:hover { background-color: var(--_hover-bg); }
  :host([size="small"])  .me-icon-button { padding: 5px; font-size: 1.125rem; }
  :host([size="large"])  .me-icon-button { padding: 12px; font-size: 1.75rem; }
  :host([edge="start"])  { margin-left: -12px; }
  :host([edge="end"])    { margin-right: -12px; }
  :host([disabled]) .me-icon-button {
    color: var(--me-palette-action-disabled, rgba(0,0,0,0.26));
    cursor: default;
    pointer-events: none;
  }
  .me-icon-button:focus-visible {
    outline: 2px solid var(--_main);
    outline-offset: 2px;
  }
`);
var icon_button_styles_default = sheet4;

// src/components/icon-button/icon-button.ts
var MEIconButton = class extends MEElement {
  static observedAttributes = ["color", "size", "disabled", "edge"];
  _ripple = new RippleController();
  constructor() {
    super({ mode: "open", delegatesFocus: true });
    this.shadow.adoptedStyleSheets = [icon_button_styles_default, rippleSheet];
  }
  render() {
    const disabled = this.hasAttribute("disabled");
    this.shadow.innerHTML = `
      <button class="me-icon-button" type="button" ${disabled ? "disabled" : ""} aria-label="${this.getAttribute("aria-label") ?? ""}">
        <slot></slot>
      </button>
    `;
    this._ripple.detach();
    if (!disabled) {
      const btn = this.shadow.querySelector(".me-icon-button");
      if (btn) this._ripple.attach(btn);
    }
  }
  cleanup() {
    this._ripple.detach();
  }
};

// src/components/icon-button/index.ts
if (!customElements.get("me-icon-button")) {
  customElements.define("me-icon-button", MEIconButton);
}

// src/components/paper/paper.styles.ts
var sheet5 = new CSSStyleSheet();
sheet5.replaceSync(`
  :host {
    display: block;
    background-color: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    transition: box-shadow var(--me-transitions-duration-standard, 300ms) var(--me-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1));
  }
  :host([square]) { border-radius: 0; }

  .me-paper { width: 100%; height: 100%; }

  /* elevation variant \u2014 box-shadow set via inline style on host */
  :host([variant="outlined"]),
  :host([variant="outlined"][elevation]) {
    box-shadow: none !important;
    border: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
  }
`);
var paper_styles_default = sheet5;

// src/components/paper/paper.ts
var MEPaper = class extends MEElement {
  static observedAttributes = ["elevation", "variant", "square"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [paper_styles_default];
  }
  render() {
    const variant = this.getAttribute("variant") ?? "elevation";
    const elevation = Math.max(0, Math.min(24, parseInt(this.getAttribute("elevation") ?? "1")));
    if (variant !== "outlined") {
      this.style.boxShadow = `var(--me-shadows-${elevation})`;
    } else {
      this.style.removeProperty("box-shadow");
    }
    this.shadow.innerHTML = `<div class="me-paper"><slot></slot></div>`;
  }
};

// src/components/paper/index.ts
if (!customElements.get("me-paper")) {
  customElements.define("me-paper", MEPaper);
}

// src/components/divider/divider.styles.ts
var sheet6 = new CSSStyleSheet();
sheet6.replaceSync(`
  :host {
    display: block;
    border: none;
    margin: 0;
    flex-shrink: 0;
    border-top: thin solid var(--me-palette-divider, rgba(0,0,0,0.12));
  }

  /* Vertical */
  :host([orientation="vertical"]) {
    border-top: none;
    border-left: thin solid var(--me-palette-divider, rgba(0,0,0,0.12));
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
var MEDivider = class extends MEElement {
  static observedAttributes = ["variant", "orientation", "light"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [divider_styles_default];
  }
  render() {
    this.setAttribute("role", "separator");
    const isVertical = this.getAttribute("orientation") === "vertical";
    this.setAttribute("aria-orientation", isVertical ? "vertical" : "horizontal");
    this.shadow.innerHTML = "";
  }
};

// src/components/divider/index.ts
if (!customElements.get("me-divider")) {
  customElements.define("me-divider", MEDivider);
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
  :host([color="primary"])   { color: var(--me-palette-primary-main); }
  :host([color="secondary"]) { color: var(--me-palette-secondary-main); }
  :host([color="action"])    { color: var(--me-palette-action-active, rgba(0,0,0,0.54)); }
  :host([color="error"])     { color: var(--me-palette-error-main); }
  :host([color="disabled"])  { color: var(--me-palette-action-disabled, rgba(0,0,0,0.26)); }
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
var MEIcon = class extends MEElement {
  static observedAttributes = ["color", "font-size"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [icon_styles_default];
  }
  render() {
    this.setAttribute("aria-hidden", "true");
    this.shadow.innerHTML = `<slot></slot>`;
  }
};

// src/components/icon/index.ts
if (!customElements.get("me-icon")) {
  customElements.define("me-icon", MEIcon);
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
var MEBox = class extends MEElement {
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
if (!customElements.get("me-box")) {
  customElements.define("me-box", MEBox);
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

  .me-container { width: 100%; }
`);
var container_styles_default = sheet9;

// src/components/container/container.ts
var MEContainer = class extends MEElement {
  static observedAttributes = ["max-width", "fixed"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [container_styles_default];
  }
  render() {
    this.shadow.innerHTML = `<div class="me-container"><slot></slot></div>`;
  }
};

// src/components/container/index.ts
if (!customElements.get("me-container")) {
  customElements.define("me-container", MEContainer);
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
var MEStack = class extends MEElement {
  static observedAttributes = ["direction", "spacing", "align", "justify", "flex-wrap"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [stack_styles_default];
  }
  render() {
    const spacing = this.getAttribute("spacing");
    if (spacing !== null) {
      const gap = isNaN(Number(spacing)) ? spacing : `calc(var(--me-spacing, 8px) * ${spacing})`;
      this.style.setProperty("gap", gap);
    } else {
      this.style.removeProperty("gap");
    }
    this.shadow.innerHTML = `<slot></slot>`;
  }
};

// src/components/stack/index.ts
if (!customElements.get("me-stack")) {
  customElements.define("me-stack", MEStack);
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
var MEGrid = class extends MEElement {
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
      const gap = isNaN(Number(spacing)) ? spacing : `calc(var(--me-spacing,8px)*${spacing})`;
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
if (!customElements.get("me-grid")) {
  customElements.define("me-grid", MEGrid);
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
    --_color: var(--me-palette-primary-main, #1976d2);
    --_color-checked: var(--me-palette-primary-main, #1976d2);
  }
  :host([color="secondary"]) { --_color: var(--me-palette-secondary-main, #9c27b0); --_color-checked: var(--me-palette-secondary-main, #9c27b0); }
  :host([color="error"])     { --_color: var(--me-palette-error-main, #d32f2f);     --_color-checked: var(--me-palette-error-main, #d32f2f); }
  :host([color="warning"])   { --_color: var(--me-palette-warning-main, #ed6c02);   --_color-checked: var(--me-palette-warning-main, #ed6c02); }
  :host([color="info"])      { --_color: var(--me-palette-info-main, #0288d1);      --_color-checked: var(--me-palette-info-main, #0288d1); }
  :host([color="success"])   { --_color: var(--me-palette-success-main, #2e7d32);   --_color-checked: var(--me-palette-success-main, #2e7d32); }

  :host([disabled]) { cursor: default; opacity: 0.38; pointer-events: none; }

  .me-checkbox {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    overflow: hidden;
  }

  .me-checkbox__input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: inherit;
    z-index: 1;
  }

  .me-checkbox__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    pointer-events: none;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    transition: color 150ms cubic-bezier(0.4,0,0.2,1);
  }

  :host([checked]) .me-checkbox__icon,
  :host([indeterminate]) .me-checkbox__icon {
    color: var(--_color-checked);
  }

  .me-checkbox__icon svg {
    fill: currentColor;
    width: 18px;
    height: 18px;
  }

  .me-checkbox:hover { background-color: var(--me-palette-action-hover, rgba(0,0,0,0.04)); }
  :host([checked]) .me-checkbox:hover,
  :host([indeterminate]) .me-checkbox:hover { background-color: color-mix(in srgb, var(--_color) 8%, transparent); }

  .me-checkbox { outline: none; }
  :host(:focus-visible) .me-checkbox {
    background-color: color-mix(in srgb, var(--_color) 12%, transparent);
  }
`);
var checkbox_styles_default = sheet11;

// src/components/checkbox/checkbox.ts
var MECheckbox = class extends MEElement {
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
      <div class="me-checkbox">
        <input
          class="me-checkbox__input"
          type="checkbox"
          tabindex="-1"
          ${checked ? "checked" : ""}
          ${indeterminate ? "data-indeterminate" : ""}
          ${disabled ? "disabled" : ""}
        />
        <span class="me-checkbox__icon">
          ${indeterminate ? ICON_INDETERMINATE : checked ? ICON_CHECKED : ICON_UNCHECKED}
        </span>
      </div>
    `;
    const input = this.shadow.querySelector("input");
    if (indeterminate) input.indeterminate = true;
    this._ripple.detach();
    if (!disabled) {
      const box = this.shadow.querySelector(".me-checkbox");
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
customElements.define("me-checkbox", MECheckbox);

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
    --_color: var(--me-palette-primary-main, #1976d2);
  }
  :host([color="secondary"]) { --_color: var(--me-palette-secondary-main, #9c27b0); }
  :host([color="error"])     { --_color: var(--me-palette-error-main, #d32f2f); }
  :host([color="warning"])   { --_color: var(--me-palette-warning-main, #ed6c02); }
  :host([color="info"])      { --_color: var(--me-palette-info-main, #0288d1); }
  :host([color="success"])   { --_color: var(--me-palette-success-main, #2e7d32); }

  :host([disabled]) { cursor: default; opacity: 0.38; pointer-events: none; }

  .me-radio {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    overflow: hidden;
  }

  .me-radio__input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: inherit;
    z-index: 1;
  }

  .me-radio__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    pointer-events: none;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    transition: color 150ms cubic-bezier(0.4,0,0.2,1);
  }

  :host([checked]) .me-radio__icon { color: var(--_color); }

  .me-radio__icon svg { fill: currentColor; width: 20px; height: 20px; }

  .me-radio:hover { background-color: var(--me-palette-action-hover, rgba(0,0,0,0.04)); }
  :host([checked]) .me-radio:hover { background-color: color-mix(in srgb, var(--_color) 8%, transparent); }

  :host(:focus-visible) .me-radio {
    background-color: color-mix(in srgb, var(--_color) 12%, transparent);
  }
`);
var radio_styles_default = sheet12;

// src/components/radio/radio.ts
var MERadio = class extends MEElement {
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
      <div class="me-radio">
        <input
          class="me-radio__input"
          type="radio"
          tabindex="-1"
          ${checked ? "checked" : ""}
          ${disabled ? "disabled" : ""}
        />
        <span class="me-radio__icon">
          ${checked ? ICON_CHECKED2 : ICON_UNCHECKED2}
        </span>
      </div>
    `;
    this._ripple.detach();
    if (!disabled) {
      const dot = this.shadow.querySelector(".me-radio");
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
    this.dispatchEvent(new CustomEvent("me-radio-select", { bubbles: true, detail: { value: this.value } }));
    this.checked = true;
    this.dispatchEvent(new Event("change", { bubbles: true }));
  }
  _moveFocus(dir) {
    const group = this.closest("me-radio-group");
    if (!group) return;
    const radios = Array.from(group.querySelectorAll("me-radio:not([disabled])"));
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
customElements.define("me-radio", MERadio);

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
var MERadioGroup = class extends MEElement {
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
    this.addEventListener("me-radio-select", this._handleSelect);
  }
  cleanup() {
    this.removeEventListener("me-radio-select", this._handleSelect);
  }
  _handleSelect = (e) => {
    const target = e.target;
    const selected = target.value;
    const radios = this.querySelectorAll("me-radio");
    radios.forEach((r) => {
      r.checked = r.value === selected;
    });
    this.setAttribute("value", selected);
    this.dispatchEvent(new Event("change", { bubbles: true }));
  };
  _syncRadios() {
    const name = this.getAttribute("name");
    const value = this.getAttribute("value");
    const radios = this.querySelectorAll("me-radio");
    radios.forEach((r) => {
      if (name && !r.getAttribute("name")) r.setAttribute("name", name);
      if (value !== null) r.checked = r.value === value;
    });
  }
  onAttributeChanged(name, _oldVal, _newVal) {
    if (name === "value") this._syncRadios();
  }
};
customElements.define("me-radio-group", MERadioGroup);

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
    --_color: var(--me-palette-primary-main, #1976d2);
  }
  :host([color="secondary"]) { --_color: var(--me-palette-secondary-main, #9c27b0); }
  :host([color="error"])     { --_color: var(--me-palette-error-main, #d32f2f); }
  :host([color="warning"])   { --_color: var(--me-palette-warning-main, #ed6c02); }
  :host([color="info"])      { --_color: var(--me-palette-info-main, #0288d1); }
  :host([color="success"])   { --_color: var(--me-palette-success-main, #2e7d32); }

  :host([disabled]) { cursor: default; opacity: 0.38; pointer-events: none; }

  .me-switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 58px;
    height: 38px;
    padding: 9px;
    box-sizing: border-box;
  }

  .me-switch__input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: inherit;
    z-index: 1;
  }

  .me-switch__track {
    width: 34px;
    height: 14px;
    border-radius: 7px;
    background-color: color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 44%, transparent);
    transition: background-color 150ms cubic-bezier(0.4,0,0.2,1);
    position: relative;
  }

  :host([checked]) .me-switch__track {
    background-color: color-mix(in srgb, var(--_color) 50%, transparent);
  }

  .me-switch__thumb-wrapper {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: left 150ms cubic-bezier(0.4,0,0.2,1);
  }

  :host([checked]) .me-switch__thumb-wrapper {
    left: 14px;
  }

  .me-switch__thumb {
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

  :host([checked]) .me-switch__thumb {
    background-color: var(--_color);
  }

  .me-switch__ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    overflow: hidden;
  }

  .me-switch__thumb-wrapper:hover .me-switch__ripple {
    background-color: var(--me-palette-action-hover, rgba(0,0,0,0.04));
  }

  :host([checked]) .me-switch__thumb-wrapper:hover .me-switch__ripple {
    background-color: color-mix(in srgb, var(--_color) 8%, transparent);
  }

  :host(:focus-visible) .me-switch__ripple {
    background-color: color-mix(in srgb, var(--_color) 12%, transparent);
  }
`);
var switch_styles_default = sheet14;

// src/components/switch/switch.ts
var MESwitch = class extends MEElement {
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
      <div class="me-switch">
        <input class="me-switch__input" type="checkbox" tabindex="-1" ${checked ? "checked" : ""} ${disabled ? "disabled" : ""}/>
        <div class="me-switch__track">
          <div class="me-switch__thumb-wrapper">
            <div class="me-switch__ripple"></div>
            <div class="me-switch__thumb"></div>
          </div>
        </div>
      </div>
    `;
    this._ripple.detach();
    if (!disabled) {
      const rippleEl = this.shadow.querySelector(".me-switch__ripple");
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
customElements.define("me-switch", MESwitch);

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
    --_primary: var(--me-palette-primary-main, #1976d2);
    --_error: var(--me-palette-error-main, #d32f2f);
    --_text: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    --_secondary-text: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    --_border: color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 27%, transparent);
    --_bg: color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 7%, transparent);
    --_active-color: var(--_primary);
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }
  :host([color="secondary"]) { --_active-color: var(--me-palette-secondary-main, #9c27b0); }
  :host([error])             { --_active-color: var(--_error); }
  :host([disabled])          { opacity: 0.38; pointer-events: none; }

  /* \u2500\u2500 INPUT WRAPPER \u2500\u2500 */
  .me-text-field {
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    cursor: text;
    width: 100%;
  }

  /* \u2500\u2500 FILLED \u2500\u2500 */
  :host([variant="filled"]) .me-text-field {
    background-color: var(--_bg);
    border-radius: 4px 4px 0 0;
  }
  :host([variant="filled"]) .me-text-field::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background-color: color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 48%, transparent);
    pointer-events: none;
  }
  :host([variant="filled"]) .me-text-field::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background-color: var(--_active-color);
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0,0,0.2,1);
  }
  :host(.me-text-field--focused[variant="filled"]) .me-text-field::after { transform: scaleX(1); }

  /* \u2500\u2500 OUTLINED \u2500\u2500
     Three-div notch: leading | notch | trailing.
     The notch div's width is set by JS (label.offsetWidth * 0.75 + 10px) so the
     gap in the top border is always exactly as wide as the floating label. */
  .me-notched-outline {
    display: none;
    position: absolute;
    top: -5px; right: 0; bottom: 0; left: 0;
    pointer-events: none;
  }
  :host([variant="outlined"]) .me-notched-outline { display: flex; }

  .me-notched-outline__leading {
    width: 9px;
    border: 1px solid var(--_border);
    border-right: none;
    border-radius: 4px 0 0 4px;
    transition: border-color 200ms, border-width 0ms;
    flex-shrink: 0;
  }
  .me-notched-outline__notch {
    border: 1px solid var(--_border);
    border-left: none;
    border-right: none;
    transition: border-color 200ms, border-top-color 0ms, border-width 0ms;
    flex-shrink: 0;
  }
  .me-notched-outline__trailing {
    flex: 1;
    border: 1px solid var(--_border);
    border-left: none;
    border-radius: 0 4px 4px 0;
    transition: border-color 200ms, border-width 0ms;
  }

  /* Open notch: remove the top border segment over the label */
  :host(.me-text-field--floating[variant="outlined"]) .me-notched-outline__notch {
    border-top-color: transparent;
  }

  /* Focus */
  :host(.me-text-field--focused[variant="outlined"]) .me-notched-outline__leading,
  :host(.me-text-field--focused[variant="outlined"]) .me-notched-outline__notch,
  :host(.me-text-field--focused[variant="outlined"]) .me-notched-outline__trailing {
    border-color: var(--_active-color);
    border-width: 2px;
  }
  :host(.me-text-field--focused.me-text-field--floating[variant="outlined"]) .me-notched-outline__notch {
    border-top-color: transparent;
  }

  /* Error */
  :host([error][variant="outlined"]) .me-notched-outline__leading,
  :host([error][variant="outlined"]) .me-notched-outline__notch,
  :host([error][variant="outlined"]) .me-notched-outline__trailing {
    border-color: var(--_error);
  }
  :host([error].me-text-field--floating[variant="outlined"]) .me-notched-outline__notch {
    border-top-color: transparent;
  }

  /* \u2500\u2500 STANDARD \u2500\u2500 */
  /* margin-top pushes the wrapper below the label's resting position, so the
     border-bottom cannot intersect the label text. */
  :host([variant="standard"]) .me-text-field,
  :host(:not([variant])) .me-text-field {
    margin-top: 16px;
    border-bottom: 1px solid color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 48%, transparent);
  }
  :host([variant="standard"]) .me-text-field::after,
  :host(:not([variant])) .me-text-field::after {
    content: '';
    position: absolute;
    bottom: -1px; left: 0; right: 0;
    height: 2px;
    background-color: var(--_active-color);
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0,0,0.2,1);
  }
  :host(.me-text-field--focused[variant="standard"]) .me-text-field::after,
  :host(.me-text-field--focused:not([variant])) .me-text-field::after { transform: scaleX(1); }

  /* \u2500\u2500 LABEL \u2500\u2500
     Positioned relative to :host (which is position:relative).
     The label is a sibling of .me-text-field, not inside it, so
     border-bottom / background never intersect it. */
  .me-text-field__label {
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
  :host([variant="filled"]) .me-text-field__label {
    transform: translate(12px, 20px) scale(1);
  }
  :host(.me-text-field--floating[variant="filled"]) .me-text-field__label {
    transform: translate(12px, 7px) scale(0.75);
  }
  :host(.me-text-field--focused[variant="filled"]) .me-text-field__label {
    color: var(--_active-color);
  }

  /* Outlined \u2014 resting: label sits at input text level (padding-top 16.5px \u2248 y=16px).
     Floating: text must be centered on the border (y=\u22125px, center=\u22124.5px).
     With scale(0.75), leading above text = 3.5*0.75 = 2.625px, text height = 12px.
     Required Y: \u22124.5 \u2212 2.625 \u2212 6 = \u221213.125 \u2248 \u221213px. */
  :host([variant="outlined"]) .me-text-field__label {
    transform: translate(14px, 16px) scale(1);
  }
  :host([size="small"][variant="outlined"]) .me-text-field__label {
    transform: translate(14px, 9px) scale(1);
  }
  :host(.me-text-field--floating[variant="outlined"]) .me-text-field__label {
    transform: translate(14px, -13px) scale(0.75);
  }
  :host(.me-text-field--focused[variant="outlined"]) .me-text-field__label {
    color: var(--_active-color);
  }

  /* Standard \u2014 .me-text-field has margin-top:16px, so input text is at y=20px.
     Resting label at translate(0,20px) overlaps input text (acts as placeholder).
     Floating label at translate(0,-1.5px) sits at the top of :host. */
  :host([variant="standard"]) .me-text-field__label,
  :host(:not([variant])) .me-text-field__label {
    transform: translate(0, 20px) scale(1);
  }
  :host(.me-text-field--floating[variant="standard"]) .me-text-field__label,
  :host(.me-text-field--floating:not([variant])) .me-text-field__label {
    transform: translate(0, -1.5px) scale(0.75);
  }
  :host(.me-text-field--focused[variant="standard"]) .me-text-field__label,
  :host(.me-text-field--focused:not([variant])) .me-text-field__label {
    color: var(--_active-color);
  }

  :host([error]) .me-text-field__label { color: var(--_error); }

  /* \u2500\u2500 INPUT \u2500\u2500 */
  .me-text-field__input {
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
  :host([variant="filled"]) .me-text-field__input          { padding: 25px 12px 8px; }
  :host([variant="outlined"]) .me-text-field__input        { padding: 16.5px 14px; }
  :host([variant="standard"]) .me-text-field__input,
  :host(:not([variant])) .me-text-field__input             { padding: 4px 0 5px; }

  /* Small size */
  :host([size="small"][variant="filled"]) .me-text-field__input   { padding: 17px 12px 4px; }
  /* Small filled box is 44px tall (17+23+4); center = 22px. Without this rule the label
     inherits translate(12px,20px) from the base filled rule, centering it at y=31.5px \u2014
     nearly 10px too low. translate(12px,10px) puts the center at y=21.5px \u2248 22px. */
  :host([size="small"][variant="filled"]) .me-text-field__label {
    transform: translate(12px, 10px) scale(1);
  }
  :host(.me-text-field--floating[size="small"][variant="filled"]) .me-text-field__label {
    transform: translate(12px, 4px) scale(0.75);
  }
  :host([size="small"][variant="outlined"]) .me-text-field__input { padding: 8.5px 14px; }
  :host([size="small"][variant="standard"]) .me-text-field__input,
  :host([size="small"]:not([variant])) .me-text-field__input      { padding: 2px 0 3px; }

  /* \u2500\u2500 HELPER TEXT \u2500\u2500 */
  .me-text-field__helper {
    font-family: inherit;
    font-size: 0.75rem;
    line-height: 1.66;
    color: var(--_secondary-text);
    margin: 3px 0 0;
    min-height: 1.25em;
  }
  :host([error]) .me-text-field__helper { color: var(--_error); }

  /* \u2500\u2500 ADORNMENTS \u2500\u2500 */
  .me-text-field__adornment-start,
  .me-text-field__adornment-end {
    display: flex;
    align-items: center;
    color: var(--_secondary-text);
    white-space: nowrap;
    flex-shrink: 0;
  }
  .me-text-field__adornment-start { padding-left: 14px; margin-right: 4px; }
  .me-text-field__adornment-end   { padding-right: 14px; margin-left: 4px; }
  :host([variant="filled"]) .me-text-field__adornment-start { padding-left: 12px; padding-top: 16px; }
  :host([variant="filled"]) .me-text-field__adornment-end   { padding-right: 12px; padding-top: 16px; }
`);
var text_field_styles_default = sheet15;

// src/components/text-field/text-field.ts
var METextField = class extends MEElement {
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
    const input = this.shadow.querySelector(".me-text-field__input");
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
    this.classList.toggle("me-text-field--floating", isFloating);
    this.classList.toggle("me-text-field--focused", this._focused);
    const inputAttrs = [
      `class="me-text-field__input"`,
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
      <div class="me-notched-outline" aria-hidden="true">
        <div class="me-notched-outline__leading"></div>
        <div class="me-notched-outline__notch"></div>
        <div class="me-notched-outline__trailing"></div>
      </div>` : "";
    this.shadow.innerHTML = `
      ${hasLabel ? `<label class="me-text-field__label">${label}</label>` : ""}
      <div class="me-text-field">
        ${notch}
        ${startAdornment ? `<div class="me-text-field__adornment-start">${startAdornment}</div>` : ""}
        ${inputEl}
        ${endAdornment ? `<div class="me-text-field__adornment-end">${endAdornment}</div>` : ""}
      </div>
      ${helperText ? `<p class="me-text-field__helper">${helperText}</p>` : ""}
    `;
    this._updateNotchWidth(isFloating);
    this._bindInput();
  }
  _bindInput() {
    const input = this.shadow.querySelector(".me-text-field__input");
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
    this.classList.toggle("me-text-field--floating", isFloating);
    this.classList.toggle("me-text-field--focused", this._focused);
    this._updateNotchWidth(isFloating);
  }
  // Sets the outlined notch div width to exactly match the floating label's visual width.
  // offsetWidth gives the layout width (unaffected by CSS transform), so multiply by 0.75
  // to get the visual width at scale(0.75). Add 10px: the leading div ends at x=9px while
  // the label starts at x=14px, leaving a natural 5px left buffer; we add 5px right buffer.
  _updateNotchWidth(isFloating) {
    if ((this.getAttribute("variant") ?? "outlined") !== "outlined") return;
    const notch = this.shadow.querySelector(".me-notched-outline__notch");
    if (!notch) return;
    const label = this.shadow.querySelector(".me-text-field__label");
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
customElements.define("me-text-field", METextField);

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
    --_primary: var(--me-palette-primary-main, #1976d2);
    --_error: var(--me-palette-error-main, #d32f2f);
    --_text: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    --_secondary-text: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    --_border: color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 27%, transparent);
    --_bg: color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 7%, transparent);
    --_active-color: var(--_primary);
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }
  :host([color="secondary"]) { --_active-color: var(--me-palette-secondary-main, #9c27b0); }
  :host([error])             { --_active-color: var(--_error); }
  :host([disabled])          { opacity: 0.38; pointer-events: none; }

  /* \u2500\u2500 SELECT WRAPPER \u2500\u2500 */
  .me-select {
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    cursor: pointer;
  }

  /* \u2500\u2500 NATIVE SELECT \u2500\u2500 */
  .me-select__native {
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

  /* \u2500\u2500 ARROW \u2500\u2500 */
  .me-select__arrow {
    position: absolute;
    pointer-events: none;
    color: var(--_secondary-text);
    display: flex;
    align-items: center;
  }
  :host([variant="filled"]) .me-select__arrow,
  :host([variant="outlined"]) .me-select__arrow { right: 14px; }
  :host([variant="standard"]) .me-select__arrow,
  :host(:not([variant])) .me-select__arrow { right: 0; }
  .me-select__arrow svg { fill: currentColor; width: 24px; height: 24px; }

  /* \u2500\u2500 FILLED \u2500\u2500 */
  :host([variant="filled"]) .me-select {
    background-color: var(--_bg);
    border-radius: 4px 4px 0 0;
  }
  :host([variant="filled"]) .me-select::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background-color: color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 48%, transparent);
    pointer-events: none;
  }
  :host([variant="filled"]) .me-select::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background-color: var(--_active-color);
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0,0,0.2,1);
  }
  :host(.me-select--focused[variant="filled"]) .me-select::after { transform: scaleX(1); }
  :host([variant="filled"]) .me-select__native { padding: 25px 32px 8px 12px; }

  /* \u2500\u2500 OUTLINED \u2500\u2500 */
  :host([variant="outlined"]) .me-select { border-radius: 4px; }

  .me-notched-outline {
    display: none;
    position: absolute;
    top: -5px; right: 0; bottom: 0; left: 0;
    pointer-events: none;
  }
  :host([variant="outlined"]) .me-notched-outline { display: flex; }

  .me-notched-outline__leading {
    width: 9px;
    border: 1px solid var(--_border);
    border-right: none;
    border-radius: 4px 0 0 4px;
    transition: border-color 200ms, border-width 0ms;
    flex-shrink: 0;
  }
  .me-notched-outline__notch {
    border: 1px solid var(--_border);
    border-left: none;
    border-right: none;
    transition: border-color 200ms, border-top-color 0ms, border-width 0ms;
    flex-shrink: 0;
  }
  .me-notched-outline__trailing {
    flex: 1;
    border: 1px solid var(--_border);
    border-left: none;
    border-radius: 0 4px 4px 0;
    transition: border-color 200ms, border-width 0ms;
  }

  :host(.me-select--floating[variant="outlined"]) .me-notched-outline__notch {
    border-top-color: transparent;
  }
  :host(.me-select--focused[variant="outlined"]) .me-notched-outline__leading,
  :host(.me-select--focused[variant="outlined"]) .me-notched-outline__notch,
  :host(.me-select--focused[variant="outlined"]) .me-notched-outline__trailing {
    border-color: var(--_active-color);
    border-width: 2px;
  }
  :host(.me-select--focused.me-select--floating[variant="outlined"]) .me-notched-outline__notch {
    border-top-color: transparent;
  }
  :host([error][variant="outlined"]) .me-notched-outline__leading,
  :host([error][variant="outlined"]) .me-notched-outline__notch,
  :host([error][variant="outlined"]) .me-notched-outline__trailing {
    border-color: var(--_error);
  }
  :host([error].me-select--floating[variant="outlined"]) .me-notched-outline__notch {
    border-top-color: transparent;
  }

  :host([variant="outlined"]) .me-select__native { padding: 16.5px 32px 16.5px 14px; }

  /* \u2500\u2500 STANDARD \u2500\u2500 */
  :host([variant="standard"]) .me-select,
  :host(:not([variant])) .me-select {
    margin-top: 16px;
    border-bottom: 1px solid color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 48%, transparent);
  }
  :host([variant="standard"]) .me-select::after,
  :host(:not([variant])) .me-select::after {
    content: '';
    position: absolute;
    bottom: -1px; left: 0; right: 0;
    height: 2px;
    background-color: var(--_active-color);
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0,0,0.2,1);
  }
  :host(.me-select--focused[variant="standard"]) .me-select::after,
  :host(.me-select--focused:not([variant])) .me-select::after { transform: scaleX(1); }
  :host([variant="standard"]) .me-select__native,
  :host(:not([variant])) .me-select__native { padding: 4px 24px 5px 0; }

  /* \u2500\u2500 LABEL \u2500\u2500
     Positioned relative to :host (position:relative).
     Lives outside .me-select so the border/background never intersect it. */
  .me-select__label {
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
  :host([variant="filled"]) .me-select__label {
    transform: translate(12px, 20px) scale(1);
  }
  :host(.me-select--floating[variant="filled"]) .me-select__label {
    transform: translate(12px, 7px) scale(0.75);
  }
  :host(.me-select--focused[variant="filled"]) .me-select__label { color: var(--_active-color); }

  /* Outlined */
  :host([variant="outlined"]) .me-select__label {
    transform: translate(14px, 16px) scale(1);
  }
  :host(.me-select--floating[variant="outlined"]) .me-select__label {
    transform: translate(14px, -13px) scale(0.75);
  }
  :host(.me-select--focused[variant="outlined"]) .me-select__label { color: var(--_active-color); }

  /* Standard */
  :host([variant="standard"]) .me-select__label,
  :host(:not([variant])) .me-select__label {
    transform: translate(0, 20px) scale(1);
  }
  :host(.me-select--floating[variant="standard"]) .me-select__label,
  :host(.me-select--floating:not([variant])) .me-select__label {
    transform: translate(0, -1.5px) scale(0.75);
  }
  :host(.me-select--focused[variant="standard"]) .me-select__label,
  :host(.me-select--focused:not([variant])) .me-select__label { color: var(--_active-color); }

  :host([error]) .me-select__label { color: var(--_error); }

  /* \u2500\u2500 HELPER \u2500\u2500 */
  .me-select__helper {
    font-family: inherit;
    font-size: 0.75rem;
    line-height: 1.66;
    color: var(--_secondary-text);
    margin: 3px 0 0;
    min-height: 1.25em;
  }
  :host([error]) .me-select__helper { color: var(--_error); }
`);
var select_styles_default = sheet16;

// src/components/select/select.ts
var MESelect = class extends MEElement {
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
  _observer = null;
  constructor() {
    super({ mode: "open", delegatesFocus: true });
    this._internals = this.attachInternals();
    this.shadow.adoptedStyleSheets = [select_styles_default];
  }
  connectedCallback() {
    super.connectedCallback();
    requestAnimationFrame(() => this._syncOptions());
    this._observer = new MutationObserver(() => this._syncOptions());
    this._observer.observe(this, { childList: true, subtree: true });
  }
  disconnectedCallback() {
    this._observer?.disconnect();
    this._observer = null;
    super.disconnectedCallback();
  }
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = v;
    const select = this.shadow.querySelector(".me-select__native");
    if (select) select.value = v;
    this._internals.setFormValue(v);
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
    const hasLabel = label.length > 0;
    this.classList.add("me-select--floating");
    this.classList.toggle("me-select--focused", this._focused);
    const notch = variant === "outlined" ? `
      <div class="me-notched-outline" aria-hidden="true">
        <div class="me-notched-outline__leading"></div>
        <div class="me-notched-outline__notch"></div>
        <div class="me-notched-outline__trailing"></div>
      </div>` : "";
    this.shadow.innerHTML = `
      ${hasLabel ? `<label class="me-select__label">${label}</label>` : ""}
      <div class="me-select">
        ${notch}
        <select
          class="me-select__native"
          ${disabled ? "disabled" : ""}
          ${required ? "required" : ""}
          ${name ? `name="${name}"` : ""}
          ${multiple ? "multiple" : ""}
        ></select>
        <span class="me-select__arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
        </span>
      </div>
      ${helperText ? `<p class="me-select__helper">${helperText}</p>` : ""}
    `;
    this._updateNotchWidth();
    this._syncOptions();
    this._bindSelect();
  }
  _updateNotchWidth() {
    if ((this.getAttribute("variant") ?? "outlined") !== "outlined") return;
    const notch = this.shadow.querySelector(".me-notched-outline__notch");
    if (!notch) return;
    const label = this.shadow.querySelector(".me-select__label");
    if (label && label.offsetWidth > 0) {
      notch.style.width = `${label.offsetWidth * 0.75 + 10}px`;
    } else {
      notch.style.width = "";
    }
  }
  addEventListeners() {
  }
  _syncOptions() {
    const native = this.shadow.querySelector(".me-select__native");
    if (!native) return;
    const lightOptions = Array.from(this.querySelectorAll(":scope > option, :scope > optgroup"));
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
  }
  _bindSelect() {
    const native = this.shadow.querySelector(".me-select__native");
    if (!native) return;
    native.addEventListener("focus", () => {
      this._focused = true;
      this.classList.add("me-select--focused");
    });
    native.addEventListener("blur", () => {
      this._focused = false;
      this.classList.remove("me-select--focused");
    });
    native.addEventListener("change", () => {
      this._value = native.value;
      this._internals.setFormValue(this._value);
      this.dispatchEvent(new Event("change", { bubbles: true }));
    });
  }
  onAttributeChanged(name, _oldVal, newVal) {
    if (name === "value") {
      this._value = newVal ?? "";
      const native = this.shadow.querySelector(".me-select__native");
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
customElements.define("me-select", MESelect);

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
    background-color: var(--me-palette-grey-400, #bdbdbd);
    color: var(--me-palette-background-default, #fff);
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 1.25rem;
    line-height: 1;
    user-select: none;
    position: relative;
  }
  :host([variant="rounded"]) { border-radius: calc(var(--me-shape-borderRadius, 4) * 1px); }
  :host([variant="square"])  { border-radius: 0; }

  .me-avatar__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    text-indent: -9999px;
  }

  /* Shift letters down to compensate for cap-height sitting above the em-square center */
  .me-avatar__letter {
    display: block;
    padding-top: calc((1em - 1cap) / 2);
  }
`);
var avatar_styles_default = sheet17;

// src/components/avatar/avatar.ts
var MEAvatar = class extends MEElement {
  static observedAttributes = ["src", "alt", "variant"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [avatar_styles_default];
  }
  render() {
    const src = this.getAttribute("src") ?? "";
    const alt = this.getAttribute("alt") ?? "";
    this.shadow.innerHTML = src ? `<img class="me-avatar__img" src="${src}" alt="${alt}">` : `<span class="me-avatar__letter"><slot></slot></span>`;
  }
};
customElements.define("me-avatar", MEAvatar);

// src/components/badge/badge.styles.ts
var sheet18 = new CSSStyleSheet();
sheet18.replaceSync(`
  :host {
    display: inline-flex;
    position: relative;
    vertical-align: middle;
    flex-shrink: 0;
    --_color: var(--me-palette-error-main, #d32f2f);
    --_contrast: var(--me-palette-error-contrastText, #fff);
  }
  :host([color="primary"]) {
    --_color: var(--me-palette-primary-main, #1976d2);
    --_contrast: var(--me-palette-primary-contrastText, #fff);
  }
  :host([color="secondary"]) {
    --_color: var(--me-palette-secondary-main, #9c27b0);
    --_contrast: var(--me-palette-secondary-contrastText, #fff);
  }
  :host([color="success"]) {
    --_color: var(--me-palette-success-main, #2e7d32);
    --_contrast: var(--me-palette-success-contrastText, #fff);
  }
  :host([color="warning"]) {
    --_color: var(--me-palette-warning-main, #ed6c02);
    --_contrast: var(--me-palette-warning-contrastText, #fff);
  }
  :host([color="info"]) {
    --_color: var(--me-palette-info-main, #0288d1);
    --_contrast: var(--me-palette-info-contrastText, #fff);
  }

  .me-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 14%;
    right: 14%;
    transform: translate(50%, -50%);
    transform-origin: 100% 0%;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: 10px;
    background-color: var(--_color);
    color: var(--_contrast);
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.75rem;
    font-weight: var(--me-typography-fontWeightMedium, 500);
    line-height: 1;
    white-space: nowrap;
    box-sizing: border-box;
    z-index: 1;
  }

  /* dot variant */
  :host([variant="dot"]) .me-badge {
    min-width: 8px;
    width: 8px;
    height: 8px;
    padding: 0;
    border-radius: 50%;
  }

  /* overlap="rectangular" pins the anchor to the corner (e.g. wrapping a chip or button) */
  :host([overlap="rectangular"]) .me-badge {
    top: 0;
    right: 0;
  }
`);
var badge_styles_default = sheet18;

// src/components/badge/badge.ts
var MEBadge = class extends MEElement {
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
    const badge = invisible ? "" : `<span class="me-badge" aria-label="${label}">${variant === "dot" ? "" : label}</span>`;
    this.shadow.innerHTML = `<slot></slot>${badge}`;
  }
};
customElements.define("me-badge", MEBadge);

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
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.8125rem;
    font-weight: var(--me-typography-fontWeightRegular, 400);
    cursor: default;
    outline: 0;
    vertical-align: middle;
    text-decoration: none;
    --_color: var(--me-palette-primary-main, #1976d2);
    --_color-light: rgba(25, 118, 210, 0.12);
  }
  :host([color="secondary"]) {
    --_color: var(--me-palette-secondary-main, #9c27b0);
    --_color-light: rgba(156, 39, 176, 0.12);
  }
  :host([color="error"]) {
    --_color: var(--me-palette-error-main, #d32f2f);
    --_color-light: rgba(211, 47, 47, 0.12);
  }
  :host([color="success"]) {
    --_color: var(--me-palette-success-main, #2e7d32);
    --_color-light: rgba(46, 125, 50, 0.12);
  }
  :host([color="warning"]) {
    --_color: var(--me-palette-warning-main, #ed6c02);
    --_color-light: rgba(237, 108, 2, 0.12);
  }
  :host([color="info"]) {
    --_color: var(--me-palette-info-main, #0288d1);
    --_color-light: rgba(2, 136, 209, 0.12);
  }
  :host([size="small"]) { height: 24px; font-size: 0.75rem; }

  /* \u2500\u2500 FILLED \u2500\u2500 */
  .me-chip {
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    gap: 4px;
  }
  :host(:not([variant="outlined"])) .me-chip {
    background-color: var(--me-palette-action-selected, rgba(0,0,0,0.08));
    padding: 0 12px;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: inherit;
    width: 100%;
    height: 100%;
  }
  :host([clickable]:not([variant="outlined"])) .me-chip:hover {
    background-color: var(--me-palette-action-focus, rgba(0,0,0,0.12));
  }
  :host([color]:not([color="default"]):not([variant="outlined"])) .me-chip {
    background-color: var(--_color);
    color: #fff;
  }
  :host([color]:not([color="default"])[clickable]:not([variant="outlined"])) .me-chip:hover {
    filter: brightness(0.9);
  }

  /* \u2500\u2500 OUTLINED \u2500\u2500 */
  :host([variant="outlined"]) .me-chip {
    background-color: transparent;
    border: 1px solid var(--me-palette-action-disabled, rgba(0,0,0,0.26));
    padding: 0 11px;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: inherit;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  :host([color]:not([color="default"])[variant="outlined"]) .me-chip {
    border-color: var(--_color);
    color: var(--_color);
  }
  :host([clickable][variant="outlined"]) .me-chip:hover {
    background-color: var(--_color-light);
  }

  /* \u2500\u2500 DISABLED \u2500\u2500 */
  :host([disabled]) { opacity: 0.38; pointer-events: none; }

  /* \u2500\u2500 SIZE SMALL inner padding \u2500\u2500 */
  :host([size="small"]:not([variant="outlined"])) .me-chip { padding: 0 8px; }
  :host([size="small"][variant="outlined"]) .me-chip { padding: 0 7px; }

  /* \u2500\u2500 ICONS \u2500\u2500 */
  [hidden] { display: none !important; }
  .me-chip__icon-start,
  .me-chip__icon-end {
    display: inherit;
    font-size: 18px;
    width: 18px;
    height: 18px;
  }
  :host([size="small"]) .me-chip__icon-start,
  :host([size="small"]) .me-chip__icon-end { font-size: 16px; width: 16px; height: 16px; }

  /* \u2500\u2500 DELETE BUTTON \u2500\u2500 */
  .me-chip__delete {
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
  .me-chip__delete:hover { opacity: 1; background-color: var(--me-palette-action-focus, rgba(0,0,0,0.12)); }
  .me-chip__delete svg { width: 14px; height: 14px; fill: currentColor; display: block; }
  :host([size="small"]) .me-chip__delete { width: 16px; height: 16px; }
`);
var rippleSheet2 = new CSSStyleSheet();
rippleSheet2.replaceSync(`
  @keyframes me-ripple { to { transform: scale(1); opacity: 0; } }
  .me-ripple-wave {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    transform: scale(0);
    animation: me-ripple 550ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    background-color: currentColor;
    opacity: 0.3;
  }
`);
var chip_styles_default = sheet19;

// src/components/chip/chip.ts
var DELETE_ICON = `<svg viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>`;
var MEChip = class extends MEElement {
  static observedAttributes = ["variant", "color", "size", "label", "deletable", "clickable", "disabled"];
  _ripple = new RippleController();
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [chip_styles_default, rippleSheet2];
  }
  render() {
    const deletable = this.hasAttribute("deletable");
    const clickable = this.hasAttribute("clickable");
    const deleteBtn = deletable ? `<button class="me-chip__delete" aria-label="delete" tabindex="-1" type="button">${DELETE_ICON}</button>` : "";
    if (clickable) {
      this.setAttribute("role", "button");
      this.setAttribute("tabindex", "0");
    }
    this.shadow.innerHTML = `
      <div class="me-chip">
        <span class="me-chip__icon-start" hidden><slot name="icon"></slot></span>
        <span class="me-chip__label"><slot></slot></span>
        ${deleteBtn}
      </div>
    `;
    const iconSlot = this.shadow.querySelector('slot[name="icon"]');
    if (iconSlot) {
      const iconWrap = this.shadow.querySelector(".me-chip__icon-start");
      iconSlot.addEventListener("slotchange", () => {
        iconWrap.hidden = iconSlot.assignedNodes().length === 0;
      });
    }
    if (clickable) {
      const inner = this.shadow.querySelector(".me-chip");
      this._ripple.attach(inner);
    }
    if (deletable) {
      this.shadow.querySelector(".me-chip__delete")?.addEventListener("click", (e) => {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent("me-delete", { bubbles: true, composed: true }));
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
          this.dispatchEvent(new CustomEvent("me-delete", { bubbles: true, composed: true }));
        }
      }
    });
  }
};
customElements.define("me-chip", MEChip);

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
  :host([dense]) { --me-list-dense: 1; }
`);
var list_styles_default = sheet20;

// src/components/list/list.ts
var MEList = class extends MEElement {
  static observedAttributes = ["dense", "disablePadding"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [list_styles_default];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("me-list", MEList);

// src/components/list/list-item.styles.ts
var sheet21 = new CSSStyleSheet();
sheet21.replaceSync(`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: calc(8px - (4px * var(--me-list-dense, 0))) 16px;
    width: 100%;
    position: relative;
    text-align: left;
  }
  :host([disableGutters]) { padding-left: 0; padding-right: 0; }
  :host([disablePadding])  { padding: 0; }
  :host([alignItems="flex-start"]) { align-items: flex-start; }
  :host([divider]) {
    border-bottom: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
  }
`);
var list_item_styles_default = sheet21;

// src/components/list/list-item.ts
var MEListItem = class extends MEElement {
  static observedAttributes = ["disablePadding", "disableGutters", "divider", "alignItems"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [list_item_styles_default];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("me-list-item", MEListItem);

// src/components/list/list-item-button.styles.ts
var sheet22 = new CSSStyleSheet();
sheet22.replaceSync(`
  :host {
    display: block;
    width: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    outline: 0;
    border: 0;
    background: transparent;
    text-decoration: none;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    box-sizing: border-box;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  :host(:hover) {
    background-color: var(--me-palette-action-hover, rgba(0,0,0,0.08));
  }
  :host([selected]) {
    background-color: var(--me-palette-action-selected, rgba(0,0,0,0.08));
    color: var(--me-palette-primary-main, #1976d2);
  }
  :host([selected]:hover) {
    background-color: rgba(25, 118, 210, 0.12);
  }
  :host([disabled]) {
    opacity: 0.38;
    pointer-events: none;
  }
  :host([divider]) {
    border-bottom: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
  }

  .root {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: calc(8px - (4px * var(--me-list-dense, 0))) 16px;
    width: 100%;
    text-align: left;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 1rem;
  }
  :host([alignItems="flex-start"]) .root { align-items: flex-start; }
  :host([disableGutters]) .root { padding-left: 0; padding-right: 0; }

  slot[name="start"] {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
  }
  slot:not([name]) {
    display: flex;
    flex: 1;
    min-width: 0;
  }
`);
var rippleSheet3 = new CSSStyleSheet();
rippleSheet3.replaceSync(`
  @keyframes me-ripple { to { transform: scale(1); opacity: 0; } }
  .me-ripple-wave {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    transform: scale(0);
    animation: me-ripple 550ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    background-color: currentColor;
    opacity: 0.2;
  }
`);
var list_item_button_styles_default = sheet22;

// src/components/list/list-item-button.ts
var MEListItemButton = class extends MEElement {
  static observedAttributes = ["selected", "disabled", "divider", "alignItems", "disableGutters"];
  _ripple = new RippleController();
  constructor() {
    super({ mode: "open", delegatesFocus: true });
    this.shadow.adoptedStyleSheets = [list_item_button_styles_default, rippleSheet3];
  }
  render() {
    this.setAttribute("role", "button");
    if (this.hasAttribute("disabled")) this.setAttribute("tabindex", "-1");
    else this.setAttribute("tabindex", "0");
    this.shadow.innerHTML = `<div class="root"><slot name="start"></slot><slot></slot></div>`;
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
customElements.define("me-list-item-button", MEListItemButton);

// src/components/list/list-item-text.styles.ts
var sheet23 = new CSSStyleSheet();
sheet23.replaceSync(`
  :host {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin: 4px 0;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }
  :host([inset]) { padding-left: 56px; }

  .me-list-item-text__primary {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: var(--me-typography-fontWeightRegular, 400);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .me-list-item-text__secondary {
    font-size: 0.875rem;
    line-height: 1.43;
    font-weight: var(--me-typography-fontWeightRegular, 400);
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /* Dense */
  :host-context(me-list[dense]) .me-list-item-text__primary { font-size: 0.875rem; }
`);
var list_item_text_styles_default = sheet23;

// src/components/list/list-item-text.ts
var MEListItemText = class extends MEElement {
  static observedAttributes = ["primary", "secondary", "inset"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [list_item_text_styles_default];
  }
  render() {
    const primary = this.getAttribute("primary") ?? "";
    const secondary = this.getAttribute("secondary") ?? "";
    this.shadow.innerHTML = `
      <span class="me-list-item-text__primary">
        ${primary ? primary : '<slot name="primary"><slot></slot></slot>'}
      </span>
      ${secondary ? `<span class="me-list-item-text__secondary">${secondary}</span>` : '<slot name="secondary"></slot>'}
    `;
  }
};
customElements.define("me-list-item-text", MEListItemText);

// src/components/list/list-item-icon.styles.ts
var sheet24 = new CSSStyleSheet();
sheet24.replaceSync(`
  :host {
    display: inline-flex;
    min-width: 56px;
    flex-shrink: 0;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
  }
  :host([alignItems="flex-start"]) { margin-top: 8px; }
`);
var list_item_icon_styles_default = sheet24;

// src/components/list/list-item-icon.ts
var MEListItemIcon = class extends MEElement {
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [list_item_icon_styles_default];
  }
  render() {
    this.setAttribute("slot", "start");
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("me-list-item-icon", MEListItemIcon);

// src/components/table/table.styles.ts
var sheet25 = new CSSStyleSheet();
sheet25.replaceSync(`
  :host {
    display: table;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.875rem;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
  }
  :host([size="small"]) { font-size: 0.8125rem; }
  :host([stickyHeader]) { border-collapse: separate; }
`);
var table_styles_default = sheet25;

// src/components/table/table.ts
var METable = class extends MEElement {
  static observedAttributes = ["size", "stickyHeader"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [table_styles_default];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("me-table", METable);

// src/components/table/table-head.ts
var sheet26 = new CSSStyleSheet();
sheet26.replaceSync(`:host { display: table-header-group; }`);
var METableHead = class extends MEElement {
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet26];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("me-table-head", METableHead);

// src/components/table/table-body.ts
var sheet27 = new CSSStyleSheet();
sheet27.replaceSync(`:host { display: table-row-group; }`);
var METableBody = class extends MEElement {
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet27];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("me-table-body", METableBody);

// src/components/table/table-row.styles.ts
var sheet28 = new CSSStyleSheet();
sheet28.replaceSync(`
  :host {
    display: table-row;
    vertical-align: middle;
    outline: 0;
  }
  :host([hover]:hover) {
    background-color: var(--me-palette-action-hover, rgba(0,0,0,0.04));
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
var METableRow = class extends MEElement {
  static observedAttributes = ["selected", "hover"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [table_row_styles_default];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("me-table-row", METableRow);

// src/components/table/table-cell.styles.ts
var sheet29 = new CSSStyleSheet();
sheet29.replaceSync(`
  :host {
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
    text-align: left;
    padding: 16px;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.5;
    letter-spacing: 0;
  }

  /* head variant */
  :host([variant="head"]) {
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    font-weight: var(--me-typography-fontWeightMedium, 500);
    line-height: 1.5rem;
    background-color: var(--me-palette-background-paper, #fff);
    border-bottom: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
  }

  /* footer variant */
  :host([variant="footer"]) {
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    font-size: 0.75rem;
    border-top: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
    border-bottom: none;
  }

  /* align */
  :host([align="center"]) { text-align: center; }
  :host([align="right"])  { text-align: right; flex-direction: row-reverse; }
  :host([align="justify"]) { text-align: justify; }

  /* padding */
  :host([padding="checkbox"]) { width: 48px; padding: 0 0 0 4px; }
  :host([padding="none"])     { padding: 0; }

  /* size: small (via me-table[size=small] inherits --me-table-size) */
  :host-context(me-table[size="small"]) { padding: 6px 16px; }
`);
var table_cell_styles_default = sheet29;

// src/components/table/table-cell.ts
var METableCell = class extends MEElement {
  static observedAttributes = ["variant", "align", "padding"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [table_cell_styles_default];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("me-table-cell", METableCell);

// src/components/tooltip/tooltip.styles.ts
var sheet30 = new CSSStyleSheet();
sheet30.replaceSync(`
  :host {
    display: inline-flex;
    position: relative;
  }

  .me-tooltip__trigger {
    display: contents;
  }

  .me-tooltip__bubble {
    position: fixed;
    z-index: var(--me-zIndex-tooltip, 1500);
    padding: 4px 8px;
    border-radius: 4px;
    background-color: rgba(97, 97, 97, 0.92);
    color: #fff;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.6875rem;
    font-weight: var(--me-typography-fontWeightMedium, 500);
    line-height: 1.4em;
    letter-spacing: 0;
    max-width: 300px;
    word-wrap: break-word;
    pointer-events: none;
    white-space: pre-line;
    opacity: 0;
    transition: opacity 150ms cubic-bezier(0.4, 0, 1, 1);
  }
  .me-tooltip__bubble[data-show] {
    opacity: 1;
    transition: opacity 200ms cubic-bezier(0, 0, 0.2, 1) 100ms;
  }

  /* Arrow */
  .me-tooltip__arrow {
    position: absolute;
    width: 0;
    height: 0;
    display: none;
  }
  :host([arrow]) .me-tooltip__arrow { display: block; }

  /* Arrow shapes per placement */
  .me-tooltip__bubble[data-placement="top"] .me-tooltip__arrow {
    bottom: -4px; left: 50%; transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgba(97, 97, 97, 0.92);
  }
  .me-tooltip__bubble[data-placement="bottom"] .me-tooltip__arrow {
    top: -4px; left: 50%; transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid rgba(97, 97, 97, 0.92);
  }
  .me-tooltip__bubble[data-placement="left"] .me-tooltip__arrow {
    right: -4px; top: 50%; transform: translateY(-50%);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid rgba(97, 97, 97, 0.92);
  }
  .me-tooltip__bubble[data-placement="right"] .me-tooltip__arrow {
    left: -4px; top: 50%; transform: translateY(-50%);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid rgba(97, 97, 97, 0.92);
  }
`);
var tooltip_styles_default = sheet30;

// src/components/tooltip/tooltip.ts
var GAP = 8;
var METooltip = class extends MEElement {
  static observedAttributes = ["title", "placement", "arrow"];
  _bubble = null;
  _showTimeout = null;
  _hideTimeout = null;
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [tooltip_styles_default];
  }
  render() {
    const title = this.getAttribute("title") ?? "";
    this.shadow.innerHTML = `
      <span class="me-tooltip__trigger"><slot></slot></span>
      <div class="me-tooltip__bubble" role="tooltip">${title}<span class="me-tooltip__arrow"></span></div>
    `;
    this._bubble = this.shadow.querySelector(".me-tooltip__bubble");
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
    const trigger = this.shadow.querySelector(".me-tooltip__trigger");
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
customElements.define("me-tooltip", METooltip);

// src/components/alert/alert.styles.ts
var sheet31 = new CSSStyleSheet();
sheet31.replaceSync(`
  :host {
    display: flex;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 6px 16px;
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.43;
    width: 100%;
    --_color: #014361;
    --_bg: #e5f6fd;
    --_border: #29b6f6;
    --_icon-color: #0288d1;
  }

  /* \u2500\u2500 severity colours \u2500\u2500 */
  :host([severity="error"]) {
    --_color: #541313;
    --_bg: #fdeded;
    --_border: #ef5350;
    --_icon-color: #d32f2f;
  }
  :host([severity="warning"]) {
    --_color: #663c00;
    --_bg: #fff4e5;
    --_border: #ff9800;
    --_icon-color: #ed6c02;
  }
  :host([severity="success"]) {
    --_color: #1e4620;
    --_bg: #edf7ed;
    --_border: #4caf50;
    --_icon-color: #2e7d32;
  }
  :host([severity="info"]), :host(:not([severity])) {
    --_color: #014361;
    --_bg: #e5f6fd;
    --_border: #29b6f6;
    --_icon-color: #0288d1;
  }

  /* \u2500\u2500 variants \u2500\u2500 */
  :host(:not([variant="filled"]):not([variant="outlined"])) {
    background-color: var(--_bg);
    color: var(--_color);
  }
  :host([variant="filled"]) {
    background-color: var(--_icon-color);
    color: #fff;
    --_color: #fff;
  }
  :host([variant="outlined"]) {
    background-color: transparent;
    color: var(--_color);
    border: 1px solid var(--_border);
  }

  .me-alert__icon {
    display: flex;
    margin-right: 12px;
    padding: 7px 0;
    opacity: 0.9;
    color: var(--_icon-color);
    flex-shrink: 0;
  }
  :host([variant="filled"]) .me-alert__icon { color: #fff; }

  .me-alert__icon svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
  }

  .me-alert__content {
    padding: 8px 0;
    flex: 1;
    min-width: 0;
  }

  .me-alert__title {
    font-weight: 600;
    margin-bottom: 4px;
    display: block;
  }
  .me-alert__title:empty { display: none; }

  .me-alert__message { display: block; }

  .me-alert__action {
    display: flex;
    align-items: flex-start;
    padding: 4px 0 0 16px;
    margin-left: auto;
    margin-right: -8px;
  }
  .me-alert__action:empty { display: none; }

  .me-alert__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    opacity: 0.6;
    padding: 4px;
    border-radius: 50%;
    transition: background-color 150ms, opacity 150ms;
    flex-shrink: 0;
  }
  .me-alert__close:hover { opacity: 1; background: rgba(0,0,0,0.08); }
  .me-alert__close svg { width: 18px; height: 18px; fill: currentColor; display: block; }
  :host(:not([closable])) .me-alert__close { display: none; }
`);
var alert_styles_default = sheet31;

// src/components/alert/alert.ts
var ICONS = {
  error: `<svg viewBox="0 0 24 24"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`,
  warning: `<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`,
  success: `<svg viewBox="0 0 24 24"><path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"/></svg>`,
  info: `<svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`
};
var CLOSE_ICON = `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
var MEAlert = class extends MEElement {
  static observedAttributes = ["severity", "variant", "title", "closable"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [alert_styles_default];
  }
  render() {
    const severity = this.getAttribute("severity") ?? "info";
    const title = this.getAttribute("title") ?? "";
    this.shadow.innerHTML = `
      <div class="me-alert__icon">${ICONS[severity] ?? ICONS.info}</div>
      <div class="me-alert__content">
        <span class="me-alert__title">${title}</span>
        <span class="me-alert__message"><slot></slot></span>
      </div>
      <div class="me-alert__action">
        <slot name="action"></slot>
        <button class="me-alert__close" aria-label="Close">${CLOSE_ICON}</button>
      </div>
    `;
    this.shadow.querySelector(".me-alert__close")?.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("me-close", { bubbles: true, composed: true }));
    });
  }
};
customElements.define("me-alert", MEAlert);

// src/components/progress/progress.styles.ts
var circularSheet = new CSSStyleSheet();
circularSheet.replaceSync(`
  :host {
    display: inline-flex;
    color: var(--me-palette-primary-main, #1976d2);
  }
  :host([color="secondary"]) { color: var(--me-palette-secondary-main, #9c27b0); }
  :host([color="error"])     { color: var(--me-palette-error-main, #d32f2f); }
  :host([color="success"])   { color: var(--me-palette-success-main, #2e7d32); }
  :host([color="warning"])   { color: var(--me-palette-warning-main, #ed6c02); }
  :host([color="info"])      { color: var(--me-palette-info-main, #0288d1); }
  :host([color="inherit"])   { color: inherit; }

  .me-circular-progress {
    display: inline-block;
  }

  /* indeterminate */
  :host(:not([variant="determinate"])) .me-circular-progress {
    animation: me-circular-rotate 1.4s linear infinite;
  }
  :host(:not([variant="determinate"])) .me-circular-progress__circle {
    stroke-dasharray: 80px, 200px;
    stroke-dashoffset: 0;
    animation: me-circular-dash 1.4s ease-in-out infinite;
  }

  .me-circular-progress__circle {
    stroke: currentColor;
    stroke-linecap: round;
  }

  @keyframes me-circular-rotate {
    0%   { transform-origin: 50% 50%; }
    100% { transform: rotate(360deg); }
  }
  @keyframes me-circular-dash {
    0%   { stroke-dasharray: 1px, 200px; stroke-dashoffset: 0; }
    50%  { stroke-dasharray: 100px, 200px; stroke-dashoffset: -15px; }
    100% { stroke-dasharray: 100px, 200px; stroke-dashoffset: -125px; }
  }
`);
var linearSheet = new CSSStyleSheet();
linearSheet.replaceSync(`
  :host {
    display: block;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 4px;
    background-color: rgba(25, 118, 210, 0.2);
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    color: var(--me-palette-primary-main, #1976d2);
  }
  :host([color="secondary"]) { color: var(--me-palette-secondary-main, #9c27b0); background-color: rgba(156,39,176,0.2); }
  :host([color="error"])     { color: var(--me-palette-error-main, #d32f2f); background-color: rgba(211,47,47,0.2); }
  :host([color="success"])   { color: var(--me-palette-success-main, #2e7d32); background-color: rgba(46,125,50,0.2); }
  :host([color="warning"])   { color: var(--me-palette-warning-main, #ed6c02); background-color: rgba(237,108,2,0.2); }
  :host([color="info"])      { color: var(--me-palette-info-main, #0288d1); background-color: rgba(2,136,209,0.2); }

  .me-linear-progress__bar1,
  .me-linear-progress__bar2 {
    width: 100%;
    position: absolute;
    left: 0; top: 0; bottom: 0;
    background-color: currentColor;
    transform-origin: left;
    transition: transform 0.2s linear;
  }

  /* indeterminate \u2014 width: auto lets left/right keyframes control the visual bar width */
  :host([variant="indeterminate"]) .me-linear-progress__bar1,
  :host(:not([variant])) .me-linear-progress__bar1 {
    width: auto;
    animation: me-linear-indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  }
  :host([variant="indeterminate"]) .me-linear-progress__bar2,
  :host(:not([variant])) .me-linear-progress__bar2 {
    width: auto;
    animation: me-linear-indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
  }

  /* query (reverse) */
  :host([variant="query"]) {
    transform: rotate(180deg);
  }
  :host([variant="query"]) .me-linear-progress__bar1 {
    width: auto;
    animation: me-linear-indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  }
  :host([variant="query"]) .me-linear-progress__bar2 {
    width: auto;
    animation: me-linear-indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
  }

  /* buffer */
  :host([variant="buffer"]) .me-linear-progress__bar1 {
    animation: none;
  }
  :host([variant="buffer"]) .me-linear-progress__bar2 {
    background-color: currentColor;
    opacity: 0.4;
    animation: none;
  }
  :host([variant="buffer"]) .me-linear-progress__dashed {
    position: absolute;
    left: 0; top: 0; right: 0; bottom: 0;
    background-image: radial-gradient(currentColor 0%, currentColor 16%, transparent 42%);
    background-size: 10px 10px;
    background-position: 0 -23px;
    opacity: 0.4;
    animation: me-linear-buffer-dashes 3s infinite linear;
  }

  @keyframes me-linear-indeterminate1 {
    0%   { left: -35%;  right: 100%; }
    60%  { left: 100%;  right: -90%; }
    100% { left: 100%;  right: -90%; }
  }
  @keyframes me-linear-indeterminate2 {
    0%   { left: -200%; right: 100%; }
    60%  { left: 107%;  right: -8%;  }
    100% { left: 107%;  right: -8%;  }
  }
  @keyframes me-linear-buffer-dashes {
    0%   { background-position: 0 -23px; }
    100% { background-position: 10px -23px; }
  }
`);

// src/components/progress/circular-progress.ts
var SIZE_DEFAULT = 40;
var THICKNESS = 3.6;
var MECircularProgress = class extends MEElement {
  static observedAttributes = ["variant", "value", "size", "color"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [circularSheet];
  }
  render() {
    const size = Number(this.getAttribute("size") ?? SIZE_DEFAULT);
    const variant = this.getAttribute("variant") ?? "indeterminate";
    const value = Math.min(100, Math.max(0, Number(this.getAttribute("value") ?? 0)));
    const radius = (size - THICKNESS) / 2;
    const circumference = 2 * Math.PI * radius;
    const center = size / 2;
    let circleStyle = "";
    if (variant === "determinate") {
      const offset = circumference - value / 100 * circumference;
      circleStyle = `stroke-dasharray: ${circumference}px; stroke-dashoffset: ${offset}px;`;
    }
    this.setAttribute("role", "progressbar");
    if (variant === "determinate") {
      this.setAttribute("aria-valuenow", String(value));
      this.setAttribute("aria-valuemin", "0");
      this.setAttribute("aria-valuemax", "100");
    }
    this.shadow.innerHTML = `
      <svg class="me-circular-progress"
           width="${size}" height="${size}"
           viewBox="${center - size / 2} ${center - size / 2} ${size} ${size}">
        <circle
          class="me-circular-progress__circle"
          cx="${center}" cy="${center}" r="${radius}"
          fill="none"
          stroke-width="${THICKNESS}"
          style="${circleStyle}"
        />
      </svg>
    `;
  }
};
customElements.define("me-circular-progress", MECircularProgress);

// src/components/progress/linear-progress.ts
var MELinearProgress = class extends MEElement {
  static observedAttributes = ["variant", "value", "value-buffer", "color"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [linearSheet];
  }
  render() {
    const variant = this.getAttribute("variant") ?? "indeterminate";
    const value = Math.min(100, Math.max(0, Number(this.getAttribute("value") ?? 0)));
    const buffer = Math.min(100, Math.max(0, Number(this.getAttribute("value-buffer") ?? 0)));
    this.setAttribute("role", "progressbar");
    if (variant === "determinate" || variant === "buffer") {
      this.setAttribute("aria-valuenow", String(value));
      this.setAttribute("aria-valuemin", "0");
      this.setAttribute("aria-valuemax", "100");
    }
    let bar1Style = "";
    let bar2Style = "";
    const dashedEl = variant === "buffer" ? `<span class="me-linear-progress__dashed"></span>` : "";
    if (variant === "determinate") {
      bar1Style = `transform: scaleX(${value / 100});`;
      bar2Style = "display: none;";
    } else if (variant === "buffer") {
      bar1Style = `transform: scaleX(${value / 100});`;
      bar2Style = `transform: scaleX(${buffer / 100});`;
    }
    this.shadow.innerHTML = `
      ${dashedEl}
      <span class="me-linear-progress__bar1" style="${bar1Style}"></span>
      <span class="me-linear-progress__bar2" style="${bar2Style}"></span>
    `;
  }
};
customElements.define("me-linear-progress", MELinearProgress);

// src/components/skeleton/skeleton.styles.ts
var sheet32 = new CSSStyleSheet();
sheet32.replaceSync(`
  :host {
    display: block;
    background-color: rgba(0, 0, 0, 0.11);
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    height: 1.2em;
  }

  /* variants */
  :host([variant="circular"])    { border-radius: 50%; width: 40px; height: 40px; }
  :host([variant="rectangular"]) { border-radius: 0; }
  :host([variant="rounded"])     { border-radius: calc(var(--me-shape-borderRadius, 4) * 1px); }
  :host([variant="text"])        {
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    height: auto;
    transform: scale(1, 0.6);
    transform-origin: 0 60%;
  }
  :host([variant="text"])::before {
    content: "\\00a0";
  }

  /* pulse animation (default) */
  :host(:not([animation="wave"]):not([animation="false"])) {
    animation: me-skeleton-pulse 2s ease-in-out 0.5s infinite;
  }
  /* wave animation */
  :host([animation="wave"]) {
    overflow: hidden;
    position: relative;
  }
  :host([animation="wave"])::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255,255,255,0.4),
      transparent
    );
    animation: me-skeleton-wave 2s linear 0.5s infinite;
    transform: translateX(-100%);
  }

  @keyframes me-skeleton-pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.4; }
  }
  @keyframes me-skeleton-wave {
    0%   { transform: translateX(-100%); }
    50%  { transform: translateX(100%); }
    100% { transform: translateX(100%); }
  }
`);
var skeleton_styles_default = sheet32;

// src/components/skeleton/skeleton.ts
var MESkeleton = class extends MEElement {
  static observedAttributes = ["variant", "width", "height", "animation"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [skeleton_styles_default];
  }
  render() {
    const width = this.getAttribute("width");
    const height = this.getAttribute("height");
    const styles = [];
    if (width) styles.push(`width: ${width};`);
    if (height) styles.push(`height: ${height};`);
    if (styles.length) {
      this.style.cssText = styles.join(" ");
    }
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("me-skeleton", MESkeleton);

// src/components/backdrop/backdrop.styles.ts
var sheet33 = new CSSStyleSheet();
sheet33.replaceSync(`
  :host {
    position: fixed;
    inset: 0;
    z-index: var(--me-zIndex-modal, 1300);
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-tap-highlight-color: transparent;
  }
  :host([open]) {
    opacity: 1;
    pointer-events: auto;
  }
  :host([invisible]) {
    background-color: transparent;
  }
`);
var backdrop_styles_default = sheet33;

// src/components/backdrop/backdrop.ts
var MEBackdrop = class extends MEElement {
  static observedAttributes = ["open", "invisible"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [backdrop_styles_default];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
  addEventListeners() {
    this.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("me-close", { bubbles: true, composed: true }));
    });
  }
};
customElements.define("me-backdrop", MEBackdrop);

// src/components/dialog/dialog.styles.ts
var backdropSheet = new CSSStyleSheet();
backdropSheet.replaceSync(`
  .me-dialog__backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: var(--me-zIndex-modal, 1300);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  :host([open]) .me-dialog__backdrop {
    opacity: 1;
  }
  :host(:not([open])) .me-dialog__backdrop {
    pointer-events: none;
  }
`);
var dialogSheet = new CSSStyleSheet();
dialogSheet.replaceSync(`
  :host {
    display: contents;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }

  .me-dialog__backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: var(--me-zIndex-modal, 1300);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  }
  :host([open]) .me-dialog__backdrop {
    opacity: 1;
    pointer-events: auto;
  }

  .me-dialog__paper {
    background-color: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    box-shadow: var(--me-shadows-24, 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12));
    display: flex;
    flex-direction: column;
    max-height: calc(100% - 64px);
    max-width: 600px;
    width: calc(100% - 64px);
    margin: 32px;
    position: relative;
    overflow-y: auto;
    transform: scale(0.8);
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms;
    opacity: 0;
  }
  :host([open]) .me-dialog__paper {
    transform: scale(1);
    opacity: 1;
  }

  /* maxWidth variants */
  :host([max-width="xs"]) .me-dialog__paper  { max-width: 444px; }
  :host([max-width="sm"]) .me-dialog__paper  { max-width: 600px; }
  :host([max-width="md"]) .me-dialog__paper  { max-width: 960px; }
  :host([max-width="lg"]) .me-dialog__paper  { max-width: 1280px; }
  :host([max-width="xl"]) .me-dialog__paper  { max-width: 1920px; }
  :host([full-width]) .me-dialog__paper      { width: 100%; }
  :host([full-screen]) .me-dialog__paper {
    margin: 0;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
  }
`);
var titleSheet = new CSSStyleSheet();
titleSheet.replaceSync(`
  :host {
    display: block;
    padding: 16px 24px;
    flex-shrink: 0;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
  }
`);
var contentSheet = new CSSStyleSheet();
contentSheet.replaceSync(`
  :host {
    display: block;
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 8px 24px 20px;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 1rem;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
  }
  :host([dividers]) {
    padding: 16px 24px;
    border-top: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
    border-bottom: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
  }
`);
var actionsSheet = new CSSStyleSheet();
actionsSheet.replaceSync(`
  :host {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 8px;
    flex-shrink: 0;
    gap: 8px;
  }
  :host([disable-spacing]) {
    gap: 0;
    padding: 0;
  }
`);

// src/components/dialog/dialog.ts
var FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(", ");
var MEDialog = class extends MEElement {
  static observedAttributes = ["open", "full-width", "full-screen", "max-width"];
  _previousFocus = null;
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [dialogSheet];
  }
  render() {
    this.shadow.innerHTML = `
      <div class="me-dialog__backdrop" part="backdrop">
        <div class="me-dialog__paper" role="dialog" aria-modal="true" part="paper">
          <slot></slot>
        </div>
      </div>
    `;
    this.shadow.querySelector(".me-dialog__backdrop")?.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        this.dispatchEvent(new CustomEvent("me-close", {
          detail: { reason: "backdropClick" },
          bubbles: true,
          composed: true
        }));
      }
    });
  }
  addEventListeners() {
    this.addEventListener("keydown", (e) => {
      if (!this.hasAttribute("open")) return;
      if (e.key === "Escape") {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent("me-close", {
          detail: { reason: "escapeKeyDown" },
          bubbles: true,
          composed: true
        }));
      }
      if (e.key === "Tab") this._trapFocus(e);
    });
  }
  onAttributeChanged(name) {
    if (name === "open") {
      if (this.hasAttribute("open")) {
        this._previousFocus = document.activeElement;
        requestAnimationFrame(() => this._focusFirst());
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
        if (this._previousFocus instanceof HTMLElement) {
          this._previousFocus.focus();
        }
      }
    }
  }
  _getFocusable() {
    const paper = this.shadow.querySelector(".me-dialog__paper");
    if (!paper) return [];
    const fromPaper = Array.from(paper.querySelectorAll(FOCUSABLE));
    const slot = paper.querySelector("slot");
    const slotted = slot?.assignedElements({ flatten: true }) ?? [];
    const fromSlotted = slotted.flatMap(
      (el) => [el, ...el.querySelectorAll(FOCUSABLE)]
    ).filter((el) => el instanceof HTMLElement && el.matches(FOCUSABLE));
    return [...fromPaper, ...fromSlotted];
  }
  _focusFirst() {
    const els = this._getFocusable();
    (els[0] ?? this.shadow.querySelector(".me-dialog__paper"))?.focus();
  }
  _trapFocus(e) {
    const els = this._getFocusable();
    if (!els.length) return;
    const first = els[0];
    const last = els[els.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
};
customElements.define("me-dialog", MEDialog);

// src/components/dialog/dialog-sub.ts
var MEDialogTitle = class extends MEElement {
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [titleSheet];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
var MEDialogContent = class extends MEElement {
  static observedAttributes = ["dividers"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [contentSheet];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
var MEDialogActions = class extends MEElement {
  static observedAttributes = ["disable-spacing"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [actionsSheet];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("me-dialog-title", MEDialogTitle);
customElements.define("me-dialog-content", MEDialogContent);
customElements.define("me-dialog-actions", MEDialogActions);

// src/components/snackbar/snackbar.styles.ts
var sheet34 = new CSSStyleSheet();
sheet34.replaceSync(`
  :host {
    position: fixed;
    z-index: var(--me-zIndex-snackbar, 1400);
    display: flex;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(200%);
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1),
                opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    pointer-events: none;
    min-width: 288px;
    max-width: 568px;
  }

  /* anchor-origin positions */
  :host([anchor-origin="bottom-left"])   { left: 24px;  right: auto; transform: translateX(0) translateY(200%); }
  :host([anchor-origin="bottom-right"])  { right: 24px; left: auto;  transform: translateX(0) translateY(200%); }
  :host([anchor-origin="top-center"])    { top: 24px; bottom: auto; left: 50%; transform: translateX(-50%) translateY(-200%); }
  :host([anchor-origin="top-left"])      { top: 24px; bottom: auto; left: 24px; right: auto; transform: translateX(0) translateY(-200%); }
  :host([anchor-origin="top-right"])     { top: 24px; bottom: auto; right: 24px; left: auto; transform: translateX(0) translateY(-200%); }

  :host([open]) {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0) !important;
  }
  :host([anchor-origin="bottom-left"][open]),
  :host([anchor-origin="bottom-right"][open]),
  :host([anchor-origin="top-left"][open]),
  :host([anchor-origin="top-right"][open]) {
    transform: translateX(0) translateY(0) !important;
  }

  .me-snackbar__content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 6px 16px;
    min-width: 288px;
    background-color: #323232;
    color: rgba(255,255,255,0.87);
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
                0px 6px 10px 0px rgba(0,0,0,0.14),
                0px 1px 18px 0px rgba(0,0,0,0.12);
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.43;
    gap: 8px;
  }

  .me-snackbar__message {
    flex: 1;
    padding: 8px 0;
  }

  .me-snackbar__action {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: -8px;
  }
  .me-snackbar__action:empty { display: none; }
`);
var snackbar_styles_default = sheet34;

// src/components/snackbar/snackbar.ts
var MESnackbar = class extends MEElement {
  static observedAttributes = ["open", "auto-hide-duration", "anchor-origin", "message"];
  _timer = null;
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [snackbar_styles_default];
  }
  render() {
    this.shadow.innerHTML = `
      <div class="me-snackbar__content" part="content">
        <span class="me-snackbar__message" part="message">
          <slot></slot>
        </span>
        <span class="me-snackbar__action" part="action">
          <slot name="action"></slot>
        </span>
      </div>
    `;
  }
  onAttributeChanged(name) {
    if (name === "open") {
      if (this.hasAttribute("open")) {
        this._startAutoHide();
      } else {
        this._clearTimer();
      }
    }
  }
  _startAutoHide() {
    this._clearTimer();
    const duration = parseInt(this.getAttribute("auto-hide-duration") ?? "0", 10);
    if (duration > 0) {
      this._timer = setTimeout(() => {
        this.removeAttribute("open");
        this.dispatchEvent(new CustomEvent("me-close", {
          detail: { reason: "timeout" },
          bubbles: true,
          composed: true
        }));
      }, duration);
    }
  }
  _clearTimer() {
    if (this._timer !== null) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  }
  disconnectedCallback() {
    this._clearTimer();
  }
};
customElements.define("me-snackbar", MESnackbar);

// src/components/app-bar/app-bar.styles.ts
var sheet35 = new CSSStyleSheet();
sheet35.replaceSync(`
  :host {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--me-zIndex-appBar, 1100);
    background-color: var(--me-palette-primary-main, #1976d2);
    color: var(--me-palette-primary-contrastText, #fff);
    box-shadow: var(--me-shadows-4, 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12));
    transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1);
  }

  :host([position="absolute"])  { position: absolute; }
  :host([position="sticky"])    { position: sticky; top: 0; }
  :host([position="static"])    { position: static; box-shadow: none; }
  :host([position="relative"])  { position: relative; box-shadow: none; }

  :host([color="default"]) {
    background-color: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
  }
  :host([color="secondary"]) {
    background-color: var(--me-palette-secondary-main, #9c27b0);
    color: var(--me-palette-secondary-contrastText, #fff);
  }
  :host([color="inherit"]) { background-color: inherit; color: inherit; }
  :host([color="transparent"]) { background-color: transparent; color: inherit; box-shadow: none; }

  :host([elevation="0"]) { box-shadow: none; }
  :host([elevation="1"]) { box-shadow: var(--me-shadows-1); }
  :host([elevation="2"]) { box-shadow: var(--me-shadows-2); }
`);
var app_bar_styles_default = sheet35;

// src/components/app-bar/app-bar.ts
var MEAppBar = class extends MEElement {
  static observedAttributes = ["position", "color", "elevation"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [app_bar_styles_default];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("me-app-bar", MEAppBar);

// src/components/toolbar/toolbar.styles.ts
var sheet36 = new CSSStyleSheet();
sheet36.replaceSync(`
  :host {
    display: flex;
    align-items: center;
    position: relative;
    min-height: 56px;
    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
    width: 100%;
  }

  @media (min-width: 600px) {
    :host { min-height: 64px; padding-left: 24px; padding-right: 24px; }
  }

  :host([variant="dense"]) { min-height: 48px; }
  :host([disable-gutters]) { padding-left: 0; padding-right: 0; }
`);
var toolbar_styles_default = sheet36;

// src/components/toolbar/toolbar.ts
var METoolbar = class extends MEElement {
  static observedAttributes = ["variant", "disable-gutters"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [toolbar_styles_default];
  }
  render() {
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("me-toolbar", METoolbar);

// src/components/tabs/tabs.styles.ts
var sheet37 = new CSSStyleSheet();
sheet37.replaceSync(`
  :host {
    display: flex;
    overflow: hidden;
    min-height: 48px;
    --_indicator-color: var(--me-palette-primary-main, #1976d2);
  }

  :host([indicator-color="secondary"]) {
    --_indicator-color: var(--me-palette-secondary-main, #9c27b0);
  }

  :host([indicator-color="inherit"]) {
    --_indicator-color: currentColor;
  }

  .me-tabs__scroller {
    position: relative;
    display: flex;
    flex: 1;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
  }
  .me-tabs__scroller::-webkit-scrollbar { display: none; }

  .me-tabs__flex {
    display: flex;
    flex-direction: row;
  }

  :host([variant="fullWidth"]) .me-tabs__flex {
    width: 100%;
  }
  :host([variant="fullWidth"]) ::slotted(me-tab) {
    flex: 1;
  }

  :host([centered]) .me-tabs__flex {
    margin: 0 auto;
  }

  .me-tabs__indicator {
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: var(--_indicator-color);
    transition: left 300ms cubic-bezier(0.4,0,0.2,1),
                width 300ms cubic-bezier(0.4,0,0.2,1);
    will-change: left, width;
  }
`);
var tabs_styles_default = sheet37;

// src/components/tabs/tabs.ts
var METabs = class extends MEElement {
  static observedAttributes = ["value", "variant", "centered", "indicator-color"];
  _resizeObserver = null;
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [tabs_styles_default];
  }
  get value() {
    return this.getAttribute("value") ?? "";
  }
  set value(v) {
    this.setAttribute("value", v);
    this._syncSelected();
    this._updateIndicator();
    this.dispatchEvent(new CustomEvent("me-change", {
      detail: { value: v },
      bubbles: true,
      composed: true
    }));
  }
  render() {
    this.setAttribute("role", "tablist");
    this.shadow.innerHTML = `
      <div class="me-tabs__scroller">
        <div class="me-tabs__flex">
          <slot></slot>
        </div>
        <span class="me-tabs__indicator"></span>
      </div>
    `;
    const slot = this.shadow.querySelector("slot");
    slot.addEventListener("slotchange", () => {
      this._syncSelected();
      this._updateIndicator();
    });
    this._resizeObserver?.disconnect();
    this._resizeObserver = new ResizeObserver(() => this._updateIndicator());
    this._resizeObserver.observe(this);
  }
  addEventListeners() {
    this.addEventListener("me-tab-select", this._onTabSelect);
    this.addEventListener("keydown", this._onKeyDown);
  }
  cleanup() {
    this.removeEventListener("me-tab-select", this._onTabSelect);
    this.removeEventListener("keydown", this._onKeyDown);
    this._resizeObserver?.disconnect();
    this._resizeObserver = null;
  }
  _getTabs() {
    const slot = this.shadow.querySelector("slot");
    return (slot?.assignedElements() ?? []).filter(
      (el) => el.tagName === "ME-TAB"
    );
  }
  _syncSelected() {
    const value = this.getAttribute("value");
    const tabs = this._getTabs();
    tabs.forEach((tab, i) => {
      const tabValue = tab.getAttribute("value") ?? String(i);
      const isSelected = tabValue === value;
      tab.toggleAttribute("selected", isSelected);
      tab.setAttribute("tabindex", isSelected ? "0" : "-1");
      tab.style.setProperty(
        "--_indicator-color",
        `var(--me-palette-${this.getAttribute("indicator-color") ?? "primary"}-main, #1976d2)`
      );
    });
  }
  _updateIndicator() {
    const value = this.getAttribute("value");
    const tabs = this._getTabs();
    const indicator = this.shadow.querySelector(".me-tabs__indicator");
    const scroller = this.shadow.querySelector(".me-tabs__scroller");
    if (!indicator || !scroller) return;
    const selectedTab = tabs.find((tab, i) => {
      return (tab.getAttribute("value") ?? String(i)) === value;
    });
    if (!selectedTab) {
      indicator.style.left = "0";
      indicator.style.width = "0";
      return;
    }
    const scrollerRect = scroller.getBoundingClientRect();
    const tabRect = selectedTab.getBoundingClientRect();
    indicator.style.left = `${tabRect.left - scrollerRect.left + scroller.scrollLeft}px`;
    indicator.style.width = `${tabRect.width}px`;
  }
  _onTabSelect = (e) => {
    const newValue = e.detail.value;
    if (newValue === this.getAttribute("value")) return;
    this.setAttribute("value", newValue);
    this._syncSelected();
    this._updateIndicator();
    this.dispatchEvent(new CustomEvent("me-change", {
      detail: { value: newValue },
      bubbles: true,
      composed: true
    }));
  };
  _onKeyDown = (e) => {
    const tabs = this._getTabs().filter((t) => !t.hasAttribute("disabled"));
    if (!tabs.length) return;
    const value = this.getAttribute("value");
    const currentIdx = tabs.findIndex((t, i) => (t.getAttribute("value") ?? String(i)) === value);
    let nextIdx = currentIdx;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      nextIdx = (currentIdx + 1) % tabs.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      nextIdx = (currentIdx - 1 + tabs.length) % tabs.length;
    } else if (e.key === "Home") {
      nextIdx = 0;
    } else if (e.key === "End") {
      nextIdx = tabs.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    const nextTab = tabs[nextIdx];
    const nextValue = nextTab.getAttribute("value") ?? String(nextIdx);
    this.value = nextValue;
    nextTab.focus();
  };
};
customElements.define("me-tabs", METabs);

// src/components/tabs/tab.styles.ts
var sheet38 = new CSSStyleSheet();
sheet38.replaceSync(`
  :host {
    display: inline-flex;
    flex-shrink: 0;
    outline: 0;
  }

  .me-tab {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    background: transparent;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    padding: 12px 16px;
    min-width: 90px;
    max-width: 360px;
    min-height: 48px;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 0.875rem;
    font-weight: var(--me-typography-fontWeightMedium, 500);
    line-height: 1.25;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    color: inherit;
    opacity: 0.7;
    transition: color 200ms, opacity 200ms;
    white-space: nowrap;
  }

  :host([selected]) .me-tab {
    opacity: 1;
  }

  :host([disabled]) .me-tab {
    opacity: 0.38;
    cursor: default;
    pointer-events: none;
  }

  .me-tab:focus-visible {
    background-color: var(--me-palette-action-focus, rgba(0,0,0,0.12));
    outline: none;
  }

  .me-tab__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    width: 24px;
    height: 24px;
  }
  .me-tab__icon [hidden] { display: none !important; }
`);
var tab_styles_default = sheet38;

// src/components/tabs/tab.ts
var METab = class extends MEElement {
  static observedAttributes = ["value", "label", "disabled", "selected", "icon"];
  _ripple = new RippleController();
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [tab_styles_default, rippleSheet];
  }
  render() {
    const label = this.getAttribute("label") ?? "";
    const icon = this.getAttribute("icon") ?? "";
    const disabled = this.hasAttribute("disabled");
    const selected = this.hasAttribute("selected");
    this.setAttribute("role", "tab");
    this.setAttribute("aria-selected", String(selected));
    this.setAttribute("tabindex", disabled ? "-1" : selected ? "0" : "-1");
    this.shadow.innerHTML = `
      <button class="me-tab" ${disabled ? "disabled" : ""} tabindex="-1">
        ${icon ? `<span class="me-tab__icon">${icon}</span>` : ""}
        ${label ? label : "<slot></slot>"}
      </button>
    `;
    const btn = this.shadow.querySelector(".me-tab");
    if (btn) this._ripple.attach(btn);
  }
  cleanup() {
    this._ripple.detach();
  }
  addEventListeners() {
    this.addEventListener("click", this._onClick);
    this.addEventListener("keydown", this._onKeyDown);
  }
  _onClick = (e) => {
    if (this.hasAttribute("disabled")) return;
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent("me-tab-select", {
      detail: { value: this.getAttribute("value") ?? this.getAttribute("label") ?? "" },
      bubbles: true,
      composed: true
    }));
  };
  _onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this._onClick(e);
    }
  };
};
customElements.define("me-tab", METab);

// src/components/menu/menu.styles.ts
var sheet39 = new CSSStyleSheet();
sheet39.replaceSync(`
  :host {
    display: contents;
  }

  /* Backdrop */
  .me-menu__backdrop {
    position: fixed;
    inset: 0;
    z-index: var(--me-zIndex-modal, 1300);
    background: transparent;
  }

  /* Paper */
  .me-menu__paper {
    position: fixed;
    z-index: calc(var(--me-zIndex-modal, 1300) + 1);
    min-width: 120px;
    max-width: calc(100vw - 32px);
    max-height: calc(100vh - 32px);
    overflow-y: auto;
    overflow-x: hidden;
    background-color: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    box-shadow: var(--me-shadows-8,
      0px 5px 5px -3px rgba(0,0,0,0.2),
      0px 8px 10px 1px rgba(0,0,0,0.14),
      0px 3px 14px 2px rgba(0,0,0,0.12));
    outline: 0;
    padding: 8px 0;
    transform-origin: top left;
    transition: opacity 200ms cubic-bezier(0.4,0,0.2,1),
                transform 200ms cubic-bezier(0.4,0,0.2,1);
  }

  :host(:not([open])) .me-menu__backdrop,
  :host(:not([open])) .me-menu__paper {
    display: none;
  }
`);
var menu_styles_default = sheet39;

// src/components/menu/menu.ts
var MEMenu = class extends MEElement {
  static observedAttributes = ["open"];
  _anchorEl = null;
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [menu_styles_default];
  }
  get open() {
    return this.hasAttribute("open");
  }
  set open(v) {
    v ? this.setAttribute("open", "") : this.removeAttribute("open");
  }
  /** Set the element to anchor the menu position to. */
  set anchorEl(el) {
    this._anchorEl = el;
    if (this.hasAttribute("open")) this._positionMenu();
  }
  render() {
    if (this.shadow.querySelector(".me-menu__paper")) return;
    this.shadow.innerHTML = `
      <div class="me-menu__backdrop" part="backdrop"></div>
      <div class="me-menu__paper" role="menu" tabindex="-1" part="paper">
        <slot></slot>
      </div>
    `;
    this.shadow.querySelector(".me-menu__backdrop")?.addEventListener("click", this._closeMenu);
  }
  addEventListeners() {
    this.addEventListener("me-menu-item-click", this._onItemClick);
    this.addEventListener("keydown", this._onKeyDown);
  }
  cleanup() {
    this.removeEventListener("me-menu-item-click", this._onItemClick);
    this.removeEventListener("keydown", this._onKeyDown);
  }
  onAttributeChanged(name, _old, newVal) {
    if (name === "open" && newVal !== null) {
      requestAnimationFrame(() => {
        this._positionMenu();
        this._focusFirst();
      });
    }
  }
  _positionMenu() {
    const paper = this.shadow.querySelector(".me-menu__paper");
    if (!paper) return;
    const anchor = this._anchorEl ?? (this.getAttribute("anchor-el") ? document.querySelector(this.getAttribute("anchor-el")) : null);
    if (anchor) {
      const rect = anchor.getBoundingClientRect();
      let top = rect.bottom + 4;
      let left = rect.left;
      const menuH = paper.offsetHeight || 300;
      const menuW = paper.offsetWidth || 200;
      if (top + menuH > window.innerHeight - 8) top = rect.top - menuH - 4;
      if (left + menuW > window.innerWidth - 8) left = window.innerWidth - menuW - 8;
      paper.style.top = `${Math.max(8, top)}px`;
      paper.style.left = `${Math.max(8, left)}px`;
    } else {
      paper.style.top = "50%";
      paper.style.left = "50%";
      paper.style.transform = "translate(-50%, -50%)";
    }
  }
  _focusFirst() {
    const slot = this.shadow.querySelector("slot");
    const items = (slot?.assignedElements() ?? []).filter(
      (el) => el.tagName === "ME-MENU-ITEM" && !el.hasAttribute("disabled")
    );
    if (items[0]) items[0].focus();
  }
  _closeMenu = () => {
    this.removeAttribute("open");
    this.dispatchEvent(new CustomEvent("me-close", {
      detail: { reason: "backdropClick" },
      bubbles: true,
      composed: true
    }));
  };
  _onItemClick = () => {
    requestAnimationFrame(() => this._closeMenu());
  };
  _onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      this.removeAttribute("open");
      this.dispatchEvent(new CustomEvent("me-close", {
        detail: { reason: "escapeKeyDown" },
        bubbles: true,
        composed: true
      }));
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      this._navigateItems(e.key === "ArrowDown" ? 1 : -1);
    }
  };
  _navigateItems(dir) {
    const slot = this.shadow.querySelector("slot");
    const items = (slot?.assignedElements() ?? []).filter(
      (el) => el.tagName === "ME-MENU-ITEM" && !el.hasAttribute("disabled")
    );
    if (!items.length) return;
    const active = document.activeElement;
    const idx = items.indexOf(active);
    const next = items[(idx + dir + items.length) % items.length];
    next?.focus();
  }
};
customElements.define("me-menu", MEMenu);

// src/components/menu/menu-item.styles.ts
var sheet40 = new CSSStyleSheet();
sheet40.replaceSync(`
  :host {
    display: block;
  }

  .me-menu-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    cursor: pointer;
    padding: 6px 16px;
    min-height: 48px;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 1rem;
    font-weight: var(--me-typography-fontWeightRegular, 400);
    line-height: 1.5;
    letter-spacing: 0.00938em;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    text-align: left;
    transition: background-color 150ms;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .me-menu-item:hover {
    background-color: var(--me-palette-action-hover, rgba(0,0,0,0.04));
  }

  :host([selected]) .me-menu-item {
    background-color: var(--me-palette-action-selected, rgba(0,0,0,0.08));
    color: var(--me-palette-primary-main, #1976d2);
  }

  :host([disabled]) .me-menu-item {
    opacity: 0.38;
    pointer-events: none;
    cursor: default;
  }

  .me-menu-item:focus-visible {
    background-color: var(--me-palette-action-focus, rgba(0,0,0,0.12));
    outline: none;
  }

  /* Icon slot */
  .me-menu-item__icon {
    display: inline-flex;
    min-width: 36px;
    flex-shrink: 0;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
  }
`);
var menu_item_styles_default = sheet40;

// src/components/menu/menu-item.ts
var MEMenuItem = class extends MEElement {
  static observedAttributes = ["selected", "disabled"];
  _ripple = new RippleController();
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [menu_item_styles_default, rippleSheet];
  }
  render() {
    const disabled = this.hasAttribute("disabled");
    this.setAttribute("role", "menuitem");
    this.setAttribute("tabindex", disabled ? "-1" : "0");
    const icon = this.getAttribute("icon") ?? "";
    this.shadow.innerHTML = `
      <button class="me-menu-item" ${disabled ? "disabled" : ""} tabindex="-1">
        ${icon ? `<span class="me-menu-item__icon">${icon}</span>` : ""}
        <slot></slot>
      </button>
    `;
    const btn = this.shadow.querySelector(".me-menu-item");
    if (btn) this._ripple.attach(btn);
  }
  cleanup() {
    this._ripple.detach();
  }
  addEventListeners() {
    this.addEventListener("click", this._onClick);
    this.addEventListener("keydown", this._onKeyDown);
  }
  _onClick = () => {
    if (this.hasAttribute("disabled")) return;
    this.dispatchEvent(new CustomEvent("me-menu-item-click", {
      detail: { value: this.getAttribute("value") },
      bubbles: true,
      composed: true
    }));
  };
  _onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this._onClick();
    }
  };
};
customElements.define("me-menu-item", MEMenuItem);

// src/components/drawer/drawer.styles.ts
var sheet41 = new CSSStyleSheet();
sheet41.replaceSync(`
  :host { display: contents; }

  /* Backdrop */
  .me-drawer__backdrop {
    position: fixed;
    inset: 0;
    z-index: var(--me-zIndex-drawer, 1200);
    background-color: rgba(0,0,0,0.5);
    opacity: 0;
    transition: opacity 225ms cubic-bezier(0.4,0,0.2,1);
    pointer-events: none;
  }
  :host([open]:not([variant="permanent"]):not([variant="persistent"])) .me-drawer__backdrop {
    opacity: 1;
    pointer-events: auto;
  }

  /* Paper */
  .me-drawer__paper {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: calc(var(--me-zIndex-drawer, 1200) + 1);
    width: 256px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    box-shadow: var(--me-shadows-16,
      0px 8px 10px -5px rgba(0,0,0,0.2),
      0px 16px 24px 2px rgba(0,0,0,0.14),
      0px 6px 30px 5px rgba(0,0,0,0.12));
    transition: transform 225ms cubic-bezier(0,0,0.2,1);
    will-change: transform;
    outline: 0;
    box-sizing: border-box;
  }

  /* Left (default) */
  :host(:not([anchor])) .me-drawer__paper,
  :host([anchor="left"]) .me-drawer__paper {
    left: 0;
    right: auto;
    transform: translateX(-100%);
  }
  :host([open]:not([anchor])) .me-drawer__paper,
  :host([open][anchor="left"]) .me-drawer__paper {
    transform: translateX(0);
  }

  /* Right */
  :host([anchor="right"]) .me-drawer__paper {
    right: 0;
    left: auto;
    transform: translateX(100%);
  }
  :host([open][anchor="right"]) .me-drawer__paper {
    transform: translateX(0);
  }

  /* Top */
  :host([anchor="top"]) .me-drawer__paper {
    top: 0;
    bottom: auto;
    left: 0;
    width: 100%;
    height: auto;
    max-height: 100vh;
    transform: translateY(-100%);
  }
  :host([open][anchor="top"]) .me-drawer__paper {
    transform: translateY(0);
  }

  /* Bottom */
  :host([anchor="bottom"]) .me-drawer__paper {
    bottom: 0;
    top: auto;
    left: 0;
    width: 100%;
    height: auto;
    max-height: 100vh;
    transform: translateY(100%);
  }
  :host([open][anchor="bottom"]) .me-drawer__paper {
    transform: translateY(0);
  }

  /* Permanent & persistent: no backdrop, no transform, no shadow */
  :host([variant="permanent"]) .me-drawer__paper,
  :host([variant="persistent"]) .me-drawer__paper {
    position: relative;
    top: auto;
    bottom: auto;
    height: 100%;
    transform: none;
    box-shadow: none;
    border-right: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
  }
  :host([variant="persistent"]) .me-drawer__paper {
    /* persistent can still be opened/closed, just no backdrop */
    position: relative;
  }
`);
var drawer_styles_default = sheet41;

// src/components/drawer/drawer.ts
var MEDrawer = class extends MEElement {
  static observedAttributes = ["open", "anchor", "variant"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [drawer_styles_default];
  }
  get open() {
    return this.hasAttribute("open");
  }
  set open(v) {
    v ? this.setAttribute("open", "") : this.removeAttribute("open");
  }
  render() {
    const variant = this.getAttribute("variant") ?? "temporary";
    const showBackdrop = variant === "temporary";
    const existingPaper = this.shadow.querySelector(".me-drawer__paper");
    const existingBackdrop = !!this.shadow.querySelector(".me-drawer__backdrop");
    if (existingPaper && existingBackdrop === showBackdrop) return;
    this.shadow.innerHTML = `
      ${showBackdrop ? `<div class="me-drawer__backdrop" part="backdrop"></div>` : ""}
      <div class="me-drawer__paper" part="paper" tabindex="-1">
        <slot></slot>
      </div>
    `;
    this.shadow.querySelector(".me-drawer__backdrop")?.addEventListener("click", this._closeDrawer);
  }
  addEventListeners() {
    this.addEventListener("keydown", this._onKeyDown);
  }
  cleanup() {
    this.removeEventListener("keydown", this._onKeyDown);
  }
  onAttributeChanged(name, _old, newVal) {
    if (name === "open" && newVal !== null) {
      requestAnimationFrame(() => {
        this.shadow.querySelector(".me-drawer__paper")?.focus();
      });
    }
  }
  _closeDrawer = () => {
    this.removeAttribute("open");
    this.dispatchEvent(new CustomEvent("me-close", {
      detail: { reason: "backdropClick" },
      bubbles: true,
      composed: true
    }));
  };
  _onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      this.removeAttribute("open");
      this.dispatchEvent(new CustomEvent("me-close", {
        detail: { reason: "escapeKeyDown" },
        bubbles: true,
        composed: true
      }));
    }
  };
};
customElements.define("me-drawer", MEDrawer);

// src/components/breadcrumbs/breadcrumbs.styles.ts
var sheet42 = new CSSStyleSheet();
sheet42.replaceSync(`
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
     Items are copied into shadow DOM via outerHTML so ::slotted() won't work \u2014 target directly. */
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

  /* Last item: current page \u2014 plain text, no link interaction */
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
var breadcrumbs_styles_default = sheet42;

// src/components/breadcrumbs/breadcrumbs.ts
var MEBreadcrumbs = class extends MEElement {
  static observedAttributes = ["separator", "max-items"];
  _expanded = false;
  _observer = null;
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [breadcrumbs_styles_default];
  }
  connectedCallback() {
    super.connectedCallback();
    requestAnimationFrame(() => this.render());
    this._observer = new MutationObserver(() => this.render());
    this._observer.observe(this, { childList: true, subtree: true, characterData: true });
  }
  disconnectedCallback() {
    this._observer?.disconnect();
    this._observer = null;
    super.disconnectedCallback();
  }
  render() {
    const separator = this.getAttribute("separator") ?? "/";
    const maxItems = parseInt(this.getAttribute("max-items") ?? "8");
    const items = Array.from(this.children);
    const total = items.length;
    let visibleItems = items;
    if (!this._expanded && total > maxItems) {
      visibleItems = [items[0], null, items[total - 1]];
    }
    const listHtml = visibleItems.map((item, idx) => {
      const isLast = idx === visibleItems.length - 1;
      const sep = !isLast ? `<li class="me-breadcrumbs__separator" aria-hidden="true">${separator}</li>` : "";
      if (item === null) {
        return `
          <li class="me-breadcrumbs__item">
            <button class="me-breadcrumbs__expand" aria-label="Show full path">\u2026</button>
          </li>
          ${sep}
        `;
      }
      return `<li class="me-breadcrumbs__item">${item.outerHTML}</li>${sep}`;
    }).join("");
    this.shadow.innerHTML = `
      <nav aria-label="${this.getAttribute("aria-label") ?? "breadcrumb"}">
        <ol class="me-breadcrumbs">${listHtml}</ol>
      </nav>
    `;
    this.shadow.querySelector(".me-breadcrumbs__expand")?.addEventListener("click", () => {
      this._expanded = true;
      this.render();
    });
  }
};
customElements.define("me-breadcrumbs", MEBreadcrumbs);

// src/components/pagination/pagination.styles.ts
var sheet43 = new CSSStyleSheet();
sheet43.replaceSync(`
  :host {
    display: flex;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }

  .me-pagination {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    gap: 4px;
  }

  /* Individual page item */
  .me-pagination__item {
    display: inline-flex;
  }

  .me-pagination__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    background: transparent;
    padding: 0;
    border-radius: 50%;
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: var(--me-typography-fontWeightRegular, 400);
    line-height: 1.43;
    letter-spacing: 0.01071em;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    transition: color 200ms, background-color 200ms;
    min-width: 32px;
    height: 32px;
    margin: 0 1px;
  }

  :host([size="small"]) .me-pagination__btn { min-width: 26px; height: 26px; font-size: 0.8125rem; }
  :host([size="large"]) .me-pagination__btn { min-width: 40px; height: 40px; font-size: 0.9375rem; }

  .me-pagination__btn:hover {
    background-color: var(--me-palette-action-hover, rgba(0,0,0,0.04));
  }

  /* Outlined variant */
  :host([variant="outlined"]) .me-pagination__btn {
    border: 1px solid color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 27%, transparent);
  }

  /* Rounded shape */
  :host([shape="rounded"]) .me-pagination__btn {
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
  }

  /* Selected */
  .me-pagination__btn[aria-current="true"] {
    background-color: var(--_color, var(--me-palette-primary-main, #1976d2));
    color: var(--_contrast, var(--me-palette-primary-contrastText, #fff));
  }
  :host([variant="outlined"]) .me-pagination__btn[aria-current="true"] {
    border-color: var(--_color, var(--me-palette-primary-main, #1976d2));
  }
  :host([variant="text"]) .me-pagination__btn[aria-current="true"] {
    background-color: var(--_color, var(--me-palette-primary-main, #1976d2));
    color: var(--_contrast, var(--me-palette-primary-contrastText, #fff));
  }

  /* Colors */
  :host([color="primary"]) {
    --_color: var(--me-palette-primary-main, #1976d2);
    --_contrast: var(--me-palette-primary-contrastText, #fff);
  }
  :host([color="secondary"]) {
    --_color: var(--me-palette-secondary-main, #9c27b0);
    --_contrast: var(--me-palette-secondary-contrastText, #fff);
  }

  /* Disabled/nav buttons */
  .me-pagination__btn:disabled,
  .me-pagination__btn[disabled] {
    opacity: 0.38;
    cursor: default;
    pointer-events: none;
  }

  /* Ellipsis */
  .me-pagination__ellipsis {
    display: inline-flex;
    align-items: flex-end;
    padding: 0 6px;
    height: 32px;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    letter-spacing: 0.01071em;
    user-select: none;
  }

  /* Nav arrow buttons */
  .me-pagination__nav {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  :host([shape="rounded"]) .me-pagination__nav {
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
  }
  .me-pagination__nav svg { width: 20px; height: 20px; fill: currentColor; }
`);
var pagination_styles_default = sheet43;

// src/components/pagination/pagination.ts
var PREV_SVG = `<svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>`;
var NEXT_SVG = `<svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>`;
var MEPagination = class extends MEElement {
  static observedAttributes = [
    "count",
    "page",
    "sibling-count",
    "boundary-count",
    "variant",
    "shape",
    "size",
    "color",
    "disabled",
    "hide-prev",
    "hide-next"
  ];
  get page() {
    return parseInt(this.getAttribute("page") ?? "1");
  }
  set page(v) {
    this.setAttribute("page", String(v));
  }
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [pagination_styles_default];
  }
  render() {
    const count = parseInt(this.getAttribute("count") ?? "1");
    const page = this.page;
    const siblingCount = parseInt(this.getAttribute("sibling-count") ?? "1");
    const boundaryCount = parseInt(this.getAttribute("boundary-count") ?? "1");
    const disabled = this.hasAttribute("disabled");
    const hidePrev = this.hasAttribute("hide-prev");
    const hideNext = this.hasAttribute("hide-next");
    this.setAttribute("role", "navigation");
    this.setAttribute("aria-label", this.getAttribute("aria-label") ?? "pagination");
    const items = this._buildItems(count, page, siblingCount, boundaryCount);
    const listItems = items.map((item) => {
      if (item === "prev") {
        return `<li class="me-pagination__item">
          <button class="me-pagination__btn me-pagination__nav"
            aria-label="Go to previous page"
            data-page="${page - 1}"
            ${page <= 1 || disabled ? "disabled" : ""}
            ${hidePrev ? "hidden" : ""}>
            ${PREV_SVG}
          </button>
        </li>`;
      }
      if (item === "next") {
        return `<li class="me-pagination__item">
          <button class="me-pagination__btn me-pagination__nav"
            aria-label="Go to next page"
            data-page="${page + 1}"
            ${page >= count || disabled ? "disabled" : ""}
            ${hideNext ? "hidden" : ""}>
            ${NEXT_SVG}
          </button>
        </li>`;
      }
      if (item === "...") {
        return `<li class="me-pagination__item">
          <span class="me-pagination__ellipsis" aria-hidden="true">\u2026</span>
        </li>`;
      }
      const n = item;
      return `<li class="me-pagination__item">
        <button class="me-pagination__btn"
          aria-label="Go to page ${n}"
          aria-current="${n === page ? "true" : "false"}"
          data-page="${n}"
          ${disabled ? "disabled" : ""}>
          ${n}
        </button>
      </li>`;
    }).join("");
    this.shadow.innerHTML = `<ul class="me-pagination">${listItems}</ul>`;
    this.shadow.querySelectorAll(".me-pagination__btn:not([disabled])").forEach((btn) => {
      btn.addEventListener("click", () => {
        const p = parseInt(btn.dataset.page ?? "1");
        if (!p || p < 1 || p > count) return;
        this.setAttribute("page", String(p));
        this.dispatchEvent(new CustomEvent("me-change", {
          detail: { page: p },
          bubbles: true,
          composed: true
        }));
      });
    });
  }
  _buildItems(count, page, siblingCount, boundaryCount) {
    const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);
    const startPages = range(1, Math.min(boundaryCount, count));
    const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
    const siblingStart = Math.max(
      Math.min(page - siblingCount, count - boundaryCount - siblingCount * 2 - 1),
      boundaryCount + 2
    );
    const siblingEnd = Math.min(
      Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
      endPages.length > 0 ? endPages[0] - 2 : count - 1
    );
    const items = [
      ...startPages,
      ...siblingStart > boundaryCount + 2 ? ["..."] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : [],
      ...range(siblingStart, siblingEnd),
      ...siblingEnd < count - boundaryCount - 1 ? ["..."] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : [],
      ...endPages
    ];
    const unique = [...new Set(items)];
    return ["prev", ...unique, "next"];
  }
};
customElements.define("me-pagination", MEPagination);

// src/components/bottom-navigation/bottom-navigation.styles.ts
var sheet44 = new CSSStyleSheet();
sheet44.replaceSync(`
  :host {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    background-color: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    box-shadow: var(--me-shadows-8,
      0px 5px 5px -3px rgba(0,0,0,0.2),
      0px 8px 10px 1px rgba(0,0,0,0.14),
      0px 3px 14px 2px rgba(0,0,0,0.12));
    /* Shadow goes upward */
    box-shadow: 0px -2px 4px -1px rgba(0,0,0,0.2),
                0px -4px 5px 0px rgba(0,0,0,0.14),
                0px -1px 10px 0px rgba(0,0,0,0.12);
    min-height: 56px;
  }

  :host([show-labels]) ::slotted(me-bottom-nav-action) {
    --_show-label: 1;
  }

  .me-bottom-navigation {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`);
var bottom_navigation_styles_default = sheet44;

// src/components/bottom-navigation/bottom-navigation.ts
var MEBottomNavigation = class extends MEElement {
  static observedAttributes = ["value", "show-labels"];
  get value() {
    return this.getAttribute("value") ?? "";
  }
  set value(v) {
    this.setAttribute("value", v);
    this._syncSelected();
    this.dispatchEvent(new CustomEvent("me-change", {
      detail: { value: v },
      bubbles: true,
      composed: true
    }));
  }
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [bottom_navigation_styles_default];
  }
  render() {
    this.setAttribute("role", "navigation");
    this.shadow.innerHTML = `
      <div class="me-bottom-navigation">
        <slot></slot>
      </div>
    `;
    requestAnimationFrame(() => this._syncSelected());
  }
  addEventListeners() {
    this.addEventListener("me-nav-action-select", this._onActionSelect);
  }
  cleanup() {
    this.removeEventListener("me-nav-action-select", this._onActionSelect);
  }
  _syncSelected() {
    const value = this.getAttribute("value");
    const slot = this.shadow.querySelector("slot");
    const actions = (slot?.assignedElements() ?? []).filter(
      (el) => el.tagName === "ME-BOTTOM-NAV-ACTION"
    );
    const showLabels = this.hasAttribute("show-labels");
    actions.forEach((action, i) => {
      const actionValue = action.getAttribute("value") ?? String(i);
      action.toggleAttribute("selected", actionValue === value);
      if (showLabels) action.setAttribute("show-label", "");
      else action.removeAttribute("show-label");
    });
  }
  _onActionSelect = (e) => {
    const newValue = e.detail.value;
    if (newValue === this.getAttribute("value")) return;
    this.setAttribute("value", newValue);
    this._syncSelected();
    this.dispatchEvent(new CustomEvent("me-change", {
      detail: { value: newValue },
      bubbles: true,
      composed: true
    }));
  };
};
customElements.define("me-bottom-navigation", MEBottomNavigation);

// src/components/bottom-navigation/bottom-nav-action.styles.ts
var sheet45 = new CSSStyleSheet();
sheet45.replaceSync(`
  :host {
    display: inline-flex;
    flex: 1;
    min-width: 0;
  }

  .me-bottom-nav-action {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    background: transparent;
    cursor: pointer;
    padding: 6px 12px 8px;
    min-width: 80px;
    max-width: 168px;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    transition: color 200ms, padding 200ms;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }

  :host([selected]) .me-bottom-nav-action {
    padding-top: 6px;
    color: var(--_selected-color, var(--me-palette-primary-main, #1976d2));
  }

  :host([disabled]) .me-bottom-nav-action {
    opacity: 0.38;
    pointer-events: none;
    cursor: default;
  }

  .me-bottom-nav-action__icon {
    display: inline-flex;
    font-size: 24px;
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
    transition: font-size 200ms;
  }

  :host([selected]) .me-bottom-nav-action__icon {
    font-size: 26px;
  }

  .me-bottom-nav-action__label {
    font-size: 0.75rem;
    font-weight: var(--me-typography-fontWeightRegular, 400);
    line-height: 1.66;
    letter-spacing: 0.03333em;
    transition: font-size 200ms, opacity 200ms;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  :host([show-label]:not([selected])) .me-bottom-nav-action__label {
    opacity: 0.7;
  }

  :host(:not([show-label]):not([selected])) .me-bottom-nav-action__label {
    opacity: 0;
    font-size: 0;
  }
`);
var bottom_nav_action_styles_default = sheet45;

// src/components/bottom-navigation/bottom-nav-action.ts
var MEBottomNavAction = class extends MEElement {
  static observedAttributes = ["label", "value", "selected", "disabled", "show-label"];
  _ripple = new RippleController();
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [bottom_nav_action_styles_default, rippleSheet];
  }
  render() {
    const label = this.getAttribute("label") ?? "";
    const disabled = this.hasAttribute("disabled");
    this.setAttribute("role", "button");
    this.setAttribute("tabindex", disabled ? "-1" : "0");
    this.setAttribute("aria-label", label);
    this.shadow.innerHTML = `
      <button class="me-bottom-nav-action" ${disabled ? "disabled" : ""} tabindex="-1" aria-label="${label}">
        <span class="me-bottom-nav-action__icon"><slot name="icon"></slot></span>
        <span class="me-bottom-nav-action__label">${label}</span>
      </button>
    `;
    const btn = this.shadow.querySelector(".me-bottom-nav-action");
    if (btn) this._ripple.attach(btn);
  }
  cleanup() {
    this._ripple.detach();
  }
  addEventListeners() {
    this.addEventListener("click", this._onClick);
    this.addEventListener("keydown", this._onKeyDown);
  }
  _onClick = () => {
    if (this.hasAttribute("disabled")) return;
    this.dispatchEvent(new CustomEvent("me-nav-action-select", {
      detail: { value: this.getAttribute("value") ?? this.getAttribute("label") ?? "" },
      bubbles: true,
      composed: true
    }));
  };
  _onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this._onClick();
    }
  };
};
customElements.define("me-bottom-nav-action", MEBottomNavAction);

// src/components/card/card.styles.ts
var sheet46 = new CSSStyleSheet();
sheet46.replaceSync(`
  :host {
    display: block;
    background-color: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    overflow: hidden;
    box-shadow: var(--me-shadows-1,
      0px 2px 1px -1px rgba(0,0,0,0.2),
      0px 1px 1px 0px rgba(0,0,0,0.14),
      0px 1px 3px 0px rgba(0,0,0,0.12));
    transition: box-shadow var(--me-transitions-duration-standard, 300ms) var(--me-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1));
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
  }

  :host([variant="outlined"]) {
    box-shadow: none;
    border: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
  }

  :host([raised]) {
    box-shadow: var(--me-shadows-8,
      0px 5px 5px -3px rgba(0,0,0,0.2),
      0px 8px 10px 1px rgba(0,0,0,0.14),
      0px 3px 14px 2px rgba(0,0,0,0.12));
  }
`);
var card_styles_default = sheet46;

// src/components/card/card.ts
var MECard = class extends MEElement {
  static observedAttributes = ["variant", "raised"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [card_styles_default];
  }
  render() {
    if (this.shadow.querySelector("slot")) return;
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("me-card", MECard);

// src/components/card/card-content.styles.ts
var sheet47 = new CSSStyleSheet();
sheet47.replaceSync(`
  :host {
    display: block;
    padding: 16px;
  }
  :host(:last-child) {
    padding-bottom: 24px;
  }
`);
var card_content_styles_default = sheet47;

// src/components/card/card-content.ts
var MECardContent = class extends MEElement {
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [card_content_styles_default];
  }
  render() {
    if (this.shadow.querySelector("slot")) return;
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("me-card-content", MECardContent);

// src/components/card/card-actions.styles.ts
var sheet48 = new CSSStyleSheet();
sheet48.replaceSync(`
  :host {
    display: flex;
    align-items: center;
    padding: 8px;
    gap: 8px;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  :host([disable-spacing]) {
    padding: 0;
    gap: 0;
  }
`);
var card_actions_styles_default = sheet48;

// src/components/card/card-actions.ts
var MECardActions = class extends MEElement {
  static observedAttributes = ["disable-spacing"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [card_actions_styles_default];
  }
  render() {
    if (this.shadow.querySelector("slot")) return;
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
customElements.define("me-card-actions", MECardActions);

// src/components/card/card-header.styles.ts
var sheet49 = new CSSStyleSheet();
sheet49.replaceSync(`
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
var card_header_styles_default = sheet49;

// src/components/card/card-header.ts
var MECardHeader = class extends MEElement {
  static observedAttributes = ["title", "subheader"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [card_header_styles_default];
  }
  render() {
    this.shadow.innerHTML = `
      <div class="me-card-header__avatar" hidden><slot name="avatar"></slot></div>
      <div class="me-card-header__content">
        <slot name="title"><span class="me-card-header__title"></span></slot>
        <slot name="subheader"><span class="me-card-header__subheader"></span></slot>
      </div>
      <div class="me-card-header__action" hidden><slot name="action"></slot></div>
    `;
    this.shadow.querySelector(".me-card-header__title").textContent = this.getAttribute("title") ?? "";
    this.shadow.querySelector(".me-card-header__subheader").textContent = this.getAttribute("subheader") ?? "";
    this._setupSlots();
  }
  _setupSlots() {
    for (const name of ["avatar", "action"]) {
      const slot = this.shadow.querySelector(`slot[name="${name}"]`);
      const wrap = slot.parentElement;
      const update = () => {
        wrap.hidden = slot.assignedElements().length === 0;
      };
      slot.addEventListener("slotchange", update);
      requestAnimationFrame(update);
    }
  }
};
customElements.define("me-card-header", MECardHeader);

// src/components/card/card-media.styles.ts
var sheet50 = new CSSStyleSheet();
sheet50.replaceSync(`
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
var card_media_styles_default = sheet50;

// src/components/card/card-media.ts
var MECardMedia = class extends MEElement {
  static observedAttributes = ["image", "alt", "height", "component"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [card_media_styles_default];
  }
  render() {
    if (this.shadow.querySelector(".me-card-media")) return;
    const component = this.getAttribute("component") ?? "div";
    if (component === "img") {
      const img = document.createElement("img");
      img.className = "me-card-media";
      img.alt = this.getAttribute("alt") ?? "";
      img.src = this.getAttribute("image") ?? "";
      this.shadow.appendChild(img);
    } else {
      const div = document.createElement("div");
      div.className = "me-card-media";
      this.shadow.appendChild(div);
    }
    this._updateStyle();
  }
  onAttributeChanged(name) {
    if (name === "image" || name === "height") {
      this._updateStyle();
    }
  }
  _updateStyle() {
    const el = this.shadow.querySelector(".me-card-media");
    if (!el) return;
    const image = this.getAttribute("image");
    const height = this.getAttribute("height");
    if (image && el.tagName === "DIV") {
      el.style.backgroundImage = `url("${image}")`;
    }
    if (height) {
      el.style.height = `${height}${/^\d+$/.test(height) ? "px" : ""}`;
    }
  }
};
customElements.define("me-card-media", MECardMedia);

// src/components/accordion/accordion.styles.ts
var sheet51 = new CSSStyleSheet();
sheet51.replaceSync(`
  :host {
    display: block;
    position: relative;
    background-color: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    box-shadow: var(--me-shadows-1,
      0px 2px 1px -1px rgba(0,0,0,0.2),
      0px 1px 1px 0px rgba(0,0,0,0.14),
      0px 1px 3px 0px rgba(0,0,0,0.12));
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    transition: margin 150ms cubic-bezier(0.4,0,0.2,1);
  }

  /* Separator line between stacked accordions */
  :host::before {
    content: '';
    position: absolute;
    left: 0;
    top: -1px;
    right: 0;
    height: 1px;
    background-color: var(--me-palette-divider, rgba(0,0,0,0.12));
    opacity: 1;
    transition: opacity 150ms cubic-bezier(0.4,0,0.2,1);
  }

  :host(:first-child)::before,
  :host([expanded])::before {
    opacity: 0;
  }

  :host([expanded]) {
    margin: 16px 0;
  }

  :host([disabled]) {
    background-color: color-mix(in srgb, var(--me-palette-text-primary, rgba(0,0,0,0.87)) 7%, transparent);
  }
`);
var accordion_styles_default = sheet51;

// src/components/accordion/accordion.ts
var MEAccordion = class extends MEElement {
  static observedAttributes = ["expanded", "disabled"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [accordion_styles_default];
  }
  get expanded() {
    return this.hasAttribute("expanded");
  }
  set expanded(v) {
    this.toggleAttribute("expanded", v);
  }
  render() {
    if (this.shadow.querySelector("slot")) return;
    this.shadow.innerHTML = `<slot></slot>`;
    requestAnimationFrame(() => this._syncChildren());
  }
  addEventListeners() {
    this.addEventListener("me-accordion-change", this._onSummaryChange);
  }
  cleanup() {
    this.removeEventListener("me-accordion-change", this._onSummaryChange);
  }
  onAttributeChanged(name, _old, _newVal) {
    if (name === "expanded") {
      this._syncChildren();
    }
  }
  _syncChildren() {
    const expanded = this.hasAttribute("expanded");
    const disabled = this.hasAttribute("disabled");
    const summary = this.querySelector("me-accordion-summary");
    const details = this.querySelector("me-accordion-details");
    summary?.toggleAttribute("expanded", expanded);
    summary?.toggleAttribute("disabled", disabled);
    details?.toggleAttribute("expanded", expanded);
  }
  _onSummaryChange = () => {
    if (this.hasAttribute("disabled")) return;
    const expanded = !this.hasAttribute("expanded");
    this.toggleAttribute("expanded", expanded);
    this.dispatchEvent(new CustomEvent("me-change", {
      detail: { expanded },
      bubbles: true,
      composed: true
    }));
  };
};
customElements.define("me-accordion", MEAccordion);

// src/components/accordion/accordion-summary.styles.ts
var sheet52 = new CSSStyleSheet();
sheet52.replaceSync(`
  :host {
    display: block;
  }

  .me-accordion-summary {
    display: flex;
    align-items: center;
    min-height: 48px;
    padding: 0 16px;
    width: 100%;
    box-sizing: border-box;
    border: 0;
    background: transparent;
    cursor: pointer;
    outline: 0;
    text-align: left;
    font-family: var(--me-typography-fontFamily, "Roboto","Helvetica","Arial",sans-serif);
    font-size: 1rem;
    font-weight: var(--me-typography-fontWeightMedium, 500);
    line-height: 1.5;
    letter-spacing: 0.00938em;
    color: inherit;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 150ms cubic-bezier(0.4,0,0.2,1),
                min-height 150ms cubic-bezier(0.4,0,0.2,1);
    position: relative;
    overflow: hidden;
  }

  :host([expanded]) .me-accordion-summary {
    min-height: 64px;
  }

  .me-accordion-summary:hover {
    background-color: var(--me-palette-action-hover, rgba(0,0,0,0.04));
  }

  .me-accordion-summary:focus-visible {
    background-color: var(--me-palette-action-focus, rgba(0,0,0,0.12));
  }

  :host([disabled]) .me-accordion-summary {
    opacity: 0.38;
    cursor: default;
    pointer-events: none;
  }

  .me-accordion-summary__content {
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin: 12px 0;
    transition: margin 150ms cubic-bezier(0.4,0,0.2,1);
  }

  :host([expanded]) .me-accordion-summary__content {
    margin: 20px 0;
  }

  .me-accordion-summary__icon {
    display: flex;
    align-items: center;
    margin-left: 8px;
    color: var(--me-palette-action-active, rgba(0,0,0,0.54));
    transition: transform 150ms cubic-bezier(0.4,0,0.2,1);
    flex-shrink: 0;
  }

  :host([expanded]) .me-accordion-summary__icon {
    transform: rotate(180deg);
  }
`);
var accordion_summary_styles_default = sheet52;

// src/components/accordion/accordion-summary.ts
var EXPAND_ICON = `<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>`;
var MEAccordionSummary = class extends MEElement {
  static observedAttributes = ["expanded", "disabled"];
  _ripple = new RippleController();
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [accordion_summary_styles_default, rippleSheet];
  }
  render() {
    if (this.shadow.querySelector(".me-accordion-summary")) return;
    this.shadow.innerHTML = `
      <button class="me-accordion-summary" aria-expanded="false">
        <div class="me-accordion-summary__content"><slot></slot></div>
        <div class="me-accordion-summary__icon">
          <slot name="expand-icon">${EXPAND_ICON}</slot>
        </div>
      </button>
    `;
  }
  addEventListeners() {
    this.addEventListener("click", this._onClick);
    const btn = this.shadow.querySelector(".me-accordion-summary");
    if (btn) this._ripple.attach(btn);
  }
  cleanup() {
    this.removeEventListener("click", this._onClick);
    this._ripple.detach();
  }
  onAttributeChanged(name, _old, newVal) {
    if (name === "expanded") {
      const btn = this.shadow.querySelector(".me-accordion-summary");
      if (btn) btn.setAttribute("aria-expanded", String(newVal !== null));
    }
  }
  _onClick = () => {
    if (this.hasAttribute("disabled")) return;
    this.dispatchEvent(new CustomEvent("me-accordion-change", {
      bubbles: true,
      composed: true
    }));
  };
};
customElements.define("me-accordion-summary", MEAccordionSummary);

// src/components/accordion/accordion-details.styles.ts
var sheet53 = new CSSStyleSheet();
sheet53.replaceSync(`
  /*
   * Height animation via CSS grid trick: grid-template-rows transitions from
   * 0fr (collapsed) to 1fr (expanded). The inner div needs min-height:0 and
   * overflow:hidden to actually collapse to zero.
   */
  :host {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 250ms cubic-bezier(0.4,0,0.2,1);
  }

  :host([expanded]) {
    grid-template-rows: 1fr;
  }

  .me-accordion-details {
    overflow: hidden;
    min-height: 0;
    padding: 8px 16px 16px;
    box-sizing: border-box;
  }
`);
var accordion_details_styles_default = sheet53;

// src/components/accordion/accordion-details.ts
var MEAccordionDetails = class extends MEElement {
  static observedAttributes = ["expanded"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [accordion_details_styles_default];
  }
  render() {
    if (this.shadow.querySelector(".me-accordion-details")) return;
    this.shadow.innerHTML = `<div class="me-accordion-details"><slot></slot></div>`;
  }
};
customElements.define("me-accordion-details", MEAccordionDetails);

// src/components/slider/slider.styles.ts
var sheet54 = new CSSStyleSheet();
sheet54.replaceSync(`
  :host {
    display: inline-flex;
    align-items: center;
    width: 100%;
    padding: 13px 0;
    box-sizing: border-box;
    cursor: pointer;
    touch-action: none;
    --_color: var(--me-palette-primary-main, #1976d2);
    --_thumb: 20px;
    --_track: 4px;
  }
  :host([color="secondary"]) { --_color: var(--me-palette-secondary-main, #9c27b0); }
  :host([color="error"])     { --_color: var(--me-palette-error-main, #d32f2f); }
  :host([color="warning"])   { --_color: var(--me-palette-warning-main, #ed6c02); }
  :host([color="info"])      { --_color: var(--me-palette-info-main, #0288d1); }
  :host([color="success"])   { --_color: var(--me-palette-success-main, #2e7d32); }
  :host([size="small"]) { --_thumb: 12px; --_track: 2px; padding: 5px 0; }
  :host([disabled]) { cursor: default; pointer-events: none; opacity: 0.38; }

  .me-slider {
    position: relative;
    width: 100%;
    height: var(--_thumb);
    display: flex;
    align-items: center;
    outline: none;
  }
  .me-slider:focus-visible .me-slider__thumb {
    box-shadow: 0 0 0 8px color-mix(in srgb, var(--_color) 16%, transparent);
  }
  .me-slider__rail {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: var(--_track);
    border-radius: 2px;
    background: var(--me-palette-grey-300, #e0e0e0);
  }
  .me-slider__track {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: var(--_track);
    border-radius: 2px;
    background: var(--_color);
    pointer-events: none;
  }
  .me-slider__thumb {
    position: absolute;
    top: 50%;
    width: var(--_thumb);
    height: var(--_thumb);
    border-radius: 50%;
    background: var(--_color);
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px rgba(0,0,0,.14), 0 1px 3px rgba(0,0,0,.12);
    transition: box-shadow 150ms cubic-bezier(0.4,0,0.2,1);
    pointer-events: none;
  }
  .me-slider:hover .me-slider__thumb,
  .me-slider--active .me-slider__thumb {
    box-shadow: 0 0 0 8px color-mix(in srgb, var(--_color) 16%, transparent);
  }
  .me-slider__marks { position: absolute; width: 100%; height: 0; pointer-events: none; }
  .me-slider__mark {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: var(--_color);
    transform: translate(-50%, -50%);
  }
  .me-slider__mark--active { background: #fff; }
  .me-slider__value-label {
    position: absolute;
    bottom: calc(100% + 4px);
    transform: translateX(-50%) translateY(-8px) scale(0);
    background: var(--me-palette-grey-600, #757575);
    color: #fff;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    white-space: nowrap;
    pointer-events: none;
    transition: transform 150ms cubic-bezier(0.4,0,0.2,1);
  }
  :host([value-label-display="on"]) .me-slider__value-label { transform: translateX(-50%) translateY(-8px) scale(1); }
  .me-slider--active .me-slider__value-label,
  .me-slider:hover .me-slider__value-label { transform: translateX(-50%) translateY(-8px) scale(1); }
  :host([value-label-display="off"]) .me-slider__value-label { display: none; }
`);
var slider_styles_default = sheet54;

// src/components/slider/slider.ts
var MESlider = class extends MEElement {
  static observedAttributes = ["value", "min", "max", "step", "disabled", "color", "size", "marks", "value-label-display"];
  get _min() {
    return parseFloat(this.getAttribute("min") ?? "0");
  }
  get _max() {
    return parseFloat(this.getAttribute("max") ?? "100");
  }
  get _step() {
    return parseFloat(this.getAttribute("step") ?? "1");
  }
  get _val() {
    return parseFloat(this.getAttribute("value") ?? "0");
  }
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [slider_styles_default];
  }
  render() {
    if (this.shadow.querySelector(".me-slider")) {
      this._syncVisuals();
      return;
    }
    const disabled = this.hasAttribute("disabled");
    const labelDisplay = this.getAttribute("value-label-display") ?? "auto";
    this.shadow.innerHTML = `
      <div class="me-slider" role="slider" tabindex="${disabled ? -1 : 0}"
           aria-valuemin="${this._min}" aria-valuemax="${this._max}" aria-valuenow="${this._val}"
           aria-disabled="${disabled}">
        <span class="me-slider__rail"></span>
        <span class="me-slider__track"></span>
        <span class="me-slider__thumb">
          ${labelDisplay !== "off" ? `<span class="me-slider__value-label">${this._val}</span>` : ""}
        </span>
        <span class="me-slider__marks"></span>
      </div>
    `;
    this._syncVisuals();
  }
  addEventListeners() {
    const root = this.shadow.querySelector(".me-slider");
    if (!root) return;
    root.addEventListener("keydown", this._onKeyDown);
    root.addEventListener("pointerdown", this._onPointerDown);
  }
  _onKeyDown = (e) => {
    if (this.hasAttribute("disabled")) return;
    let newVal = this._val;
    switch (e.key) {
      case "ArrowRight":
      case "ArrowUp":
        newVal += this._step;
        break;
      case "ArrowLeft":
      case "ArrowDown":
        newVal -= this._step;
        break;
      case "Home":
        newVal = this._min;
        break;
      case "End":
        newVal = this._max;
        break;
      default:
        return;
    }
    e.preventDefault();
    this._commit(newVal);
  };
  _onPointerDown = (e) => {
    if (this.hasAttribute("disabled")) return;
    e.preventDefault();
    const root = this.shadow.querySelector(".me-slider");
    root?.classList.add("me-slider--active");
    this._updateFromPointer(e);
    const onMove = (ev) => this._updateFromPointer(ev);
    const onUp = () => {
      root?.classList.remove("me-slider--active");
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
    };
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
  };
  _updateFromPointer(e) {
    const root = this.shadow.querySelector(".me-slider");
    if (!root) return;
    const rect = root.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    this._commit(this._min + pct * (this._max - this._min));
  }
  _commit(raw) {
    const step = this._step;
    const snapped = Math.round(raw / step) * step;
    const clamped = Math.max(this._min, Math.min(this._max, parseFloat(snapped.toFixed(10))));
    if (clamped === this._val) return;
    this.setAttribute("value", String(clamped));
    this.dispatchEvent(new CustomEvent("me-change", { detail: { value: clamped }, bubbles: true, composed: true }));
  }
  _syncVisuals() {
    const root = this.shadow.querySelector(".me-slider");
    const track = this.shadow.querySelector(".me-slider__track");
    const thumb = this.shadow.querySelector(".me-slider__thumb");
    const label = this.shadow.querySelector(".me-slider__value-label");
    const marksEl = this.shadow.querySelector(".me-slider__marks");
    if (!root || !track || !thumb) return;
    const pct = (this._val - this._min) / (this._max - this._min) * 100;
    track.style.width = `${pct}%`;
    thumb.style.left = `${pct}%`;
    root.setAttribute("aria-valuenow", String(this._val));
    if (label) label.textContent = String(this._val);
    if (marksEl) {
      const marksAttr = this.getAttribute("marks");
      if (marksAttr !== null) {
        let marks = [];
        if (marksAttr === "" || marksAttr === "true") {
          const count = Math.round((this._max - this._min) / this._step);
          marks = Array.from({ length: count + 1 }, (_, i) => ({ value: this._min + i * this._step }));
        } else {
          try {
            marks = JSON.parse(marksAttr);
          } catch {
          }
        }
        marksEl.innerHTML = marks.map((m) => {
          const mp = (m.value - this._min) / (this._max - this._min) * 100;
          const active = m.value <= this._val;
          return `<span class="me-slider__mark ${active ? "me-slider__mark--active" : ""}" style="left:${mp}%;top:50%"></span>`;
        }).join("");
      }
    }
  }
  onAttributeChanged() {
    if (this.shadow.querySelector(".me-slider")) this._syncVisuals();
  }
  cleanup() {
  }
};
customElements.define("me-slider", MESlider);

// src/components/rating/rating.styles.ts
var sheet55 = new CSSStyleSheet();
sheet55.replaceSync(`
  :host {
    display: inline-flex;
    align-items: center;
    --_color: var(--me-palette-warning-light, #ffb400);
    --_empty: var(--me-palette-action-disabled, rgba(0,0,0,0.26));
    --_size: 1.5rem;
    cursor: pointer;
    user-select: none;
  }
  :host([size="small"]) { --_size: 1.125rem; }
  :host([size="large"]) { --_size: 2rem; }
  :host([color="primary"])   { --_color: var(--me-palette-primary-main, #1976d2); }
  :host([color="secondary"]) { --_color: var(--me-palette-secondary-main, #9c27b0); }
  :host([disabled]), :host([read-only]) { cursor: default; pointer-events: none; }
  :host([disabled]) { opacity: 0.5; }

  .me-rating { display: inline-flex; align-items: center; gap: 2px; }

  .me-rating__item {
    position: relative;
    display: inline-flex;
    cursor: inherit;
  }

  .me-rating__icon {
    display: inline-flex;
    font-size: var(--_size);
    width: 1em;
    height: 1em;
    transition: transform 150ms cubic-bezier(0.4,0,0.2,1);
    fill: var(--_empty);
  }
  .me-rating__icon--filled { fill: var(--_color); }
  .me-rating__icon--half {
    position: absolute;
    left: 0;
    overflow: hidden;
    width: 50%;
    fill: var(--_color);
  }
  .me-rating__item:hover .me-rating__icon { transform: scale(1.2); }

  .me-rating__item--hover .me-rating__icon,
  .me-rating__item--active .me-rating__icon { fill: var(--_color); }
  .me-rating__item--hover-empty .me-rating__icon { fill: var(--_empty); }
`);
var rating_styles_default = sheet55;

// src/components/rating/rating.ts
var STAR_EMPTY = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>`;
var STAR_FULL = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
var MERating = class extends MEElement {
  static observedAttributes = ["value", "max", "precision", "size", "color", "disabled", "read-only"];
  _hoverValue = null;
  get _value() {
    return parseFloat(this.getAttribute("value") ?? "0");
  }
  get _max() {
    return parseInt(this.getAttribute("max") ?? "5");
  }
  get _precision() {
    return parseFloat(this.getAttribute("precision") ?? "1");
  }
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [rating_styles_default];
  }
  render() {
    if (this.shadow.querySelector(".me-rating")) {
      this._syncStars();
      return;
    }
    this.shadow.innerHTML = `<span class="me-rating" role="radiogroup"></span>`;
    this._syncStars();
  }
  addEventListeners() {
    const root = this.shadow.querySelector(".me-rating");
    if (!root) return;
    root.addEventListener("click", this._onClick);
    root.addEventListener("mousemove", this._onMouseMove);
    root.addEventListener("mouseleave", this._onMouseLeave);
  }
  _onClick = (e) => {
    if (this.hasAttribute("disabled") || this.hasAttribute("read-only")) return;
    const val = this._getValueFromEvent(e);
    if (val === null) return;
    const newVal = val === this._value ? 0 : val;
    this.setAttribute("value", String(newVal));
    this.dispatchEvent(new CustomEvent("me-change", { detail: { value: newVal }, bubbles: true, composed: true }));
  };
  _onMouseMove = (e) => {
    if (this.hasAttribute("disabled") || this.hasAttribute("read-only")) return;
    const val = this._getValueFromEvent(e);
    if (val !== this._hoverValue) {
      this._hoverValue = val;
      this._syncStars();
    }
  };
  _onMouseLeave = () => {
    this._hoverValue = null;
    this._syncStars();
  };
  _getValueFromEvent(e) {
    const item = e.target?.closest(".me-rating__item");
    if (!item) return null;
    const itemVal = parseFloat(item.dataset.value ?? "0");
    if (this._precision === 0.5) {
      const rect = item.getBoundingClientRect();
      const half = e.clientX - rect.left < rect.width / 2;
      return half ? itemVal - 0.5 : itemVal;
    }
    return itemVal;
  }
  _syncStars() {
    const root = this.shadow.querySelector(".me-rating");
    if (!root) return;
    const max = this._max;
    const precision = this._precision;
    const displayValue = this._hoverValue ?? this._value;
    const disabled = this.hasAttribute("disabled");
    const readOnly = this.hasAttribute("read-only");
    let html = "";
    for (let i = 1; i <= max; i++) {
      const filled = displayValue >= i;
      const half = !filled && precision === 0.5 && displayValue >= i - 0.5;
      const hovering = this._hoverValue !== null && this._hoverValue >= i;
      const hoverEmpty = this._hoverValue !== null && this._hoverValue < i;
      let itemClass = "me-rating__item";
      if (hovering) itemClass += " me-rating__item--hover";
      if (hoverEmpty) itemClass += " me-rating__item--hover-empty";
      let iconHtml;
      if (filled) {
        iconHtml = `<span class="me-rating__icon me-rating__icon--filled">${STAR_FULL}</span>`;
      } else if (half) {
        iconHtml = `<span class="me-rating__icon">${STAR_EMPTY}</span><span class="me-rating__icon me-rating__icon--half">${STAR_FULL}</span>`;
      } else {
        iconHtml = `<span class="me-rating__icon">${STAR_EMPTY}</span>`;
      }
      html += `
        <span class="${itemClass}" data-value="${i}"
              role="radio" aria-checked="${filled}"
              tabindex="${!disabled && !readOnly ? 0 : -1}">
          ${iconHtml}
        </span>`;
    }
    root.innerHTML = html;
  }
  onAttributeChanged() {
    this._syncStars();
  }
  cleanup() {
  }
};
customElements.define("me-rating", MERating);

// src/components/transitions/transitions.ts
function makeSheet(enterCss, exitCss, baseCss = "") {
  const s = new CSSStyleSheet();
  s.replaceSync(`
    :host { display: block; ${baseCss} }
    .me-transition {
      transition-duration: var(--_dur, 300ms);
      transition-timing-function: cubic-bezier(0.4,0,0.2,1);
    }
    .me-transition--enter { ${enterCss} }
    .me-transition--exit  { ${exitCss} }
  `);
  return s;
}
var TransitionBase = class extends MEElement {
  static observedAttributes = ["in", "timeout"];
  connectedCallback() {
    this.shadow.adoptedStyleSheets = [this._sheet];
    super.connectedCallback();
  }
  render() {
    if (this.shadow.querySelector(".me-transition")) {
      this._sync();
      return;
    }
    this.shadow.innerHTML = `<div class="me-transition me-transition--exit"><slot></slot></div>`;
    requestAnimationFrame(() => this._sync());
  }
  _sync() {
    const div = this.shadow.querySelector(".me-transition");
    if (!div) return;
    div.style.setProperty("--_dur", (this.getAttribute("timeout") ?? "300") + "ms");
    const isIn = this.hasAttribute("in");
    div.classList.toggle("me-transition--enter", isIn);
    div.classList.toggle("me-transition--exit", !isIn);
  }
  onAttributeChanged() {
    this._sync();
  }
};
var _fadeSheet = makeSheet("opacity:1;", "opacity:0;");
var MEFade = class extends TransitionBase {
  _sheet = _fadeSheet;
};
var _growSheet = makeSheet("opacity:1;transform:scale(1);", "opacity:0;transform:scale(0.75);");
var MEGrow = class extends TransitionBase {
  _sheet = _growSheet;
};
var _zoomSheet = makeSheet("opacity:1;transform:scale(1);", "opacity:0;transform:scale(0);");
var MEZoom = class extends TransitionBase {
  _sheet = _zoomSheet;
};
var _collapseSheet = (() => {
  const s = new CSSStyleSheet();
  s.replaceSync(`
    :host { display: block; }
    .me-collapse {
      overflow: hidden;
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows var(--_dur, 300ms) cubic-bezier(0.4,0,0.2,1);
    }
    .me-collapse--in { grid-template-rows: 1fr; }
    .me-collapse__inner { min-height: 0; }
  `);
  return s;
})();
var MECollapse = class extends MEElement {
  static observedAttributes = ["in", "timeout"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [_collapseSheet];
  }
  render() {
    if (this.shadow.querySelector(".me-collapse")) {
      this._sync();
      return;
    }
    this.shadow.innerHTML = `<div class="me-collapse"><div class="me-collapse__inner"><slot></slot></div></div>`;
    requestAnimationFrame(() => this._sync());
  }
  _sync() {
    const div = this.shadow.querySelector(".me-collapse");
    if (!div) return;
    div.style.setProperty("--_dur", (this.getAttribute("timeout") ?? "300") + "ms");
    div.classList.toggle("me-collapse--in", this.hasAttribute("in"));
  }
  onAttributeChanged() {
    this._sync();
  }
};
var _slideSheet = (() => {
  const s = new CSSStyleSheet();
  s.replaceSync(`
    :host { display: block; overflow: hidden; }
    .me-slide {
      transition: transform var(--_dur, 300ms) cubic-bezier(0.4,0,0.2,1);
      transform: var(--_exit, translateY(-100%));
    }
    .me-slide--in { transform: none; }
  `);
  return s;
})();
var MESlide = class extends MEElement {
  static observedAttributes = ["in", "direction", "timeout"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [_slideSheet];
  }
  render() {
    if (this.shadow.querySelector(".me-slide")) {
      this._sync();
      return;
    }
    this.shadow.innerHTML = `<div class="me-slide"><slot></slot></div>`;
    requestAnimationFrame(() => this._sync());
  }
  _sync() {
    const div = this.shadow.querySelector(".me-slide");
    if (!div) return;
    div.style.setProperty("--_dur", (this.getAttribute("timeout") ?? "300") + "ms");
    const exits = {
      down: "translateY(-100%)",
      up: "translateY(100%)",
      right: "translateX(-100%)",
      left: "translateX(100%)"
    };
    div.style.setProperty("--_exit", exits[this.getAttribute("direction") ?? "down"] ?? exits["down"]);
    div.classList.toggle("me-slide--in", this.hasAttribute("in"));
  }
  onAttributeChanged() {
    this._sync();
  }
};
customElements.define("me-fade", MEFade);
customElements.define("me-grow", MEGrow);
customElements.define("me-zoom", MEZoom);
customElements.define("me-collapse", MECollapse);
customElements.define("me-slide", MESlide);

// src/components/modal/modal.styles.ts
var sheet56 = new CSSStyleSheet();
sheet56.replaceSync(`
  :host {
    display: none;
    position: fixed;
    inset: 0;
    z-index: var(--me-zIndex-modal, 1300);
    align-items: center;
    justify-content: center;
  }
  :host([open]) { display: flex; }

  .me-modal__backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    -webkit-tap-highlight-color: transparent;
    animation: me-modal-backdrop-in var(--me-transitions-duration-standard, 300ms) cubic-bezier(0.4,0,0.2,1);
  }
  @keyframes me-modal-backdrop-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .me-modal__container {
    position: relative;
    z-index: 1;
    outline: none;
    animation: me-modal-in var(--me-transitions-duration-standard, 300ms) cubic-bezier(0.4,0,0.2,1);
  }
  @keyframes me-modal-in {
    from { opacity: 0; transform: scale(0.9); }
    to   { opacity: 1; transform: scale(1); }
  }
`);
var modal_styles_default = sheet56;

// src/components/modal/modal.ts
var MEModal = class extends MEElement {
  static observedAttributes = ["open", "disable-backdrop-click"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [modal_styles_default];
  }
  render() {
    if (this.shadow.querySelector(".me-modal__backdrop")) return;
    this.shadow.innerHTML = `
      <div class="me-modal__backdrop"></div>
      <div class="me-modal__container" tabindex="-1">
        <slot></slot>
      </div>
    `;
    this.shadow.querySelector(".me-modal__backdrop")?.addEventListener("click", this._onBackdropClick);
  }
  addEventListeners() {
    this.addEventListener("keydown", this._onKeyDown);
  }
  _onBackdropClick = () => {
    if (this.hasAttribute("disable-backdrop-click")) return;
    this.removeAttribute("open");
    this.dispatchEvent(new CustomEvent("me-close", { bubbles: true, composed: true }));
  };
  _onKeyDown = (e) => {
    if (e.key === "Escape") {
      this.removeAttribute("open");
      this.dispatchEvent(new CustomEvent("me-close", { bubbles: true, composed: true }));
    }
  };
  onAttributeChanged(name, _old, newVal) {
    if (name === "open" && newVal !== null) {
      requestAnimationFrame(() => {
        this.shadow.querySelector(".me-modal__container")?.focus();
      });
    }
  }
};
customElements.define("me-modal", MEModal);

// src/components/popover/popover.styles.ts
var sheet57 = new CSSStyleSheet();
sheet57.replaceSync(`
  :host {
    display: none;
    position: fixed;
    z-index: var(--me-zIndex-popover, 1200);
  }
  :host([open]) { display: block; }

  .me-popover__paper {
    background: var(--me-palette-background-paper, #fff);
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    box-shadow: var(--me-shadows-8,
      0px 5px 5px -3px rgba(0,0,0,.2),
      0px 8px 10px 1px rgba(0,0,0,.14),
      0px 3px 14px 2px rgba(0,0,0,.12));
    overflow: auto;
    max-width: calc(100vw - 32px);
    max-height: calc(100vh - 32px);
    animation: me-popover-in 150ms cubic-bezier(0.4,0,0.2,1);
  }
  @keyframes me-popover-in {
    from { opacity: 0; transform: scale(0.95); }
    to   { opacity: 1; transform: scale(1); }
  }

  .me-popover__backdrop {
    position: fixed;
    inset: 0;
  }
`);
var popover_styles_default = sheet57;

// src/components/popover/popover.ts
var MEPopover = class extends MEElement {
  static observedAttributes = [
    "open",
    "anchor",
    "anchor-origin-vertical",
    "anchor-origin-horizontal",
    "transform-origin-vertical",
    "transform-origin-horizontal"
  ];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [popover_styles_default];
  }
  render() {
    if (this.shadow.querySelector(".me-popover__paper")) return;
    this.shadow.innerHTML = `
      <div class="me-popover__backdrop"></div>
      <div class="me-popover__paper">
        <slot></slot>
      </div>
    `;
    this.shadow.querySelector(".me-popover__backdrop")?.addEventListener("click", this._onBackdropClick);
  }
  addEventListeners() {
    this.addEventListener("keydown", this._onKeyDown);
  }
  _onBackdropClick = () => {
    this.removeAttribute("open");
    this.dispatchEvent(new CustomEvent("me-close", { bubbles: true, composed: true }));
  };
  _onKeyDown = (e) => {
    if (e.key === "Escape") {
      this.removeAttribute("open");
      this.dispatchEvent(new CustomEvent("me-close", { bubbles: true, composed: true }));
    }
  };
  onAttributeChanged(name, _old, newVal) {
    if (name === "open" && newVal !== null) {
      requestAnimationFrame(() => this._position());
    }
  }
  _position() {
    const anchorSel = this.getAttribute("anchor");
    const anchor = anchorSel ? document.querySelector(anchorSel) : null;
    if (!anchor) return;
    const paper = this.shadow.querySelector(".me-popover__paper");
    if (!paper) return;
    const aRect = anchor.getBoundingClientRect();
    const anchorV = this.getAttribute("anchor-origin-vertical") ?? "bottom";
    const anchorH = this.getAttribute("anchor-origin-horizontal") ?? "left";
    let top = anchorV === "top" ? aRect.top : anchorV === "center" ? aRect.top + aRect.height / 2 : aRect.bottom;
    let left = anchorH === "right" ? aRect.right : anchorH === "center" ? aRect.left + aRect.width / 2 : aRect.left;
    const transformV = this.getAttribute("transform-origin-vertical") ?? "top";
    const transformH = this.getAttribute("transform-origin-horizontal") ?? "left";
    const pRect = paper.getBoundingClientRect();
    if (transformV === "bottom") top -= pRect.height;
    else if (transformV === "center") top -= pRect.height / 2;
    if (transformH === "right") left -= pRect.width;
    else if (transformH === "center") left -= pRect.width / 2;
    const pad = 8;
    top = Math.max(pad, Math.min(top, window.innerHeight - pRect.height - pad));
    left = Math.max(pad, Math.min(left, window.innerWidth - pRect.width - pad));
    this.style.top = `${top}px`;
    this.style.left = `${left}px`;
  }
};
customElements.define("me-popover", MEPopover);

// src/components/popper/popper.styles.ts
var sheet58 = new CSSStyleSheet();
sheet58.replaceSync(`
  :host {
    display: none;
    position: fixed;
    z-index: var(--me-zIndex-tooltip, 1500);
  }
  :host([open]) { display: block; }
`);
var popper_styles_default = sheet58;

// src/components/popper/popper.ts
var MEPopper = class extends MEElement {
  static observedAttributes = ["open", "anchor", "placement"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [popper_styles_default];
  }
  render() {
    if (this.shadow.querySelector("slot")) return;
    this.shadow.innerHTML = `<slot></slot>`;
  }
  onAttributeChanged(name, _old, newVal) {
    if (name === "open" && newVal !== null) {
      requestAnimationFrame(() => this._position());
    }
  }
  /** Re-compute position from anchor element */
  update() {
    this._position();
  }
  _position() {
    const anchorSel = this.getAttribute("anchor");
    const anchor = anchorSel ? document.querySelector(anchorSel) : null;
    if (!anchor) return;
    const placement = this.getAttribute("placement") ?? "bottom";
    const aRect = anchor.getBoundingClientRect();
    const myRect = this.getBoundingClientRect();
    const offset = 8;
    let top = 0;
    let left = 0;
    const [side, align = "center"] = placement.split("-");
    switch (side) {
      case "bottom":
        top = aRect.bottom + offset;
        left = align === "start" ? aRect.left : align === "end" ? aRect.right - myRect.width : aRect.left + aRect.width / 2 - myRect.width / 2;
        break;
      case "top":
        top = aRect.top - myRect.height - offset;
        left = align === "start" ? aRect.left : align === "end" ? aRect.right - myRect.width : aRect.left + aRect.width / 2 - myRect.width / 2;
        break;
      case "left":
        left = aRect.left - myRect.width - offset;
        top = align === "start" ? aRect.top : align === "end" ? aRect.bottom - myRect.height : aRect.top + aRect.height / 2 - myRect.height / 2;
        break;
      case "right":
        left = aRect.right + offset;
        top = align === "start" ? aRect.top : align === "end" ? aRect.bottom - myRect.height : aRect.top + aRect.height / 2 - myRect.height / 2;
        break;
    }
    const pad = 4;
    top = Math.max(pad, Math.min(top, window.innerHeight - myRect.height - pad));
    left = Math.max(pad, Math.min(left, window.innerWidth - myRect.width - pad));
    this.style.top = `${top}px`;
    this.style.left = `${left}px`;
  }
};
customElements.define("me-popper", MEPopper);

// src/components/portal/portal.ts
var MEPortal = class extends HTMLElement {
  _placeholder = null;
  _movedNodes = [];
  get container() {
    const sel = this.getAttribute("container");
    return (sel ? document.querySelector(sel) : null) ?? document.body;
  }
  connectedCallback() {
    this._placeholder = document.createComment("me-portal");
    this.parentNode?.insertBefore(this._placeholder, this);
    this._movedNodes = Array.from(this.childNodes);
    this._movedNodes.forEach((n) => this.container.appendChild(n));
    this.style.display = "none";
  }
  disconnectedCallback() {
    if (this._placeholder?.parentNode) {
      this._movedNodes.forEach((n) => this._placeholder.parentNode.insertBefore(n, this._placeholder));
      this._placeholder.remove();
    }
    this._movedNodes = [];
    this._placeholder = null;
  }
};
customElements.define("me-portal", MEPortal);

// src/components/speed-dial/speed-dial.styles.ts
var sheet59 = new CSSStyleSheet();
sheet59.replaceSync(`
  :host {
    display: inline-flex;
    flex-direction: column-reverse;
    align-items: center;
    position: relative;
  }
  :host([direction="up"])    { flex-direction: column-reverse; }
  :host([direction="down"])  { flex-direction: column; }
  :host([direction="left"])  { flex-direction: row-reverse; }
  :host([direction="right"]) { flex-direction: row; }

  .me-speed-dial__fab {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    outline: none;
    background-color: var(--me-palette-primary-main, #1976d2);
    color: var(--me-palette-primary-contrastText, #fff);
    box-shadow: var(--me-shadows-6,
      0px 3px 5px -1px rgba(0,0,0,.2),
      0px 6px 10px rgba(0,0,0,.14),
      0px 1px 18px rgba(0,0,0,.12));
    transition: box-shadow 250ms cubic-bezier(0.4,0,0.2,1),
                transform 250ms cubic-bezier(0.4,0,0.2,1),
                background-color 250ms cubic-bezier(0.4,0,0.2,1);
    -webkit-tap-highlight-color: transparent;
  }
  .me-speed-dial__fab:hover {
    box-shadow: var(--me-shadows-8,
      0px 5px 5px -3px rgba(0,0,0,.2),
      0px 8px 10px 1px rgba(0,0,0,.14),
      0px 3px 14px 2px rgba(0,0,0,.12));
  }
  .me-speed-dial__fab svg { pointer-events: none; }

  :host([open]) .me-speed-dial__fab-icon--open    { display: none; }
  :host(:not([open])) .me-speed-dial__fab-icon--close { display: none; }

  .me-speed-dial__actions {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 8px;
    padding-bottom: 8px;
    visibility: hidden;
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 200ms cubic-bezier(0.4,0,0.2,1),
                transform 200ms cubic-bezier(0.4,0,0.2,1),
                visibility 0ms linear 200ms;
    transform-origin: bottom center;
  }
  :host([direction="down"])  .me-speed-dial__actions { flex-direction: column; padding-bottom: 0; padding-top: 8px; transform-origin: top center; }
  :host([direction="left"])  .me-speed-dial__actions { flex-direction: row-reverse; padding-bottom: 0; padding-right: 8px; transform-origin: right center; }
  :host([direction="right"]) .me-speed-dial__actions { flex-direction: row; padding-bottom: 0; padding-left: 8px; transform-origin: left center; }

  :host([open]) .me-speed-dial__actions {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
    transition-delay: 0ms;
  }
`);
var speed_dial_styles_default = sheet59;
var actionSheet = (() => {
  const s = new CSSStyleSheet();
  s.replaceSync(`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      position: relative;
    }
    .me-speed-dial-action__btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      outline: none;
      background: var(--me-palette-background-paper, #fff);
      color: var(--me-palette-text-secondary, rgba(0,0,0,0.54));
      box-shadow: var(--me-shadows-4,
        0px 2px 4px -1px rgba(0,0,0,.2),
        0px 4px 5px rgba(0,0,0,.14),
        0px 1px 10px rgba(0,0,0,.12));
      transition: box-shadow 250ms cubic-bezier(0.4,0,0.2,1),
                  background-color 250ms cubic-bezier(0.4,0,0.2,1);
      -webkit-tap-highlight-color: transparent;
    }
    .me-speed-dial-action__btn:hover {
      background: var(--me-palette-grey-100, #f5f5f5);
    }
    .me-speed-dial-action__tooltip {
      position: absolute;
      right: calc(100% + 8px);
      white-space: nowrap;
      background: var(--me-palette-grey-700, #616161);
      color: #fff;
      font-size: 0.75rem;
      padding: 4px 8px;
      border-radius: 4px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 150ms;
    }
    :host(:hover) .me-speed-dial-action__tooltip { opacity: 1; }
  `);
  return s;
})();

// src/components/speed-dial/speed-dial.ts
var CLOSE_ICON2 = `<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
var DEFAULT_ICON = `<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/></svg>`;
var MESpeedDial = class extends MEElement {
  static observedAttributes = ["open", "direction"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [speed_dial_styles_default];
  }
  render() {
    if (this.shadow.querySelector(".me-speed-dial__fab")) return;
    this.shadow.innerHTML = `
      <div class="me-speed-dial__actions">
        <slot></slot>
      </div>
      <button class="me-speed-dial__fab" type="button" aria-label="${this.getAttribute("aria-label") ?? "Speed dial"}">
        <span class="me-speed-dial__fab-icon--open"><slot name="icon">${DEFAULT_ICON}</slot></span>
        <span class="me-speed-dial__fab-icon--close">${CLOSE_ICON2}</span>
      </button>
    `;
    this.shadow.querySelector(".me-speed-dial__fab")?.addEventListener("click", this._toggleOpen);
  }
  addEventListeners() {
    document.addEventListener("click", this._onDocClick);
    this.addEventListener("keydown", this._onKeyDown);
  }
  cleanup() {
    document.removeEventListener("click", this._onDocClick);
  }
  _toggleOpen = () => {
    this.toggleAttribute("open");
    this.dispatchEvent(new CustomEvent("me-open-change", {
      detail: { open: this.hasAttribute("open") },
      bubbles: true,
      composed: true
    }));
  };
  _onDocClick = (e) => {
    if (this.hasAttribute("open") && !this.contains(e.target)) {
      this.removeAttribute("open");
    }
  };
  _onKeyDown = (e) => {
    if (e.key === "Escape") this.removeAttribute("open");
  };
};
var MESpeedDialAction = class extends MEElement {
  static observedAttributes = ["tooltip-title", "disabled"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [actionSheet];
  }
  render() {
    if (this.shadow.querySelector(".me-speed-dial-action__btn")) return;
    const disabled = this.hasAttribute("disabled");
    const tooltip = this.getAttribute("tooltip-title") ?? "";
    this.shadow.innerHTML = `
      ${tooltip ? `<span class="me-speed-dial-action__tooltip">${tooltip}</span>` : ""}
      <button class="me-speed-dial-action__btn" type="button" ${disabled ? "disabled" : ""}
              aria-label="${tooltip}">
        <slot></slot>
      </button>
    `;
  }
  addEventListeners() {
    this.shadow.querySelector("button")?.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("me-click", { bubbles: true, composed: true }));
      this.closest("me-speed-dial")?.removeAttribute("open");
    });
  }
};
customElements.define("me-speed-dial", MESpeedDial);
customElements.define("me-speed-dial-action", MESpeedDialAction);

// src/components/stepper/stepper.styles.ts
var stepperSheet = (() => {
  const s = new CSSStyleSheet();
  s.replaceSync(`
    :host {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: 100%;
    }
    :host([orientation="vertical"]) {
      flex-direction: column;
      align-items: stretch;
    }
    .me-stepper { display: contents; }
  `);
  return s;
})();
var stepSheet = (() => {
  const s = new CSSStyleSheet();
  s.replaceSync(`
    :host {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      position: relative;
    }
    :host([orientation="vertical"]) {
      flex: 0 0 auto;
      flex-direction: row;
      align-items: flex-start;
    }

    .me-step__connector {
      position: absolute;
      top: 12px;
      left: calc(-50% + 20px);
      right: calc(50% + 20px);
      height: 1px;
      background: var(--me-palette-divider, rgba(0,0,0,0.12));
    }
    :host([step-index="0"]) .me-step__connector { display: none; }
    :host([completed]) .me-step__connector,
    :host([active]) .me-step__connector { background: var(--me-palette-primary-main, #1976d2); }

    :host([orientation="vertical"]) .me-step__connector { display: none; }

    .me-step__label-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }
    :host([orientation="vertical"]) .me-step__label-container {
      flex-direction: row;
      align-items: flex-start;
      gap: 8px;
    }

    .me-step__icon {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--me-palette-text-disabled, rgba(0,0,0,0.38));
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 500;
      flex-shrink: 0;
      transition: background 250ms cubic-bezier(0.4,0,0.2,1);
    }
    :host([active]) .me-step__icon {
      background: var(--me-palette-primary-main, #1976d2);
    }
    :host([completed]) .me-step__icon {
      background: var(--me-palette-primary-main, #1976d2);
    }
    :host([error]) .me-step__icon {
      background: var(--me-palette-error-main, #d32f2f);
    }

    .me-step__icon-check { display: none; }
    :host([completed]) .me-step__icon-num { display: none; }
    :host([completed]) .me-step__icon-check { display: block; }

    .me-step__slot-wrapper {
      display: contents;
    }

    /* Vertical step content connector */
    .me-step__vertical-connector {
      display: none;
      width: 1px;
      min-height: 24px;
      background: var(--me-palette-divider, rgba(0,0,0,0.12));
      margin: 4px 0 4px 11px;
    }
    :host([orientation="vertical"]) .me-step__vertical-connector { display: block; }
  `);
  return s;
})();
var stepLabelSheet = (() => {
  const s = new CSSStyleSheet();
  s.replaceSync(`
    :host {
      display: block;
      font-size: 0.875rem;
      color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
      white-space: nowrap;
    }
    :host([active]) {
      color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
      font-weight: 500;
    }
    :host([completed]) {
      color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    }
    :host([error]) {
      color: var(--me-palette-error-main, #d32f2f);
    }
  `);
  return s;
})();
var stepContentSheet = (() => {
  const s = new CSSStyleSheet();
  s.replaceSync(`
    :host {
      display: grid;
      grid-template-rows: 0fr;
      overflow: hidden;
      transition: grid-template-rows 250ms cubic-bezier(0.4,0,0.2,1);
      margin-left: 20px;
      padding-left: 12px;
      border-left: 1px solid var(--me-palette-divider, rgba(0,0,0,0.12));
    }
    :host([active]) { grid-template-rows: 1fr; }
    .me-step-content__inner { min-height: 0; padding: 8px 0 16px; }
  `);
  return s;
})();

// src/components/stepper/stepper.ts
var CHECK_ICON = `<svg class="me-step__icon-check" viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"/></svg>`;
var ERROR_ICON = `<svg class="me-step__icon-check" viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`;
var MEStepper = class extends MEElement {
  static observedAttributes = ["active-step", "orientation"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [stepperSheet];
  }
  render() {
    if (this.shadow.querySelector("slot")) {
      this._syncSteps();
      return;
    }
    this.shadow.innerHTML = `<slot></slot>`;
    const slot = this.shadow.querySelector("slot");
    slot.addEventListener("slotchange", () => this._syncSteps());
    requestAnimationFrame(() => this._syncSteps());
  }
  _syncSteps() {
    const slot = this.shadow.querySelector("slot");
    const steps = (slot?.assignedElements() ?? []).filter((el) => el.tagName.toLowerCase() === "me-step");
    const activeStep = parseInt(this.getAttribute("active-step") ?? "0");
    const orientation = this.getAttribute("orientation") ?? "horizontal";
    steps.forEach((step, i) => {
      step.setAttribute("step-index", String(i));
      step.setAttribute("orientation", orientation);
      step.toggleAttribute("active", i === activeStep);
      step.toggleAttribute("completed", i < activeStep);
      const label = step.querySelector("me-step-label");
      if (label) {
        label.toggleAttribute("active", i === activeStep);
        label.toggleAttribute("completed", i < activeStep);
        label.toggleAttribute("error", step.hasAttribute("error"));
      }
      const content = step.querySelector("me-step-content");
      if (content) {
        content.toggleAttribute("active", i === activeStep);
      }
    });
  }
  onAttributeChanged() {
    this._syncSteps();
  }
};
var MEStep = class extends MEElement {
  static observedAttributes = ["step-index", "active", "completed", "error", "orientation"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [stepSheet];
  }
  render() {
    if (this.shadow.querySelector(".me-step__icon")) {
      this._syncState();
      return;
    }
    const index = parseInt(this.getAttribute("step-index") ?? "0");
    this.shadow.innerHTML = `
      <span class="me-step__connector"></span>
      <div class="me-step__label-container">
        <span class="me-step__icon">
          <span class="me-step__icon-num">${index + 1}</span>
          ${CHECK_ICON}
          ${ERROR_ICON.replace('class="me-step__icon-check"', 'class="me-step__icon-error" style="display:none"')}
        </span>
        <div class="me-step__slot-wrapper"><slot></slot></div>
      </div>
      <div class="me-step__vertical-connector"></div>
    `;
    this._syncState();
  }
  _syncState() {
    const numEl = this.shadow.querySelector(".me-step__icon-num");
    const index = parseInt(this.getAttribute("step-index") ?? "0");
    if (numEl) numEl.textContent = String(index + 1);
  }
  onAttributeChanged() {
    if (this.shadow.querySelector(".me-step__icon")) this._syncState();
    else this.render();
  }
};
var MEStepLabel = class extends MEElement {
  static observedAttributes = ["active", "completed", "error"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [stepLabelSheet];
  }
  render() {
    if (this.shadow.querySelector("slot")) return;
    this.shadow.innerHTML = `<slot></slot>`;
  }
};
var MEStepContent = class extends MEElement {
  static observedAttributes = ["active"];
  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [stepContentSheet];
  }
  render() {
    if (this.shadow.querySelector(".me-step-content__inner")) return;
    this.shadow.innerHTML = `<div class="me-step-content__inner"><slot></slot></div>`;
  }
};
customElements.define("me-stepper", MEStepper);
customElements.define("me-step", MEStep);
customElements.define("me-step-label", MEStepLabel);
customElements.define("me-step-content", MEStepContent);

// src/components/autocomplete/autocomplete.styles.ts
var sheet60 = new CSSStyleSheet();
sheet60.replaceSync(`
  :host {
    display: inline-flex;
    flex-direction: column;
    position: relative;
    vertical-align: top;
  }

  .me-autocomplete__input-wrap {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .me-autocomplete__input {
    width: 100%;
    font: inherit;
    font-size: 1rem;
    line-height: 1.4375em;
    letter-spacing: 0.00938em;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    background: transparent;
    border: 1px solid var(--me-palette-divider, rgba(0,0,0,0.23));
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    padding: 16.5px 40px 16.5px 14px;
    outline: none;
    box-sizing: border-box;
    transition: border-color 200ms cubic-bezier(0.4,0,0.2,1);
    background-color: var(--me-palette-background-paper, #fff);
  }
  .me-autocomplete__input:hover { border-color: var(--me-palette-text-primary, rgba(0,0,0,0.87)); }
  .me-autocomplete__input:focus { border-color: var(--me-palette-primary-main, #1976d2); border-width: 2px; padding: 15.5px 39px 15.5px 13px; }

  .me-autocomplete__label {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1rem;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
    pointer-events: none;
    transition: all 150ms cubic-bezier(0.4,0,0.2,1);
    background: var(--me-palette-background-paper, #fff);
    padding: 0 4px;
  }
  .me-autocomplete__input:focus ~ .me-autocomplete__label,
  .me-autocomplete--has-value .me-autocomplete__label {
    top: 0;
    font-size: 0.75rem;
    color: var(--me-palette-primary-main, #1976d2);
  }
  .me-autocomplete__input:not(:focus) ~ .me-autocomplete__label {
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
  }
  .me-autocomplete--has-value:not(:focus-within) .me-autocomplete__label {
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
  }

  .me-autocomplete__arrow {
    position: absolute;
    right: 9px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: var(--me-palette-action-active, rgba(0,0,0,0.54));
    transition: transform 200ms;
    display: flex;
  }
  :host([open]) .me-autocomplete__arrow { transform: translateY(-50%) rotate(180deg); }

  .me-autocomplete__clear {
    position: absolute;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    border-radius: 50%;
    color: var(--me-palette-action-active, rgba(0,0,0,0.54));
    display: none;
    align-items: center;
    justify-content: center;
  }
  .me-autocomplete--has-value .me-autocomplete__clear { display: flex; }

  .me-autocomplete__listbox {
    display: none;
    position: fixed;
    z-index: var(--me-zIndex-modal, 1300);
    background: var(--me-palette-background-paper, #fff);
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    box-shadow: var(--me-shadows-8,
      0px 5px 5px -3px rgba(0,0,0,.2),
      0px 8px 10px 1px rgba(0,0,0,.14),
      0px 3px 14px 2px rgba(0,0,0,.12));
    max-height: 256px;
    overflow-y: auto;
    padding: 8px 0;
    min-width: 100px;
  }
  :host([open]) .me-autocomplete__listbox { display: block; }

  .me-autocomplete__option {
    padding: 6px 16px;
    font-size: 1rem;
    cursor: pointer;
    color: var(--me-palette-text-primary, rgba(0,0,0,0.87));
    transition: background 150ms;
    list-style: none;
  }
  .me-autocomplete__option:hover,
  .me-autocomplete__option[aria-selected="true"],
  .me-autocomplete__option.focused {
    background: var(--me-palette-action-hover, rgba(0,0,0,0.04));
  }
  .me-autocomplete__option[aria-selected="true"] {
    background: color-mix(in srgb, var(--me-palette-primary-main, #1976d2) 8%, transparent);
  }
  .me-autocomplete__no-options {
    padding: 12px 16px;
    font-size: 1rem;
    color: var(--me-palette-text-secondary, rgba(0,0,0,0.6));
  }
`);
var autocomplete_styles_default = sheet60;

// src/components/autocomplete/autocomplete.ts
function optLabel(o) {
  return typeof o === "string" ? o : o.label;
}
var MEAutocomplete = class extends MEElement {
  static observedAttributes = ["options", "value", "label", "placeholder", "disabled", "free-solo", "multiple"];
  _focusedIndex = -1;
  _inputVal = "";
  constructor() {
    super({ mode: "open", delegatesFocus: true });
    this.shadow.adoptedStyleSheets = [autocomplete_styles_default];
  }
  get _options() {
    const attr = this.getAttribute("options");
    if (!attr) return [];
    try {
      return JSON.parse(attr);
    } catch {
      return [];
    }
  }
  get _filtered() {
    const q = this._inputVal.toLowerCase();
    if (!q) return this._options;
    return this._options.filter((o) => optLabel(o).toLowerCase().includes(q));
  }
  get _value() {
    return this.getAttribute("value") ?? "";
  }
  render() {
    if (this.shadow.querySelector(".me-autocomplete__input")) {
      this._syncListbox();
      return;
    }
    const label = this.getAttribute("label") ?? "";
    const placeholder = this.getAttribute("placeholder") ?? "";
    const disabled = this.hasAttribute("disabled");
    const wrap = document.createElement("div");
    wrap.className = "me-autocomplete__input-wrap";
    wrap.innerHTML = `
      <input class="me-autocomplete__input" type="text" autocomplete="off"
             placeholder="${placeholder}" ${disabled ? "disabled" : ""}
             role="combobox" aria-autocomplete="list" aria-expanded="false">
      ${label ? `<label class="me-autocomplete__label">${label}</label>` : ""}
      <button class="me-autocomplete__clear" type="button" tabindex="-1" aria-label="Clear">
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
      </button>
      <span class="me-autocomplete__arrow">
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M7 10l5 5 5-5z"/></svg>
      </span>
    `;
    const listbox = document.createElement("ul");
    listbox.className = "me-autocomplete__listbox";
    listbox.setAttribute("role", "listbox");
    this.shadow.appendChild(wrap);
    this.shadow.appendChild(listbox);
    if (this._value) {
      const inp = this.shadow.querySelector(".me-autocomplete__input");
      if (inp) {
        inp.value = this._value;
        this._inputVal = this._value;
      }
      wrap.classList.add("me-autocomplete--has-value");
    }
    this._syncListbox();
  }
  addEventListeners() {
    const inp = this.shadow.querySelector(".me-autocomplete__input");
    if (!inp) return;
    inp.addEventListener("input", this._onInput);
    inp.addEventListener("focus", this._onFocus);
    inp.addEventListener("blur", this._onBlur);
    inp.addEventListener("keydown", this._onKeyDown);
    this.shadow.querySelector(".me-autocomplete__clear")?.addEventListener("click", this._onClear);
    this.shadow.querySelector(".me-autocomplete__listbox")?.addEventListener("mousedown", this._onOptionMouseDown);
  }
  _onInput = () => {
    const inp = this.shadow.querySelector(".me-autocomplete__input");
    if (!inp) return;
    this._inputVal = inp.value;
    this._focusedIndex = -1;
    const wrap = this.shadow.querySelector(".me-autocomplete__input-wrap");
    wrap?.classList.toggle("me-autocomplete--has-value", this._inputVal.length > 0);
    this.toggleAttribute("open", true);
    this._syncListbox();
  };
  _onFocus = () => {
    this.toggleAttribute("open", true);
    this._syncListbox();
  };
  _onBlur = () => {
    setTimeout(() => this.removeAttribute("open"), 150);
  };
  _onClear = () => {
    const inp = this.shadow.querySelector(".me-autocomplete__input");
    if (!inp) return;
    inp.value = "";
    this._inputVal = "";
    this._focusedIndex = -1;
    this.removeAttribute("value");
    this.shadow.querySelector(".me-autocomplete__input-wrap")?.classList.remove("me-autocomplete--has-value");
    this.removeAttribute("open");
    this.dispatchEvent(new CustomEvent("me-change", { detail: { value: "" }, bubbles: true, composed: true }));
  };
  _onKeyDown = (e) => {
    const opts = this._filtered;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        this.toggleAttribute("open", true);
        this._focusedIndex = Math.min(this._focusedIndex + 1, opts.length - 1);
        this._syncListbox();
        break;
      case "ArrowUp":
        e.preventDefault();
        this._focusedIndex = Math.max(this._focusedIndex - 1, 0);
        this._syncListbox();
        break;
      case "Enter":
        if (this._focusedIndex >= 0 && opts[this._focusedIndex]) {
          e.preventDefault();
          this._selectOption(opts[this._focusedIndex]);
        }
        break;
      case "Escape":
        this.removeAttribute("open");
        break;
    }
  };
  _onOptionMouseDown = (e) => {
    const li = e.target.closest(".me-autocomplete__option");
    if (!li) return;
    const idx = parseInt(li.dataset.index ?? "-1");
    const opt = this._filtered[idx];
    if (opt !== void 0) this._selectOption(opt);
  };
  _selectOption(opt) {
    const label = optLabel(opt);
    const value = typeof opt === "string" ? opt : opt.value;
    const inp = this.shadow.querySelector(".me-autocomplete__input");
    if (inp) {
      inp.value = label;
      this._inputVal = label;
    }
    this.setAttribute("value", value);
    this.shadow.querySelector(".me-autocomplete__input-wrap")?.classList.add("me-autocomplete--has-value");
    this.removeAttribute("open");
    this.dispatchEvent(new CustomEvent("me-change", { detail: { value, label }, bubbles: true, composed: true }));
  }
  _syncListbox() {
    const listbox = this.shadow.querySelector(".me-autocomplete__listbox");
    if (!listbox) return;
    const opts = this._filtered;
    if (opts.length === 0) {
      listbox.innerHTML = `<li class="me-autocomplete__no-options">No options</li>`;
    } else {
      listbox.innerHTML = opts.map((o, i) => {
        const label = optLabel(o);
        const val = typeof o === "string" ? o : o.value;
        const focused = i === this._focusedIndex;
        const selected = val === this._value;
        return `<li class="me-autocomplete__option${focused ? " focused" : ""}"
                    role="option" aria-selected="${selected}" data-index="${i}">${label}</li>`;
      }).join("");
    }
    if (this.hasAttribute("open")) {
      this._positionListbox();
    }
  }
  _positionListbox() {
    const inp = this.shadow.querySelector(".me-autocomplete__input");
    const listbox = this.shadow.querySelector(".me-autocomplete__listbox");
    if (!inp || !listbox) return;
    const rect = inp.getBoundingClientRect();
    listbox.style.top = `${rect.bottom + 4}px`;
    listbox.style.left = `${rect.left}px`;
    listbox.style.width = `${rect.width}px`;
  }
  onAttributeChanged(name, _old, _new) {
    if (name === "open" && _new !== null) this._positionListbox();
    if (name === "options") this._syncListbox();
  }
};
customElements.define("me-autocomplete", MEAutocomplete);

// src/utils/elevation.ts
function elevationVar(level) {
  return `var(--me-shadows-${level})`;
}

// src/utils/transitions.ts
function transition(properties, durationVar = "var(--me-transitions-duration-standard, 300ms)", easingVar = "var(--me-transitions-easing-easeInOut, cubic-bezier(0.4,0,0.2,1))") {
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
