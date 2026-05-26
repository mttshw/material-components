// Theme system
export { METhemeProvider } from './theme/theme-provider.js';
export { defaultTheme } from './theme/default-theme.js';
export { themeToVars } from './theme/css-variables.js';
export type { METheme, METhemeInput, PaletteColor, TypographyStyle } from './theme/types.js';

// Base class
export { MEElement } from './base/me-element.js';

// Components (each self-registers its custom element on import)
export * from './components/index.js';

// Utilities
export { RippleController } from './utils/ripple.js';
export { elevationVar } from './utils/elevation.js';
export { transition } from './utils/transitions.js';
export { dispatch, getAttr, getBoolAttr } from './utils/dom.js';
