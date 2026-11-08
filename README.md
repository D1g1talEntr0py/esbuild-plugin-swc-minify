# esbuild-plugin-swc-minify

[![npm version](https://img.shields.io/npm/v/esbuild-plugin-swc-minify?color=blue)](https://www.npmjs.com/package/esbuild-plugin-swc-minify)
[![npm downloads](https://img.shields.io/npm/dm/esbuild-plugin-swc-minify)](https://www.npmjs.com/package/esbuild-plugin-swc-minify)
[![CI](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/actions/workflows/ci.yml/badge.svg)](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/github/license/D1g1talEntr0py/esbuild-plugin-swc-minify)](https://github.com/D1g1talEntr0py/esbuild-plugin-swc-minify/blob/main/LICENSE)
[![Node.js](https://img.shields.io/node/v/esbuild-plugin-swc-minify)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

esbuild plugin to minify js(x) files using SWC

## Install
```js
// if using npm 🤷🏽‍♂️
npm i -D esbuild-plugin-swc-minify

// if using pnpm 😎
pnpm add -D esbuild-plugin-swc-minify
```

## Usage example
```js
import * as esbuild from 'esbuild';
import { swcMinify } from 'esbuild-plugin-swc-minify';

esbuild.build({
  entryPoints: [ './index.js' ],
  outfile: 'dist/index.min.js',
  bundle: true,
  minify: true,
  sourceMap: true,
  plugins: [ swcMinify({ ecma: 2022 }) ]
});
```

## Options
When instantiating the plugin, you can pass SWC's official `JsMinifyOptions` object. See the [JsMinifyOptions type declarations](https://swc.rs/docs/usage/core#minify).

The default `ecma` target is `2022`; set `ecma` in the options to target another ECMAScript version.

## Contributing and releases

Use Conventional Commits when contributing. Releases are automated with git-cliff:
`feat` triggers a minor release, `fix`/`perf`/`revert` trigger a patch, and any
conventional breaking change triggers a major release. Other commits, including
`refactor` and unconventional commits, appear in the next release's full changelog
but do not independently trigger publishing. See the [release process](docs/release-process.md)
for validation, previews, and npm Trusted Publishing details. Do not manually bump versions.
