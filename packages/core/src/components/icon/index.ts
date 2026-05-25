import { MCIcon } from './icon.js';

if (!customElements.get('mc-icon')) {
  customElements.define('mc-icon', MCIcon);
}

export { MCIcon };
