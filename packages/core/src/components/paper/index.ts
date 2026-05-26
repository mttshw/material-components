import { MEPaper } from './paper.js';

if (!customElements.get('me-paper')) {
  customElements.define('me-paper', MEPaper);
}

export { MEPaper };
