import { MCIconButton } from './icon-button.js';

if (!customElements.get('mc-icon-button')) {
  customElements.define('mc-icon-button', MCIconButton);
}

export { MCIconButton };
