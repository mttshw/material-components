# materialelements.io — Technical Specification

## Project Overview

**materialelements.io** is an open-source vanilla JavaScript Web Components library that replicates the Material UI (MUI) component set. It produces visually identical output to MUI, consumes MUI-compatible theme objects, and has **zero runtime dependencies** (the only accepted dependency is `@mui/material` as a peer dependency for theme type definitions).

The project ships as two packages from a monorepo, plus a documentation/demo site.

---

## 1. Repository Structure

```
materialelements/
├── packages/
│   ├── core/                          # The component library (npm: @materialelements/core)
│   │   ├── src/
│   │   │   ├── theme/
│   │   │   │   ├── theme-provider.ts  # <me-theme-provider> element + theme engine
│   │   │   │   ├── default-theme.ts   # MUI default theme values (hardcoded, no MUI import)
│   │   │   │   ├── css-variables.ts   # Theme → CSS custom property mapping
│   │   │   │   └── types.ts           # TypeScript interfaces mirroring MUI's Theme shape
│   │   │   ├── components/
│   │   │   │   ├── button/
│   │   │   │   │   ├── button.ts
│   │   │   │   │   ├── button.styles.ts
│   │   │   │   │   ├── button.test.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── ... (one folder per component)
│   │   │   │   └── index.ts           # barrel export
│   │   │   ├── utils/
│   │   │   │   ├── ripple.ts          # shared ripple effect controller
│   │   │   │   ├── elevation.ts       # shadow/elevation helpers
│   │   │   │   ├── focus-visible.ts   # :focus-visible polyfill/helper
│   │   │   │   ├── transitions.ts     # transition/animation utilities
│   │   │   │   └── dom.ts            # misc DOM helpers
│   │   │   └── index.ts              # main entry point
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── README.md
│   │
│   └── demo/                          # Demo site (materialelements.io)
│       ├── public/                    # Static assets (favicon, images)
│       ├── templates/
│       │   ├── _layout.njk            # Base Nunjucks layout (topbar + sidebar shell)
│       │   ├── index.njk              # Landing page
│       │   ├── getting-started.njk
│       │   ├── theme.njk              # Interactive theme editor
│       │   └── components/
│       │       ├── button.njk         # One template per component
│       │       ├── text-field.njk
│       │       └── ...
│       ├── shared/
│       │   ├── code-sample.js         # <code-sample> helper (syntax highlight + copy)
│       │   ├── theme-switcher.js      # Theme toggle logic
│       │   └── styles.css             # Site-wide styles (not component styles)
│       ├── server.js                  # Node.js server — renders Nunjucks templates + serves static files
│       └── package.json
│
├── scripts/
│   ├── build.ts                       # Build pipeline
│   └── generate-component.ts          # Scaffold a new component
│
├── package.json                       # Workspace root
├── tsconfig.base.json
├── LICENSE                            # MIT
├── CONTRIBUTING.md
└── README.md
```

### Workspace Setup

Use **npm workspaces** (no yarn, no pnpm). The root `package.json` declares:

```json
{
  "name": "materialelements",
  "private": true,
  "workspaces": ["packages/*"]
}
```

---

## 2. The Theme System

This is the most critical piece. The library must accept a standard MUI theme object and translate it into CSS custom properties that every component consumes.

### 2.1 Theme Shape

The library accepts the same `ThemeOptions` shape that `createTheme()` from `@mui/material/styles` produces. The relevant top-level keys are:

