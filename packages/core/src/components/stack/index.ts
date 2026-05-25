import { MCStack } from './stack.js';

if (!customElements.get('mc-stack')) {
  customElements.define('mc-stack', MCStack);
}

export { MCStack };
