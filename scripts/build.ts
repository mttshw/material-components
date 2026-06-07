import * as esbuild from 'esbuild';
import { execSync } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coreDir = process.cwd(); // run from packages/core
const srcDir = path.join(coreDir, 'src');
const entryPoint = path.join(srcDir, 'index.ts');
const distDir = path.join(coreDir, 'dist');

// Clean dist
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true });
}

function findAllTsFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return findAllTsFiles(full);
    if (entry.isFile() && entry.name.endsWith('.ts')) return [full];
    return [];
  });
}

const sharedBundle: esbuild.BuildOptions = {
  entryPoints: [entryPoint],
  bundle: true,
  sourcemap: true,
  target: ['chrome105', 'firefox105', 'safari16'],
};

async function build(): Promise<void> {
  console.log('Building @materialelements/core...');

  // Full ESM bundle — used as the default import entry point
  await esbuild.build({
    ...sharedBundle,
    format: 'esm',
    outfile: path.join(distDir, 'index.js'),
  });
  console.log('  ✓ ESM bundle');

  // CJS bundle — for CommonJS consumers
  await esbuild.build({
    ...sharedBundle,
    format: 'cjs',
    outfile: path.join(distDir, 'cjs/index.cjs'),
  });
  console.log('  ✓ CJS bundle');

  // IIFE — minified CDN build
  await esbuild.build({
    ...sharedBundle,
    format: 'iife',
    globalName: 'ME',
    minify: true,
    outfile: path.join(distDir, 'materialelements.min.js'),
  });
  console.log('  ✓ IIFE (minified)');

  // Per-module ESM — transpile each source file individually so consumers can
  // import just one component (e.g. @materialelements/core/button) and let
  // their bundler tree-shake the rest.
  const allTsFiles = findAllTsFiles(srcDir);
  await esbuild.build({
    entryPoints: allTsFiles,
    bundle: false,
    format: 'esm',
    outdir: path.join(distDir, 'esm'),
    outbase: srcDir,
    sourcemap: true,
    target: ['chrome105', 'firefox105', 'safari16'],
  });
  console.log(`  ✓ ESM modules (${allTsFiles.length} files)`);

  // Type declarations via tsc
  console.log('  Generating type declarations...');
  try {
    execSync('npx tsc --declaration --emitDeclarationOnly --outDir dist/types', {
      cwd: coreDir,
      stdio: 'inherit',
    });
    console.log('  ✓ Types');
  } catch {
    console.warn('  ⚠ Type generation failed (non-fatal)');
  }

  console.log('Build complete.');
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