```typescript
interface METheme {
  palette: {
    mode: 'light' | 'dark';
    primary:    PaletteColor; // { main, light, dark, contrastText }
    secondary:  PaletteColor;
    error:      PaletteColor;
    warning:    PaletteColor;
    info:       PaletteColor;
    success:    PaletteColor;
    grey:       Record<string, string>; // 50–900 + A100–A700
    text:       { primary, secondary, disabled };
    divider:    string;
    background: { default, paper };
    action:     { active, hover, hoverOpacity, selected, selectedOpacity,
                  disabled, disabledBackground, disabledOpacity, focus, focusOpacity,
                  activatedOpacity };
    common:     { black, white };
  };
  typography: {
    fontFamily:      string;
    fontSize:        number;     // base px (default 14)
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    h1:    TypographyStyle;     // { fontFamily, fontWeight, fontSize, lineHeight, letterSpacing }
    h2:    TypographyStyle;
    h3:    TypographyStyle;
    h4:    TypographyStyle;
    h5:    TypographyStyle;
    h6:    TypographyStyle;
    subtitle1: TypographyStyle;
    subtitle2: TypographyStyle;
    body1: TypographyStyle;
    body2: TypographyStyle;
    button:   TypographyStyle;
    caption:  TypographyStyle;
    overline: TypographyStyle;
  };
  spacing: number | ((factor: number) => string); // default: 8 (px)
  shape: {
    borderRadius: number; // default: 4
  };
  shadows: string[];       // 25 entries, index 0–24
  transitions: {
    easing:   { easeInOut, easeOut, easeIn, sharp };
    duration: { shortest, shorter, short, standard, complex, enteringScreen, leavingScreen };
  };
  zIndex: {
    mobileStepper, speedDial, appBar, drawer, modal, snackbar, tooltip
  };
  breakpoints: {
    values: { xs, sm, md, lg, xl };
  };
}
```

### 2.2 `<me-theme-provider>`

A custom element that accepts a theme and propagates CSS custom properties to all descendants.

```html
<me-theme-provider id="app-theme">
  <me-button variant="contained">Hello</me-button>
</me-theme-provider>

<script>
  import { createTheme } from '@mui/material/styles';

  // Users bring their own MUI theme — this is the ONLY touch point with MUI
  const theme = createTheme({
    palette: { primary: { main: '#1976d2' } }
  });

  document.getElementById('app-theme').theme = theme;
</script>
```

**How it works internally:**

