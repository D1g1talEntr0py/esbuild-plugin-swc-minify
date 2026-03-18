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
When instantiating plugin you can pass an objects with options. This object has SWC official `JsMinifyOptions` type, see the 'Type Declarations' in [JsMinifyOptions](https://swc.rs/docs/usage/core#minify)。
