import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import jsdoc from 'eslint-plugin-jsdoc';
import tslint from 'typescript-eslint';
import globals from 'globals';

export default defineConfig({ ignores: [ 'node_modules/**', 'tests/**', 'dist/**', '*.config.ts', 'src/dts/@types', 'src/@types' ] }, {
	extends: [
		eslint.configs.recommended,
		jsdoc.configs['flat/recommended-typescript'],
		...tslint.configs.recommended,
		...tslint.configs.recommendedTypeChecked
	],
	plugins: { '@typescript-eslint': tslint.plugin, jsdoc },
	languageOptions: {
		globals: { ...globals['shared-node-browser'] },
		parser: tslint.parser,
		parserOptions: {
			project: true,
			ecmaFeatures: {	impliedStrict: true	},
			tsconfigRootDir: import.meta.dirname,
			allowAutomaticSingleRunInference: true,
			warnOnUnsupportedTypeScriptVersion: false
		}
	},
	settings: {
		jsdoc: {
			mode: 'typescript',
			structuredTags: {
				template: { name: 'namepath-defining', type: true }
			}
		}
	},
	rules: {
		'jsdoc/require-returns': 0,
		'jsdoc/check-param-names': [ 'error', { checkDestructured: false	}	],
		'jsdoc/require-param': [ 'error',	{ checkDestructured: false } ],
		'jsdoc/tag-lines': 0,
		'jsdoc/no-defaults': 0,
		'jsdoc/require-jsdoc': [ 'error',	{
				exemptEmptyConstructors: true,
				checkConstructors: false,
				require: {
					ClassDeclaration: true,
					FunctionExpression: true,
					MethodDefinition: true
				}
			}
		],
		'comma-dangle': ['error', 'never'],
		indent:  ['error', 'tab', { SwitchCase: 1 } ],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always', {
			omitLastInOneLineBlock: true,
			omitLastInOneLineClassBody: true
		}],
		'@typescript-eslint/unbound-method': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/no-unsafe-enum-comparison': 'off',
		"@typescript-eslint/method-signature-style": ["error", "property"],
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
}, {
	files: [ 'src/errors.ts', 'src/tsbuild.ts' ],
	rules: {
		'no-restricted-imports': ['error', {
			patterns: [{ group: ['typescript'], message: 'This module must not import TypeScript directly.' }]
		}]
	}
});