1. Receives a theme object via the `.theme` property setter.
2. Deep-merges it with the hardcoded default theme (matching MUI's defaults exactly).
3. Flattens the merged theme into CSS custom properties using a deterministic naming convention.
4. Applies those properties as inline `style` on itself.
5. All child `me-*` components reference these CSS variables — no JavaScript theme lookups at render time.

### 2.3 CSS Variable Naming Convention

All variables are prefixed with `--me-`. The flattening follows the object path with hyphens:

```
palette.primary.main        → --me-palette-primary-main
palette.text.secondary      → --me-palette-text-secondary
typography.fontFamily        → --me-typography-fontFamily
typography.h1.fontSize       → --me-typography-h1-fontSize
typography.h1.fontWeight     → --me-typography-h1-fontWeight
shape.borderRadius           → --me-shape-borderRadius
shadows[4]                   → --me-shadows-4
spacing                      → --me-spacing  (base value in px)
transitions.easing.easeInOut → --me-transitions-easing-easeInOut
transitions.duration.short   → --me-transitions-duration-short
zIndex.modal                 → --me-zIndex-modal
breakpoints.values.sm        → --me-breakpoints-values-sm
```

### 2.4 No MUI Runtime Import

The `@materialelements/core` package must **never** import MUI at runtime. MUI's `createTheme` is only used by the consumer to build the theme object. The library's TypeScript types for the theme shape are independently defined (mirroring MUI's interfaces). The `peerDependencies` entry for `@mui/material` is optional and only there so that consumers who already use MUI get type compatibility for free.

```json
// packages/core/package.json
{
  "peerDependencies": {
    "@mui/material": ">=5.0.0"
  },
  "peerDependenciesMeta": {
    "@mui/material": { "optional": true }
  }
}
```

### 2.5 Theme Without MUI

Users who don't want MUI at all can pass a plain object conforming to `METheme`:

```javascript
import { applyTheme } from '@materialelements/core';

const provider = document.querySelector('me-theme-provider');
provider.theme = {
  palette: {
    mode: 'light',
    primary: { main: '#1976d2', light: '#42a5f5', dark: '#1565c0', contrastText: '#fff' },
    // ... etc
  },
  // ... etc
};
```

---

## 3. Component Architecture

### 3.1 Base Class

All components extend a shared `MEElement` base class:

```typescript
export abstract class MEElement extends HTMLElement {
  // Shadow DOM with adopted stylesheets
  protected shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();
    this.addEventListeners();
  }

  disconnectedCallback(): void {
    this.cleanup();
  }

  attributeChangedCallback(name: string, oldVal: string | null, newVal: string | null): void {
    if (oldVal !== newVal) {
      this.onAttributeChanged(name, oldVal, newVal);
      this.render();
    }
  }

  // Subclasses implement these
  protected abstract render(): void;
  protected addEventListeners(): void {}
  protected cleanup(): void {}
  protected onAttributeChanged(name: string, oldVal: string | null, newVal: string | null): void {}

  // Helper: resolve a CSS variable with fallback
  protected cssVar(name: string, fallback?: string): string {
    return `var(--me-${name}${fallback ? ', ' + fallback : ''})`;
  }

  // Helper: compute spacing
  protected spacing(factor: number = 1): string {
    return `calc(var(--me-spacing, 8px) * ${factor})`;
  }
}
```

### 3.2 Styling Strategy

Each component defines its styles in a companion `.styles.ts` file as a `CSSStyleSheet` (using Constructable Stylesheets):

```typescript
// button.styles.ts
const sheet = new CSSStyleSheet();
sheet.replaceSync(`
  :host {
    display: inline-flex;
    /* all values reference CSS variables from the theme provider */
  }

  .me-button {
    font-family: var(--me-typography-button-fontFamily, var(--me-typography-fontFamily));
    font-size: var(--me-typography-button-fontSize, 0.875rem);
    font-weight: var(--me-typography-button-fontWeight, 500);
    letter-spacing: var(--me-typography-button-letterSpacing, 0.02857em);
    text-transform: var(--me-typography-button-textTransform, uppercase);
    border-radius: calc(var(--me-shape-borderRadius, 4) * 1px);
    transition: background-color var(--me-transitions-duration-short, 250ms)
                var(--me-transitions-easing-easeInOut, cubic-bezier(0.4, 0, 0.2, 1));
  }

  /* variant: contained */
  :host([variant="contained"]) .me-button {
    background-color: var(--me-palette-primary-main);
    color: var(--me-palette-primary-contrastText);
    box-shadow: var(--me-shadows-2);
  }

  :host([variant="contained"]:hover) .me-button {
    box-shadow: var(--me-shadows-4);
  }

  /* ... outlined, text variants ... */
`);

export default sheet;
```

Components adopt the stylesheet in their constructor:

```typescript
this.shadow.adoptedStyleSheets = [sheet];
```

### 3.3 Ripple Effect

Material Design's ripple is shared across many components. Implement it as a standalone utility class, not a component:

```typescript
// utils/ripple.ts
export class RippleController {
  attach(host: HTMLElement, target: HTMLElement): void { /* ... */ }
  detach(): void { /* ... */ }
}
```

The ripple is triggered on `pointerdown`, creates a `<span>` with CSS animation inside the target element, and self-destructs on `animationend`. Pure CSS animation, no JS animation frames.

### 3.4 Registration

Each component self-registers with a `me-` prefix:

```typescript
// button/index.ts
import { MEButton } from './button';

if (!customElements.get('me-button')) {
  customElements.define('me-button', MEButton);
}

export { MEButton };
```

The main entry point re-exports everything, so a consumer can do:

```javascript
// Registers ALL components
import '@materialelements/core';

// Or cherry-pick
import '@materialelements/core/button';
```

---

## 4. Component Inventory

Implement these components in priority tiers. Each must match MUI's visual output, props/attributes, and variants.

### Tier 1 — Core (MVP)

These form the minimum viable release.

| Component | Element Name | Key Attributes / Variants |
|-----------|-------------|---------------------------|
| Button | `<me-button>` | `variant` (text, contained, outlined), `color`, `size` (small, medium, large), `disabled`, `href`, `start-icon`, `end-icon` |
| IconButton | `<me-icon-button>` | `color`, `size`, `disabled`, `edge` |
| TextField | `<me-text-field>` | `variant` (filled, outlined, standard), `label`, `placeholder`, `helper-text`, `error`, `disabled`, `type`, `multiline`, `rows` |
| Select | `<me-select>` | `variant`, `label`, `value`, `multiple`, `disabled` |
| Checkbox | `<me-checkbox>` | `checked`, `indeterminate`, `disabled`, `color` |
| Radio | `<me-radio>` | `checked`, `disabled`, `color`, `name`, `value` |
| RadioGroup | `<me-radio-group>` | `value`, `name` |
| Switch | `<me-switch>` | `checked`, `disabled`, `color` |
| Typography | `<me-typography>` | `variant` (h1–h6, subtitle1/2, body1/2, caption, overline, button), `color`, `align`, `gutterBottom`, `noWrap` |
| Paper | `<me-paper>` | `elevation` (0–24), `variant` (elevation, outlined), `square` |
| Card | `<me-card>` | `variant` (elevation, outlined) |
| CardContent | `<me-card-content>` | — |
| CardActions | `<me-card-actions>` | `disableSpacing` |
| CardHeader | `<me-card-header>` | `title`, `subheader` (uses slots for avatar/action) |
| CardMedia | `<me-card-media>` | `image`, `alt`, `height` |
| AppBar | `<me-app-bar>` | `position` (fixed, absolute, sticky, static, relative), `color` |
| Toolbar | `<me-toolbar>` | `variant` (regular, dense) |
| Drawer | `<me-drawer>` | `open`, `anchor` (left, right, top, bottom), `variant` (temporary, persistent, permanent) |
| List | `<me-list>` | `dense`, `disablePadding` |
| ListItem | `<me-list-item>` | `disablePadding`, `disableGutters` |
| ListItemButton | `<me-list-item-button>` | `selected`, `disabled` |
| ListItemText | `<me-list-item-text>` | `primary`, `secondary` |
| ListItemIcon | `<me-list-item-icon>` | — |
| Divider | `<me-divider>` | `variant` (fullWidth, inset, middle), `orientation` |
| Grid | `<me-grid>` | `container`, `item`, `spacing`, `xs`, `sm`, `md`, `lg`, `xl`, `direction`, `justify`, `align` |
| Container | `<me-container>` | `maxWidth` (xs, sm, md, lg, xl, false), `fixed` |
| Stack | `<me-stack>` | `direction`, `spacing`, `align`, `justify` |
| Box | `<me-box>` | General-purpose layout wrapper. Supports `sx`-like style shorthand attributes. |
| Dialog | `<me-dialog>` | `open`, `fullWidth`, `maxWidth`, `fullScreen` |
| DialogTitle | `<me-dialog-title>` | — |
| DialogContent | `<me-dialog-content>` | `dividers` |
| DialogActions | `<me-dialog-actions>` | — |
| Snackbar | `<me-snackbar>` | `open`, `auto-hide-duration`, `anchor-origin` |
| Alert | `<me-alert>` | `severity` (error, warning, info, success), `variant` (standard, filled, outlined) |
| CircularProgress | `<me-circular-progress>` | `variant` (determinate, indeterminate), `value`, `size`, `color` |
| LinearProgress | `<me-linear-progress>` | `variant` (determinate, indeterminate, buffer, query), `value`, `valueBuffer`, `color` |
| Chip | `<me-chip>` | `variant` (filled, outlined), `color`, `size`, `deletable`, `clickable`, `disabled` |
| Avatar | `<me-avatar>` | `src`, `alt`, `variant` (circular, rounded, square) |
| Badge | `<me-badge>` | `badgeContent`, `color`, `variant` (standard, dot), `max`, `invisible`, `overlap` |
| Tooltip | `<me-tooltip>` | `title`, `placement` (top, bottom, left, right + variations), `arrow` |
| Icon | `<me-icon>` | `color`, `fontSize` (small, medium, large, inherit) — renders slotted SVG or icon font glyph |
| CssBaseline | `<me-css-baseline>` | Injects global reset styles (box-sizing, margin, typography defaults) |

### Tier 2 — Extended

| Component | Element Name |
|-----------|-------------|
| Accordion | `<me-accordion>` |
| AccordionSummary | `<me-accordion-summary>` |
| AccordionDetails | `<me-accordion-details>` |
| Tabs | `<me-tabs>` |
| Tab | `<me-tab>` |
| Menu | `<me-menu>` |
| MenuItem | `<me-menu-item>` |
| Autocomplete | `<me-autocomplete>` |
| BottomNavigation | `<me-bottom-navigation>` |
| BottomNavigationAction | `<me-bottom-nav-action>` |
| Breadcrumbs | `<me-breadcrumbs>` |
| Fab | `<me-fab>` |
| Pagination | `<me-pagination>` |
| Rating | `<me-rating>` |
| Skeleton | `<me-skeleton>` |
| Slider | `<me-slider>` |
| SpeedDial | `<me-speed-dial>` |
| Stepper | `<me-stepper>` |
| Table | `<me-table>` |
| TableHead | `<me-table-head>` |
| TableBody | `<me-table-body>` |
| TableRow | `<me-table-row>` |
| TableCell | `<me-table-cell>` |
| ToggleButton | `<me-toggle-button>` |
| ToggleButtonGroup | `<me-toggle-button-group>` |
| ImageList | `<me-image-list>` |
| ImageListItem | `<me-image-list-item>` |

### Tier 3 — Utilities & Advanced

| Component | Element Name |
|-----------|-------------|
| Backdrop | `<me-backdrop>` |
| Modal | `<me-modal>` |
| Popover | `<me-popover>` |
| Popper | `<me-popper>` |
| Portal | `<me-portal>` |
| ClickAwayListener | `<me-click-away-listener>` |
| Collapse (transition) | `<me-collapse>` |
| Fade (transition) | `<me-fade>` |
| Grow (transition) | `<me-grow>` |
| Slide (transition) | `<me-slide>` |
| Zoom (transition) | `<me-zoom>` |
| TransferList | `<me-transfer-list>` |
| ButtonGroup | `<me-button-group>` |

---

## 5. Slot Strategy

Web Components use `<slot>` instead of React `children`/`props`. Follow this pattern consistently:

```html
<!-- Default slot = children -->
<me-button>
  <me-icon slot="start-icon">★</me-icon>
  Click me
</me-button>

<!-- Named slots for structured content -->
<me-card>
  <me-card-header>
    <me-avatar slot="avatar" src="..."></me-avatar>
    <span slot="title">Card Title</span>
    <span slot="subheader">Subtitle</span>
    <me-icon-button slot="action">⋮</me-icon-button>
  </me-card-header>
  <me-card-content>
    Content here
  </me-card-content>
  <me-card-actions>
    <me-button>Action</me-button>
  </me-card-actions>
</me-card>
```

### Slot Naming Convention

- `default` (unnamed) — primary content / children
- `start-icon` / `end-icon` — leading/trailing icons
- `avatar` — avatar placement
- `action` — action buttons/icons
- `title` / `subheader` — text content slots
- `helper-text` — form field helper text
- `adornment-start` / `adornment-end` — input adornments

---

## 6. Events

Components dispatch standard `CustomEvent`s with a `me-` prefix:

```typescript
// Button doesn't need a custom event — use native 'click'

// TextField
this.dispatchEvent(new CustomEvent('me-change', {
  detail: { value: this.value },
  bubbles: true,
  composed: true  // CRITICAL: crosses shadow DOM boundaries
}));

// Dialog
this.dispatchEvent(new CustomEvent('me-close', {
  detail: { reason: 'backdropClick' | 'escapeKeyDown' },
  bubbles: true,
  composed: true
}));

// Snackbar
this.dispatchEvent(new CustomEvent('me-close', {
  detail: { reason: 'timeout' | 'clickaway' },
  bubbles: true,
  composed: true
}));
```

**Rules:**
- All custom events must have `bubbles: true` and `composed: true`.
- Native events (click, focus, blur, input) pass through naturally — don't re-wrap them.
- Use `me-change` instead of `change` for value changes to avoid collisions.
- Use `me-close` for dismissible components (dialog, snackbar, drawer, menu).
- Use `me-open` for openable components.

---

## 7. Accessibility

Every component must meet **WCAG 2.1 AA**. Non-negotiable requirements:

- Correct ARIA roles on shadow DOM internals (e.g., `role="button"`, `role="dialog"`, `role="tab"`).
- `aria-label`, `aria-labelledby`, `aria-describedby` attributes must be forwarded from the host element to the relevant internal element.
- Keyboard navigation: all interactive components must be operable via keyboard (Tab, Enter, Space, Arrow keys, Escape as appropriate).
- Focus management: dialogs trap focus, menus handle arrow-key navigation, drawers return focus on close.
- Color contrast: the default theme already meets AA — custom themes are the user's responsibility, but document the requirement.
- Use `ElementInternals` where supported for form-associated custom elements (`<me-text-field>`, `<me-checkbox>`, `<me-radio>`, `<me-switch>`, `<me-select>`).

### Form Association

Form-participating components must implement the `formAssociated` static flag:

```typescript
export class METextField extends MEElement {
  static formAssociated = true;
  private internals: ElementInternals;

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  // Report value to parent <form>
  set value(val: string) {
    this._value = val;
    this.internals.setFormValue(val);
  }

  // Validation
  get validity(): ValidityState { return this.internals.validity; }
  get validationMessage(): string { return this.internals.validationMessage; }
  checkValidity(): boolean { return this.internals.checkValidity(); }
  reportValidity(): boolean { return this.internals.reportValidity(); }
}
```

---

## 8. Build & Distribution

### 8.1 Build Pipeline

Use **esbuild** for bundling (fast, zero-config). TypeScript via `tsc` for type checking only.

Output targets:

| Format | File | Purpose |
|--------|------|---------|
| ESM | `dist/esm/index.js` | Modern bundlers, `<script type="module">` |
| CJS | `dist/cjs/index.cjs` | Legacy Node / require() |
| IIFE | `dist/materialelements.min.js` | CDN / `<script>` tag, exposes `window.MC` |
| Types | `dist/types/index.d.ts` | TypeScript declarations |

Individual component entry points for tree-shaking:

```
dist/esm/components/button/index.js
dist/esm/components/text-field/index.js
...
```

### 8.2 package.json (core)

```json
{
  "name": "@materialelements/core",
  "version": "0.1.0",
  "description": "Material UI components as vanilla Web Components",
  "license": "MIT",
  "type": "module",
  "main": "dist/cjs/index.cjs",
  "module": "dist/esm/index.js",
  "types": "dist/types/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.cjs",
      "types": "./dist/types/index.d.ts"
    },
    "./button": {
      "import": "./dist/esm/components/button/index.js",
      "types": "./dist/types/components/button/index.d.ts"
    }
  },
  "files": ["dist/"],
  "sideEffects": false,
  "peerDependencies": {
    "@mui/material": ">=5.0.0"
  },
  "peerDependenciesMeta": {
    "@mui/material": { "optional": true }
  },
  "keywords": [
    "material-ui", "web-components", "custom-elements",
    "material-design", "ui-components", "vanilla-js"
  ]
}
```

### 8.3 CDN Usage

The IIFE build allows zero-build usage:

```html
<script src="https://unpkg.com/@materialelements/core/dist/materialelements.min.js"></script>

<me-theme-provider>
  <me-button variant="contained">Hello World</me-button>
</me-theme-provider>

<script>
  // Default theme is applied automatically. Override:
  document.querySelector('me-theme-provider').theme = {
    palette: { primary: { main: '#e91e63' } }
  };
</script>
```

---

## 9. Demo Site (materialelements.io)

### 9.1 Tech Stack

- **Nunjucks templates** — one `.njk` file per page. A `_layout.njk` base template provides the topbar and sidebar; all pages `{% extends "_layout.njk" %}` and fill `{% block content %}`. No HTML duplication across pages.
- A **Node.js HTTP server** (`server.js`) that renders Nunjucks templates server-side for HTML routes and serves static assets (`/shared/`, `/public/`, `/dist/`) directly.
- The demo site itself is built with the `me-*` components (dogfooding). The core library's IIFE build is loaded via a `<script>` tag in the layout template.
- A `code-sample.js` helper provides copy-to-clipboard and optional syntax highlighting (via a CDN-loaded highlight.js — the only external resource allowed on the demo site).
- **Deployment**: run `npm run build:demo` to pre-render all templates to static HTML (one `node scripts/render-demo.ts` pass). The output in `packages/demo/dist/` can be served from any static host (Vercel, Netlify, GitHub Pages). No runtime server needed in production.

### 9.2 Site Structure

```
/                            → index.html — landing page
/getting-started.html        → Installation, basic usage, CDN
/theme.html                  → Interactive theme editor
/components/button.html      → Button demos, API table, code snippets
/components/text-field.html  → TextField demos...
/components/...              → One page per component
```

Each page is a Nunjucks template that extends the shared layout:

```html
{% extends "_layout.njk" %}
{% set title = "Button — materialelements.io" %}
{% set currentPath = "/components/button.html" %}

{% block content %}
<h1>Button</h1>

<!-- Live demos using actual me-* elements -->
<section class="demo-section">
  <me-button variant="contained">Contained</me-button>
  <me-button variant="outlined">Outlined</me-button>
  <me-button>Text</me-button>
</section>

<!-- Code snippet with copy button -->
<code-sample>
  &lt;me-button variant="contained"&gt;Contained&lt;/me-button&gt;
</code-sample>

<!-- Props table, events table, slots table — plain HTML tables -->
{% endblock %}
```

### 9.3 Each Component Page Contains

1. **Title + description** — what the component does.
2. **Live demos** — interactive examples showing each variant/prop. The demos ARE the actual `me-*` components running live.
3. **Code snippets** — the HTML to reproduce each demo, with a copy button.
4. **Props/Attributes table** — name, type, default, description.
5. **Events table** — event name, detail shape, description.
6. **Slots table** — slot name, description.
7. **CSS variables** — which `--me-*` variables this component consumes.
8. **MUI comparison** — side-by-side: MUI JSX vs materialelements.io HTML.

### 9.4 Theme Editor

A live theme editor page at `/theme` where users can:
- Adjust palette colors, typography, spacing, border radius.
- See all components update in real time.
- Export the theme as a JSON object.
- Import an existing MUI theme JSON.

---

## 10. Testing

### 10.1 Unit Tests

Use **Web Test Runner** with `@open-wc/testing` for real-browser component tests:

```typescript
import { fixture, html, expect } from '@open-wc/testing';
import '@materialelements/core/button';

describe('me-button', () => {
  it('renders with default variant', async () => {
    const el = await fixture(html`<me-button>Click</me-button>`);
    expect(el.getAttribute('variant')).to.equal(null); // defaults to 'text'
    expect(el.shadowRoot.querySelector('.me-button')).to.exist;
  });

  it('applies contained styles', async () => {
    const el = await fixture(html`<me-button variant="contained">Click</me-button>`);
    const btn = el.shadowRoot.querySelector('.me-button');
    const bg = getComputedStyle(btn).backgroundColor;
    expect(bg).to.not.equal('transparent');
  });

  it('dispatches click event', async () => {
    const el = await fixture(html`<me-button>Click</me-button>`);
    let clicked = false;
    el.addEventListener('click', () => { clicked = true; });
    el.shadowRoot.querySelector('.me-button').click();
    expect(clicked).to.be.true;
  });

  it('is disabled', async () => {
    const el = await fixture(html`<me-button disabled>Click</me-button>`);
    const btn = el.shadowRoot.querySelector('.me-button');
    expect(btn.hasAttribute('aria-disabled')).to.be.true;
  });
});
```

### 10.2 Visual Regression

Use **Playwright** to screenshot every component in every variant and diff against MUI reference screenshots. This is how you verify "looks the same."

```
tests/visual/
├── button.spec.ts       # Renders me-button and MUI Button side-by-side
├── text-field.spec.ts
└── ...
```

### 10.3 Accessibility Audits

Run `axe-core` on every component fixture as part of CI:

```typescript
import { axe } from 'jest-axe'; // or axe-core directly in Playwright
const results = await axe(el);
expect(results.violations).toHaveLength(0);
```

---

## 11. Browser Support

| Browser | Version |
|---------|---------|
| Chrome / Edge | Last 2 major |
| Firefox | Last 2 major |
| Safari | Last 2 major |

No IE11 support. No polyfills. This is a modern Web Components library.

Required platform features (all natively available in target browsers):
- Custom Elements v1
- Shadow DOM v1
- Constructable Stylesheets (`CSSStyleSheet` + `adoptedStyleSheets`)
- CSS Custom Properties
- `ElementInternals` (for form-associated elements)
- `<slot>` element + Slotable interface

---

## 12. Coding Standards

- **Language**: TypeScript, strict mode, no `any`.
- **Formatting**: Prettier with default config.
- **Linting**: ESLint with `@typescript-eslint/recommended`.
- **Naming**: Component classes are `MC` + PascalCase (e.g., `MEButton`, `METextField`). Element names are `me-` + kebab-case.
- **File naming**: kebab-case (e.g., `text-field.ts`, `text-field.styles.ts`).
- **No external runtime dependencies**: Zero. Not Lit, not Stencil, not FAST, not Polymer. Vanilla `HTMLElement` subclasses only.
- **CSS-in-JS**: No. Styles live in `CSSStyleSheet` objects constructed from template literals in `.styles.ts` files. All dynamic values come from CSS custom properties.
- **No build-time CSS processing**: No PostCSS, no Sass, no Tailwind. Plain CSS in template literals.

---

## 13. Development Workflow

### Getting Started

```bash
git clone https://github.com/materialelements/materialelements.git
cd materialelements
npm install
npm run dev          # Builds core library, starts static demo server
```

### Scripts

```json
{
  "scripts": {
    "dev":       "npm run build:core && node packages/demo/server.js",
    "build:core": "npm run build --workspace=packages/core",
    "test":      "web-test-runner --coverage",
    "test:visual": "playwright test tests/visual/",
    "lint":      "eslint packages/ --ext .ts",
    "format":    "prettier --write packages/",
    "new":       "ts-node scripts/generate-component.ts"
  }
}
```

### Scaffolding a New Component

```bash
npm run new -- --name slider
```

Generates:
```
packages/core/src/components/slider/
├── slider.ts
├── slider.styles.ts
├── slider.test.ts
└── index.ts
```

With boilerplate extending `MEElement`, a skeleton stylesheet, and a test file.

---

## 14. Milestones

| Milestone | Scope | Target |
|-----------|-------|--------|
| **M0 — Foundation** | Repo setup, build pipeline, theme system, `<me-theme-provider>`, `MEElement` base class, CSS variable engine, CssBaseline | — |
| **M1 — Primitives** | Typography, Button, IconButton, Paper, Box, Container, Grid, Stack, Divider, Icon | — |
| **M2 — Forms** | TextField, Select, Checkbox, Radio, RadioGroup, Switch + form association | — |
| **M3 — Data Display** | Avatar, Badge, Chip, List, ListItem*, Table*, Tooltip | — |
| **M4 — Feedback** | Alert, Snackbar, Dialog*, Progress (circular + linear), Skeleton, Backdrop | — |
| **M5 — Navigation** | AppBar, Toolbar, Drawer, Tabs, Tab, Menu, MenuItem, Breadcrumbs, Pagination, BottomNavigation | — |
| **M6 — Surfaces** | Card*, Accordion* | — |
| **M7 — Demo Site** | Landing page, all component pages, theme editor, deployment | — |
| **M8 — Advanced** | Transitions, Popover, Popper, Modal, Portal, Autocomplete, Slider, Rating, SpeedDial, Stepper | — |

\* Components with sub-components (e.g., Card + CardContent + CardActions + CardHeader + CardMedia).

---

## 15. Key Design Decisions & Rationale

**Why not Lit / Stencil / FAST?**
The selling point is zero dependencies. Adding a Web Component framework defeats the purpose and adds weight. Vanilla `HTMLElement` is sufficient — the trade-off is more boilerplate in the base class, which is written once.

**Why Shadow DOM for everything?**
Style encapsulation is essential for a component library that might be dropped into any page. Consumers should never worry about CSS leaking in or out. CSS custom properties (from the theme) intentionally pierce the shadow boundary — that's the theming mechanism.

**Why Constructable Stylesheets?**
Performance. A single `CSSStyleSheet` instance is shared across all instances of a component (via `adoptedStyleSheets`), rather than duplicating `<style>` tags into each shadow root.

**Why CSS variables instead of JS-based theming?**
Performance and simplicity. Changing a theme is a single DOM operation (update the provider's inline style). Every component reacts instantly via CSS inheritance. No re-render, no event bus, no JavaScript recalculation.

**Why accept MUI's theme shape specifically?**
Network effect. Millions of developers already have MUI themes. Making the theme format compatible means drop-in adoption for teams migrating away from React or wanting to use the same design tokens in non-React contexts (emails, static sites, micro-frontends, server-rendered pages).
