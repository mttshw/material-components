import { MEIconButton } from './icon-button.js';

if (!customElements.get('me-icon-button')) {
  customElements.define('me-icon-button', MEIconButton);
}

export { MEIconButton };
