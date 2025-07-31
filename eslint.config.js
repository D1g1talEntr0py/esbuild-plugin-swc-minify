import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import typeScriptEslint from '@typescript-eslint/eslint-plugin';
import { fixupConfigRules } from '@eslint/compat';
import eslintPluginCompat from 'eslint-plugin-compat';
import jsdoc from 'eslint-plugin-jsdoc';
import globals from 'globals';

const compatConfiguration = fixupConfigRules(eslintPluginCompat.configs['flat/recommended']);

export default tsEslint.config(
	eslint.configs.recommended,
	...compatConfiguration,
	...tsEslint.configs.recommended,
	...tsEslint.configs.recommendedTypeChecked,
	{ ignores: [ 'node_modules', 'dist', 'tests', 'benchmark', '*.config.[tj]s' ] },
	{
		plugins: { eslintPluginCompat, typeScriptEslint, jsdoc },
		languageOptions: {
			globals: { ...globals['shared-node-browser'] },
			parserOptions: {
				project: true,
				parser: tsParser,
				parserOptions: {
					ecmaFeatures: { impliedStrict: true }
				},
				tsconfigRootDir: import.meta.dirname,
				allowAutomaticSingleRunInference: true,
				warnOnUnsupportedTypeScriptVersion: false
			}
		},
		settings: {
			jsdoc: {
				mode: 'typescript',
				structuredTags: {
					template: {
						name: 'namepath-defining',
						type: true
					}
				},
				tagNamePreference: {
					augments: {
						message: '@extends is to be used over @augments as it is more evocative of classes than @augments',
						replacement: 'extends'
					}
				}
			}
		},
		rules: {
			'jsdoc/tag-lines': 0,
			'jsdoc/no-defaults': 0,
			indent: ['error', 'tab', { SwitchCase: 1 }],
			'linebreak-style': [ 'error', 'unix' ],
			quotes: [ 'error', 'single' ],
			semi: ['error', 'always', {
				omitLastInOneLineBlock: true,
				omitLastInOneLineClassBody: true,
			}],
			'no-unused-expressions': ['error', { allowTernary: true }],
			'@typescript-eslint/unbound-method': 'off',
			'@typescript-eslint/restrict-template-expressions': 'off',
			'@typescript-eslint/no-unsafe-enum-comparison': 'off',
			'@typescript-eslint/no-unused-vars': ['error', {
				args: 'all',
				argsIgnorePattern: '^_',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				ignoreRestSiblings: true
			}]
		}
	}
);