import { MCContainer } from './container.js';

if (!customElements.get('mc-container')) {
  customElements.define('mc-container', MCContainer);
}

export { MCContainer };
