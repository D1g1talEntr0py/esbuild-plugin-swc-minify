import {minify} from '@swc/core';
import type {JsMinifyOptions} from '@swc/types';
import type {Plugin} from 'esbuild';
import {promises} from 'node:fs';

const filter = /\.js[x]?$/;
const loader = 'js';
const ecma = 2016;
const encoding = 'utf-8';

/**
 * ESBuild plugin to minify JS(X) files using SWC
 *
 * @param {import('@swc/types').JsMinifyOptions} options SWC options
 * @returns {Plugin} esbuild plugin
 */
export const swcMinify = (options: JsMinifyOptions = {}): Plugin => {
	return {
		name: 'esbuild:swc-minify',
		setup(pluginBuild) {
			pluginBuild.onLoad({ filter }, async ({ path: outputPath }) => {
				const { code: contents } = await minify(await promises.readFile(outputPath, { encoding }), Object.assign({ ecma, outputPath }, options));

				return { contents, loader };
			});
		}
	};
};

export type {JsMinifyOptions};
