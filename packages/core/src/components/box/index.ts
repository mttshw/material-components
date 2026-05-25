import { MCBox } from './box.js';

if (!customElements.get('mc-box')) {
  customElements.define('mc-box', MCBox);
}

export { MCBox };
