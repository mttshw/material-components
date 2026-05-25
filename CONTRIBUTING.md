# Contributing

## Development Setup

```bash
git clone https://github.com/materialcomponents/materialcomponents.git
cd materialcomponents
npm install
npm run dev
```

## Adding a Component

Use the scaffolding script to generate boilerplate:

```bash
npm run new -- --name my-component
```

This creates `packages/core/src/components/my-component/` with the required files.

## Coding Standards

- TypeScript strict mode, no `any`
- All components extend `MCElement`
- Styles via Constructable Stylesheets + CSS custom properties only
- `mc-` prefix on all custom element names
- Zero runtime dependencies in `packages/core`

## Testing

```bash
npm test               # Unit tests (Web Test Runner)
npm run test:visual    # Visual regression (Playwright)
```

Every component must have unit tests in a `.test.ts` file alongside the implementation.

## Pull Requests

- One component or feature per PR
- Include tests
- Run `npm run build:core` and `npm run lint` before submitting
