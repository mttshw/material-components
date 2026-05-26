import { MEGrid } from './grid.js';

if (!customElements.get('me-grid')) {
  customElements.define('me-grid', MEGrid);
}

export { MEGrid };
