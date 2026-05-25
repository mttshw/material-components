import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const nameFlag = args.indexOf('--name');
if (nameFlag === -1 || !args[nameFlag + 1]) {
  console.error('Usage: npm run new -- --name <component-name>');
  process.exit(1);
}

const kebab = args[nameFlag + 1].toLowerCase().replace(/\s+/g, '-');
const pascal = kebab
  .split('-')
  .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
  .join('');
const className = `MC${pascal}`;
const elementName = `mc-${kebab}`;

const dir = path.resolve(
  __dirname,
  '../packages/core/src/components',
  kebab,
);

if (fs.existsSync(dir)) {
  console.error(`Component "${kebab}" already exists at ${dir}`);
  process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });

// component.ts
fs.writeFileSync(
  path.join(dir, `${kebab}.ts`),
  `import { MCElement } from '../../base/mc-element.js';
import sheet from './${kebab}.styles.js';

export class ${className} extends MCElement {
  static observedAttributes: string[] = [];

  constructor() {
    super();
    this.shadow.adoptedStyleSheets = [sheet];
  }

  protected render(): void {
    this.shadow.innerHTML = \`
      <div class="${elementName}">
        <slot></slot>
      </div>
    \`;
  }
}
`,
);

// component.styles.ts
fs.writeFileSync(
  path.join(dir, `${kebab}.styles.ts`),
  `const sheet = new CSSStyleSheet();
sheet.replaceSync(\`
  :host {
    display: inline-flex;
  }

  .${elementName} {
    /* styles go here */
  }
\`);

export default sheet;
`,
);

// component.test.ts
fs.writeFileSync(
  path.join(dir, `${kebab}.test.ts`),
  `import { fixture, html, expect } from '@open-wc/testing';
import './${kebab}.js';

describe('${elementName}', () => {
  it('renders', async () => {
    const el = await fixture(html\`<${elementName}></${elementName}>\`);
    expect(el.shadowRoot?.querySelector('.${elementName}')).to.exist;
  });
});
`,
);

// index.ts
fs.writeFileSync(
  path.join(dir, 'index.ts'),
  `import { ${className} } from './${kebab}.js';

if (!customElements.get('${elementName}')) {
  customElements.define('${elementName}', ${className});
}

export { ${className} };
`,
);

console.log(`Scaffolded ${elementName} at packages/core/src/components/${kebab}/`);
