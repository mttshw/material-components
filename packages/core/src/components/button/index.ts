import { MCButton } from './button.js';

if (!customElements.get('mc-button')) {
  customElements.define('mc-button', MCButton);
}

export { MCButton };
