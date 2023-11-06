# esbuild-plugin-swc-minify
esbuild plugin to minify js(x) files using SWC

## Install
```js
// if using npm
npm i -D esbuild-plugin-swc-minify
// if using pnpm
pnpm add -D esbuild-plugin-swc-minify
// if using yarn - Not sure if I want to publish this to yarn.
yarn add -D esbuild-plugin-swc-minify
```

## Usage example
```js
import * as esbuild from 'esbuild';
import swcMinify from 'esbuild-plugin-swc-minify';

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
