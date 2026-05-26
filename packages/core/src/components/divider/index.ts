import { MEDivider } from './divider.js';

if (!customElements.get('me-divider')) {
  customElements.define('me-divider', MEDivider);
}

export { MEDivider };
