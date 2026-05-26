import { MEContainer } from './container.js';

if (!customElements.get('me-container')) {
  customElements.define('me-container', MEContainer);
}

export { MEContainer };
