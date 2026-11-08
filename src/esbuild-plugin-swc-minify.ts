import { minify } from '@swc/core';
import { readFile } from 'node:fs/promises';
import type { Plugin } from 'esbuild';
import type { JsMinifyOptions } from '@swc/types';

const filter = /\.js[x]?$/;
const loader = 'js';
const ecma = 2022;
const encoding = 'utf-8';

/**
 * ESBuild plugin to minify JS(X) files using SWC
 *
 * @param options SWC minify options
 * @returns esbuild plugin
 */
export const swcMinify = (options: JsMinifyOptions = {}): Plugin => {
	return {
		name: 'esbuild:swc-minify',
		/**
		 * Setup the plugin
		 * @param pluginBuild The esbuild plugin build object
		 */
		setup(pluginBuild) {
			pluginBuild.onLoad({ filter }, async ({ path: outputPath }) => {
				const { code: contents } = await minify(await readFile(outputPath, { encoding }), Object.assign({ ecma, outputPath }, options));

				return { contents, loader };
			});
		}
	};
};

export type {JsMinifyOptions};