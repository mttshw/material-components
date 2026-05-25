import { MCGrid } from './grid.js';

if (!customElements.get('mc-grid')) {
  customElements.define('mc-grid', MCGrid);
}

export { MCGrid };
