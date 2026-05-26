import { MEIcon } from './icon.js';

if (!customElements.get('me-icon')) {
  customElements.define('me-icon', MEIcon);
}

export { MEIcon };
