export interface PaletteColor {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
}

export interface TypographyStyle {
  fontFamily?: string;
  fontWeight?: number | string;
  fontSize?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string | number;
  textTransform?: string;
}

export interface MCTheme {
  palette: {
    mode: 'light' | 'dark';
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    warning: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
    grey: Record<string, string>;
    text: { primary: string; secondary: string; disabled: string };
    divider: string;
    background: { default: string; paper: string };
    action: {
      active: string;
      hover: string;
      hoverOpacity: number;
      selected: string;
      selectedOpacity: number;
      disabled: string;
      disabledBackground: string;
      disabledOpacity: number;
      focus: string;
      focusOpacity: number;
      activatedOpacity: number;
    };
    common: { black: string; white: string };
  };
  typography: {
    fontFamily: string;
    fontSize: number;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    h1: TypographyStyle;
    h2: TypographyStyle;
    h3: TypographyStyle;
    h4: TypographyStyle;
    h5: TypographyStyle;
    h6: TypographyStyle;
    subtitle1: TypographyStyle;
    subtitle2: TypographyStyle;
    body1: TypographyStyle;
    body2: TypographyStyle;
    button: TypographyStyle;
    caption: TypographyStyle;
    overline: TypographyStyle;
  };
  spacing: number | ((factor: number) => string);
  shape: { borderRadius: number };
  shadows: string[];
  transitions: {
    easing: { easeInOut: string; easeOut: string; easeIn: string; sharp: string };
    duration: {
      shortest: number;
      shorter: number;
      short: number;
      standard: number;
      complex: number;
      enteringScreen: number;
      leavingScreen: number;
    };
  };
  zIndex: {
    mobileStepper: number;
    speedDial: number;
    appBar: number;
    drawer: number;
    modal: number;
    snackbar: number;
    tooltip: number;
  };
  breakpoints: {
    values: { xs: number; sm: number; md: number; lg: number; xl: number };
  };
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type MCThemeInput = DeepPartial<MCTheme>;
