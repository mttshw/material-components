import { MEStack } from './stack.js';

if (!customElements.get('me-stack')) {
  customElements.define('me-stack', MEStack);
}

export { MEStack };
