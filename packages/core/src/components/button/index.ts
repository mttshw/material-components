import { MEButton } from './button.js';

if (!customElements.get('me-button')) {
  customElements.define('me-button', MEButton);
}

export { MEButton };
