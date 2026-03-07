# esbuild-plugin-swc-minify — Copilot Instructions

## Project Overview

`esbuild-plugin-swc-minify` is a lightweight esbuild plugin that minifies JS(X) files using SWC. The entire plugin surface is a single exported function (`swcMinify`) in `src/esbuild-plugin-swc-minify.ts`. `JsMinifyOptions` from `@swc/types` is re-exported as a convenience type for consumers.

## Tech Stack

- **Language**: TypeScript (strict mode, ESNext target, NodeNext module resolution)
- **Runtime**: Node.js >=20.16.0 (ESM-only, `"type": "module"`)
- **Package manager**: pnpm
- **Build**: `tsc` — output goes to `dist/`
- **Lint**: ESLint (flat config via `eslint.config.js`) with `typescript-eslint`, `eslint-plugin-jsdoc`, and `eslint-plugin-compat`
- **CI**: GitHub Actions (`.github/workflows/ci.yml`) — runs lint + build on Node 20, 22, and 24

## Peer Dependencies

- `@swc/core` >=1.13.3
- `esbuild` >=0.20.0

## Repository Structure

```
src/                   Single source file — the plugin implementation
dist/                  Compiled output (gitignored, produced by `tsc`)
.github/workflows/     CI pipeline
docs/                  Release process notes
```

## Code Conventions

- **Indentation**: tabs (enforced by ESLint)
- **Quotes**: single quotes
- **Semicolons**: required (omit only in one-line blocks/class bodies)
- **Imports**: use `import type` for type-only imports (`verbatimModuleSyntax` is enabled)
- **JSDoc**: required on all public exports; use `@returns`, `@param`, and `@type` tags; prefer `@extends` over `@augments`
- **No default exports** — use named exports only
- **ESM only** — no CommonJS compatibility shims

## Common Commands

```bash
pnpm build       # Compile TypeScript → dist/
pnpm lint        # Run ESLint
pnpm prepublish  # Lint + build (runs before npm publish)
```

## Key Guidelines

- Keep the plugin minimal — it wraps a single `onLoad` hook for `*.js` and `*.jsx` files.
- The default `ecma` target is `2016`; consumers override this via `JsMinifyOptions`.
- Do not add runtime dependencies; `@swc/core` and `esbuild` are peer dependencies.
- Do not add a CommonJS build or dual-format output — this package is ESM-only.
- When changing the public API, update `README.md` and bump the version in `package.json` following semver.
- Release process is documented in `docs/release-process.md`.
