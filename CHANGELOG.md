## [2.1.3](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v2.1.2...v2.1.3) (2026-03-18)

### Bug Fixes

* **deps:** address CVE-2026-32141 (8426884eb1b5cc568dcd3ed88582f75f6cdca214)
Bumps unpatched dependencies to resolve security vulnerabilities. Updates pnpm version, esbuild, and various ESLint and TypeScript related packages to ensure secure and stable builds.

Fixes CVE-2026-32141


### Documentation

* update license to MIT and add README badges (802196b9cde6aac95d91180f87c314d14339912e)
Transitions the project license to MIT and updates the copyright details. Adds status badges to the README and updates the package.json to reflect the new license and included files.


### Miscellaneous Chores

* update CI workflows and release configuration (6a223f934db7df5e01cd8881687b51665094317c)
Updates GitHub Actions to use newer versions of checkout, setup-node, and action-setup. Modifies the semantic-release configuration to adjust pnpm commands for linting, building, and publishing.

## [2.1.2](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v2.1.1...v2.1.2) (2026-03-07)

### Bug Fixes

* **release:** updated config to use pnpm and create the build prior to publishing (3ce942a5fe20bef886b8e6b456296df238b07447)

## [2.1.1](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v2.1.0...v2.1.1) (2026-03-07)

### Bug Fixes

* update all dev dependencies to latest versions (1a4bffbe0689f267152845ad818902dae0c11a21)
Bumps eslint to v10, typescript-eslint to 8.56, esbuild to 0.27, @swc/core to 1.15, typescript to 5.9, and all associated transitive dependencies.

Several transitive dependencies were removed as they are no longer part of the eslint 10 flat-config-only dependency tree (chalk, argparse, js-yaml, strip-json-comments, import-fresh, fast-glob replaced by tinyglobby/fdir, etc.).

Addresses a security fix present in updated transitive dependencies.


### Miscellaneous Chores

* update package metadata, tighten tsconfig, and refactor source (a1e95b56ddecab292e6b28dc39feb7dc6af2a575)
Adds homepage, repository, bugs, engines, packageManager, and publishConfig fields to package.json for better npm discoverability and to pin the pnpm version.

Removes the src export condition and simplifies the files field to publish only compiled output.

Fixes indentation inconsistencies and reorders fields for clarity.

Simplifies tsconfig by removing unused compiler options (baseUrl, declarationMap, esModuleInterop, noUncheckedIndexedAccess) and tidying the include/exclude config.

Reorders type imports and updates a JSDoc param tag to use the locally imported type name.


### Continuous Integration

* add GitHub Actions workflows, semantic-release config, and docs (95f86840131a26c13f225dae7ea1942b60fc4408)
Adds CI pipeline running lint and build across Node.js 20, 22, and 24.

Adds automated release workflow using semantic-release with conventional commits for versioning, changelog generation, npm publishing with provenance, and GitHub releases.

Adds release process documentation and Copilot instructions summarising conventions and guidelines.

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v2.0.1...v2.1.0) - 2025-07-31

### Added
- Added `lint` and `prepublish` scripts to package.json.

### Changed
- Migrated to the new flat configuration format for ESLint.
- Updated dependencies.
- Moved all the dependencies to the `devDependencies` section in package.json.
- Added SWC as a peer dependency in package.json.

## [2.0.2](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v2.0.1...v2.0.2) - 2025-01-11

- Maintenance release. Updated dependencies.

## [2.0.1](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v1.0.11...v2.0.1) - 2024-07-04

- Maintenance release. Updated dependencies.

## [2.0.0](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/compare/v1.0.11...v2.0.0) - 2024-04-20

### Added

- Changelog file.

### Changed

- BREAKING CHANGE - Changed the default import to named import.
- Converted project to TypeScript.
- Updated dependencies.
