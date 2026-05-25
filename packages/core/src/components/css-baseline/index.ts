import { MCCssBaseline } from './css-baseline.js';

if (!customElements.get('mc-css-baseline')) {
  customElements.define('mc-css-baseline', MCCssBaseline);
}

export { MCCssBaseline };
