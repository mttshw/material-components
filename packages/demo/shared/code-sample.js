class CodeSample extends HTMLElement {
  connectedCallback() {
    const raw = this.innerHTML.trim();
    const escaped = raw
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');

    this.innerHTML = `
      <div class="code-sample">
        <button class="copy-btn" title="Copy to clipboard">Copy</button>
        <pre><code class="language-html">${this._escape(escaped)}</code></pre>
      </div>
    `;

    this.querySelector('.copy-btn').addEventListener('click', () => {
      navigator.clipboard.writeText(escaped).then(() => {
        const btn = this.querySelector('.copy-btn');
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      });
    });
  }

  _escape(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}

customElements.define('code-sample', CodeSample);

const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  .code-sample {
    position: relative;
    background: #1e1e1e;
    border-radius: 8px;
    margin-block: 16px;
    overflow: hidden;
  }
  .code-sample pre {
    margin: 0;
    padding: 16px;
    overflow-x: auto;
  }
  .code-sample code {
    font-family: "Roboto Mono", monospace;
    font-size: 0.8125rem;
    color: #d4d4d4;
    background: none;
    padding: 0;
    border-radius: 0;
  }
  .copy-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(255,255,255,0.1);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 4px 10px;
    font-size: 0.75rem;
    cursor: pointer;
  }
  .copy-btn:hover { background: rgba(255,255,255,0.2); }
`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
