import { MCDivider } from './divider.js';

if (!customElements.get('mc-divider')) {
  customElements.define('mc-divider', MCDivider);
}

export { MCDivider };
