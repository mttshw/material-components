import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nunjucks from 'nunjucks';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const ROOT = path.resolve(__dirname, '../..');

const MIME = {
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.map': 'application/json',
  '.woff2': 'font/woff2',
};

// Static directories and their filesystem roots
const STATIC_ROOTS = {
  '/shared/': path.join(__dirname, 'shared'),
  '/public/': path.join(__dirname, 'public'),
  '/dist/': path.join(ROOT, 'packages/core/dist'),
};

// Extra /dist/ files not in core/dist (e.g. icons IIFE)
const DIST_EXTRAS = {
  '/dist/materialelements-icons.min.js': path.join(ROOT, 'packages/icons/dist/materialelements-icons.min.js'),
  '/dist/materialelements-icons.min.js.map': path.join(ROOT, 'packages/icons/dist/materialelements-icons.min.js.map'),
};

const env = nunjucks.configure(path.join(__dirname, 'templates'), {
  autoescape: true,
  noCache: true,
});

env.addGlobal('base', '');

// Icon metadata for the icons page
const iconsMetaPath = path.join(ROOT, 'packages/icons/dist/icons-meta.json');
const iconsMeta = fs.existsSync(iconsMetaPath)
  ? JSON.parse(fs.readFileSync(iconsMetaPath, 'utf-8'))
  : [];
env.addGlobal('iconsMeta', iconsMeta);
env.addGlobal('iconsCount', iconsMeta.length);

// Nav items available to all templates
env.addGlobal('nav', [
  { label: 'Getting Started', href: '/getting-started.html' },
  { label: 'Theme', href: '/theme.html' },
  { label: 'Icons', href: '/icons.html' },

  { section: true, label: 'Primitives' },
  { label: 'Button', href: '/components/button.html' },
  { label: 'Icon Button', href: '/components/icon-button.html' },
  { label: 'Typography', href: '/components/typography.html' },
  { label: 'Paper', href: '/components/paper.html' },
  { label: 'Box', href: '/components/box.html' },
  { label: 'Container', href: '/components/container.html' },
  { label: 'Stack', href: '/components/stack.html' },
  { label: 'Grid', href: '/components/grid.html' },
  { label: 'Divider', href: '/components/divider.html' },
  { label: 'Icon', href: '/components/icon.html' },

  { section: true, label: 'Forms' },
  { label: 'TextField', href: '/components/text-field.html' },
  { label: 'Select', href: '/components/select.html' },
  { label: 'Checkbox', href: '/components/checkbox.html' },
  { label: 'Radio', href: '/components/radio.html' },
  { label: 'Switch', href: '/components/switch.html' },

  { section: true, label: 'Data Display' },
  { label: 'Avatar', href: '/components/avatar.html' },
  { label: 'Badge', href: '/components/badge.html' },
  { label: 'Chip', href: '/components/chip.html' },
  { label: 'List', href: '/components/list.html' },
  { label: 'Table', href: '/components/table.html' },
  { label: 'Tooltip', href: '/components/tooltip.html' },

  { section: true, label: 'Feedback' },
  { label: 'Alert', href: '/components/alert.html' },
  { label: 'Snackbar', href: '/components/snackbar.html' },
  { label: 'Dialog', href: '/components/dialog.html' },
  { label: 'Backdrop', href: '/components/backdrop.html' },
  { label: 'Circular Progress', href: '/components/circular-progress.html' },
  { label: 'Linear Progress', href: '/components/linear-progress.html' },
  { label: 'Skeleton', href: '/components/skeleton.html' },

  { section: true, label: 'Surfaces' },
  { label: 'Card', href: '/components/card.html' },
  { label: 'Accordion', href: '/components/accordion.html' },

  { section: true, label: 'Navigation' },
  { label: 'App Bar', href: '/components/app-bar.html' },
  { label: 'Tabs', href: '/components/tabs.html' },
  { label: 'Drawer', href: '/components/drawer.html' },
  { label: 'Menu', href: '/components/menu.html' },
  { label: 'Breadcrumbs', href: '/components/breadcrumbs.html' },
  { label: 'Pagination', href: '/components/pagination.html' },
  { label: 'Bottom Navigation', href: '/components/bottom-navigation.html' },

  { section: true, label: 'Advanced' },
  { label: 'Slider', href: '/components/slider.html' },
  { label: 'Rating', href: '/components/rating.html' },
  { label: 'Autocomplete', href: '/components/autocomplete.html' },
  { label: 'Stepper', href: '/components/stepper.html' },
  { label: 'Speed Dial', href: '/components/speed-dial.html' },
  { label: 'Modal', href: '/components/modal.html' },
  { label: 'Popover / Popper', href: '/components/popover.html' },
  { label: 'Transitions', href: '/components/transitions.html' },
 
]);

function serveStatic(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] ?? 'application/octet-stream' });
    res.end(data);
  });
}

function renderTemplate(res, urlPath, extraVars = {}) {
  // Map URL path to a template name:  /components/button.html → components/button.njk
  const templateName = (urlPath === '/' ? '/index.html' : urlPath)
    .replace(/^\//, '')
    .replace(/\.html$/, '.njk');

  try {
    const html = nunjucks.render(templateName, { currentPath: urlPath, ...extraVars });
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    try {
      res.end(nunjucks.render('404.njk', { currentPath: urlPath }));
    } catch {
      res.end('404 Not Found');
    }
  }
}

const server = http.createServer((req, res) => {
  const urlPath = req.url?.split('?')[0] ?? '/';

  // Exact-match extras (e.g. icons IIFE not in core/dist)
  if (DIST_EXTRAS[urlPath]) {
    serveStatic(res, DIST_EXTRAS[urlPath]);
    return;
  }

  // Static asset routes
  for (const [prefix, root] of Object.entries(STATIC_ROOTS)) {
    if (urlPath.startsWith(prefix)) {
      serveStatic(res, path.join(root, urlPath.slice(prefix.length)));
      return;
    }
  }

  // Everything else is a template route
  renderTemplate(res, urlPath);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use.`);
    process.exit(1);
  }
  throw err;
});

server.listen(PORT, () => {
  console.log(`Demo running at http://localhost:${PORT}`);
});
