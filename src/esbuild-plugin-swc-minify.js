import { promises } from 'node:fs';
import { minify } from '@swc/core';

const filter = /\.js[x]?$/;
const loader = 'js';

/**
 * ESBuild plugin to minify JS(X) files using SWC
 *
 * @param { import('@swc/types').JsMinifyOptions } options SWC options
 * @returns {{ name: string, setup: (pluginBuild: import('esbuild').PluginBuild) => void }} esbuild plugin
 */
const swcMinify = (options = {}) => {
	return {
		name: 'esbuild:swc-minify',
		setup(pluginBuild) {
			pluginBuild.onLoad({ filter }, async ({ path }) => {
				const { code: contents } = await minify(await promises.readFile(path, 'utf-8'), Object.assign({ ecma: 2016, outputPath: path }, options));

				return { contents, loader };
			});
		}
	};
};

export default swcMinify;