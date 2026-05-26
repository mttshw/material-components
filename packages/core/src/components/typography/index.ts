import { METypography } from './typography.js';

if (!customElements.get('me-typography')) {
  customElements.define('me-typography', METypography);
}

export { METypography };
