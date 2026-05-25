import * as esbuild from 'esbuild';
import { execSync } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coreDir = process.cwd(); // run from packages/core
const entryPoint = path.join(coreDir, 'src/index.ts');
const distDir = path.join(coreDir, 'dist');

// Clean dist
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true });
}

const sharedOptions: esbuild.BuildOptions = {
  entryPoints: [entryPoint],
  bundle: true,
  sourcemap: true,
  target: ['chrome105', 'firefox105', 'safari16'],
};

async function build(): Promise<void> {
  console.log('Building @materialcomponents/core...');

  // ESM
  await esbuild.build({
    ...sharedOptions,
    format: 'esm',
    outfile: path.join(distDir, 'esm/index.js'),
  });
  console.log('  ✓ ESM');

  // CJS
  await esbuild.build({
    ...sharedOptions,
    format: 'cjs',
    outfile: path.join(distDir, 'cjs/index.cjs'),
  });
  console.log('  ✓ CJS');

  // IIFE (minified, CDN build)
  await esbuild.build({
    ...sharedOptions,
    format: 'iife',
    globalName: 'MC',
    minify: true,
    outfile: path.join(distDir, 'materialcomponents.min.js'),
  });
  console.log('  ✓ IIFE (minified)');

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
