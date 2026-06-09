import * as esbuild from 'esbuild';
import { execSync } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const iconsDir = path.join(ROOT, 'packages/icons');
const srcDir = path.join(iconsDir, 'src');
const distDir = path.join(iconsDir, 'dist');

const generatedFile = path.join(srcDir, 'generated/icons-data.ts');
if (!fs.existsSync(generatedFile)) {
  console.error('Generated icons-data.ts not found. Run: npm run generate:icons');
  process.exit(1);
}

// Preserve icons-meta.json across clean
const metaJson = path.join(distDir, 'icons-meta.json');
const metaBackup = fs.existsSync(metaJson)
  ? fs.readFileSync(metaJson, 'utf-8')
  : null;

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true });
}
fs.mkdirSync(distDir, { recursive: true });

if (metaBackup) {
  fs.writeFileSync(metaJson, metaBackup, 'utf-8');
}

const shared: esbuild.BuildOptions = {
  bundle: true,
  sourcemap: true,
  target: ['chrome105', 'firefox105', 'safari16'],
};

async function build(): Promise<void> {
  console.log('Building @materialelements/icons...');

  // ESM bundle — externalise core so the host app provides it
  await esbuild.build({
    ...shared,
    entryPoints: [path.join(srcDir, 'index.ts')],
    format: 'esm',
    outfile: path.join(distDir, 'index.js'),
    external: ['@materialelements/core'],
  });
  console.log('  ✓ ESM bundle');

  // CJS bundle
  await esbuild.build({
    ...shared,
    entryPoints: [path.join(srcDir, 'index.ts')],
    format: 'cjs',
    outfile: path.join(distDir, 'cjs/index.cjs'),
    external: ['@materialelements/core'],
  });
  console.log('  ✓ CJS bundle');

  // IIFE — standalone CDN build; registers into window.ME
  await esbuild.build({
    ...shared,
    entryPoints: [path.join(srcDir, 'iife-entry.ts')],
    format: 'iife',
    minify: true,
    outfile: path.join(distDir, 'materialelements-icons.min.js'),
  });
  console.log('  ✓ IIFE (minified)');

  // Type declarations
  try {
    execSync('npx tsc --declaration --emitDeclarationOnly --outDir dist/types', {
      cwd: iconsDir,
      stdio: 'inherit',
    });
    console.log('  ✓ Types');
  } catch {
    console.warn('  ⚠ Type generation failed (non-fatal)');
  }

  console.log('Icons build complete.');
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
