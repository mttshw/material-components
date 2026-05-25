import { MCPaper } from './paper.js';

if (!customElements.get('mc-paper')) {
  customElements.define('mc-paper', MCPaper);
}

export { MCPaper };
