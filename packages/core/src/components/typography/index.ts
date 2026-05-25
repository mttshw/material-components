import { MCTypography } from './typography.js';

if (!customElements.get('mc-typography')) {
  customElements.define('mc-typography', MCTypography);
}

export { MCTypography };
