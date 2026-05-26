import { MEBox } from './box.js';

if (!customElements.get('me-box')) {
  customElements.define('me-box', MEBox);
}

export { MEBox };
