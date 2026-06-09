/**
 * Reads SVG files from @material-icons/svg and generates:
 *   packages/icons/src/generated/icons-data.ts  — TypeScript source for the npm package
 *   packages/icons/dist/icons-meta.json          — icon names/categories/tags for the demo
 *
 * Run: npm run generate:icons (from root) or npm run generate (from packages/icons)
 * Requires: @material-icons/svg installed in packages/icons/node_modules
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ICONS_PKG_DIR = path.join(ROOT, 'packages/icons');
const GENERATED_DIR = path.join(ICONS_PKG_DIR, 'src/generated');

// Resolve @material-icons/svg — check workspace root first, then local
function findMaterialIconsSvg(): string {
  const candidates = [
    path.join(ICONS_PKG_DIR, 'node_modules/@material-icons/svg'),
    path.join(ROOT, 'node_modules/@material-icons/svg'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(path.join(c, 'data.json'))) return c;
  }
  throw new Error(
    'Could not find @material-icons/svg. Run: cd packages/icons && npm install'
  );
}

function cleanSvg(raw: string): string {
  return raw
    .replace(/\s+width="\d+(\.\d+)?"/, '')
    .replace(/\s+height="\d+(\.\d+)?"/, '')
    .replace(/<svg /, '<svg fill="currentColor" ')
    .replace(/\n/g, '')
    .trim();
}

interface IconMeta {
  name: string;
  categories: string[];
  tags: string[];
}

interface DataJson {
  icons: IconMeta[];
}

async function generate(): Promise<void> {
  const srcRoot = findMaterialIconsSvg();
  console.log(`Using icons from: ${srcRoot}`);

  const dataJson: DataJson = JSON.parse(
    fs.readFileSync(path.join(srcRoot, 'data.json'), 'utf-8')
  );

  const svgDir = path.join(srcRoot, 'svg');
  const iconsMap: Record<string, string> = {};
  const metaList: IconMeta[] = [];
  let skipped = 0;

  for (const icon of dataJson.icons) {
    // Prefer outline variant; fall back to baseline (filled)
    const variants = ['outline', 'baseline', 'round', 'sharp'];
    let svg: string | null = null;
    for (const variant of variants) {
      const svgPath = path.join(svgDir, icon.name, `${variant}.svg`);
      if (fs.existsSync(svgPath)) {
        svg = cleanSvg(fs.readFileSync(svgPath, 'utf-8'));
        break;
      }
    }
    if (!svg) {
      skipped++;
      continue;
    }

    iconsMap[icon.name] = svg;
    metaList.push({
      name: icon.name,
      categories: icon.categories ?? [],
      tags: icon.tags ?? [],
    });
  }

  console.log(`  Processed ${metaList.length} icons (${skipped} skipped)`);

  // Generate TypeScript source
  fs.mkdirSync(GENERATED_DIR, { recursive: true });

  const tsLines: string[] = [
    '// AUTO-GENERATED — do not edit. Run: npm run generate:icons',
    `// ${metaList.length} Material Design icons, Apache 2.0 — https://github.com/google/material-design-icons`,
    '',
    'export interface IconMeta { name: string; categories: string[]; tags: string[]; }',
    '',
    'export const ICONS: Record<string, string> = {',
  ];

  for (const [name, svg] of Object.entries(iconsMap)) {
    const escaped = svg.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
    tsLines.push(`  '${name}': \`${escaped}\`,`);
  }
  tsLines.push('};', '');

  tsLines.push('export const ICONS_META: IconMeta[] = ', JSON.stringify(metaList, null, 0) + ';', '');

  fs.writeFileSync(path.join(GENERATED_DIR, 'icons-data.ts'), tsLines.join('\n'), 'utf-8');
  console.log(`  ✓ src/generated/icons-data.ts`);

  // Write icons-meta.json for demo
  const distDir = path.join(ICONS_PKG_DIR, 'dist');
  fs.mkdirSync(distDir, { recursive: true });
  fs.writeFileSync(
    path.join(distDir, 'icons-meta.json'),
    JSON.stringify(metaList),
    'utf-8'
  );
  console.log(`  ✓ dist/icons-meta.json`);

  console.log('Done.');
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
