import { MECssBaseline } from './css-baseline.js';

if (!customElements.get('me-css-baseline')) {
  customElements.define('me-css-baseline', MECssBaseline);
}

export { MECssBaseline };
