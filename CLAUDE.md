# CLAUDE.md

## Project spec
Read TECH_SPEC.md for the full technical specification.

## Rules
- Zero runtime dependencies in packages/core
- All components extend MEElement base class
- All styles via Constructable Stylesheets + CSS custom properties
- me- prefix for all custom elements
- TypeScript strict mode, no `any`
- Run `npm run build:core` after changes to verify the build works
- Run tests after implementing each component