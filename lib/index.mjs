import globals from 'globals';
import stylisticPlugin from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import unicornPlugin from 'eslint-plugin-unicorn';
import nPlugin from 'eslint-plugin-n';
import {
	plugin as typescriptPlugin,
	parser as typescriptParser,
} from 'typescript-eslint';
import mochaPlugin from 'eslint-plugin-mocha';
import perfectionistPlugin from 'eslint-plugin-perfectionist';

import eslintRules from './rules/eslint.mjs';
import stylisticRules from './rules/stylistic.mjs';
import importRules from './rules/import.mjs';
import unicornRules from './rules/unicorn.mjs';
import nRules from './rules/node.mjs';
import typescriptRules from './rules/typescript.mjs';
import mochaRules from './rules/mocha.mjs';
import perfectionistRules from './rules/perfectionist.mjs';

const JAVASCRIPT_MODULE_EXTENSIONS = ['js', 'mjs', 'cjs', 'jsx'];
const TYPESCRIPT_MODULE_EXTENSIONS = ['ts', 'mts', 'cts', 'tsx'];
const TYPESCRIPT_DECLARATION_EXTENSIONS = ['d.ts'];
const MODULE_EXTENSIONS = [...JAVASCRIPT_MODULE_EXTENSIONS, ...TYPESCRIPT_MODULE_EXTENSIONS];
const ALL_EXTENSIONS = [...MODULE_EXTENSIONS, ...TYPESCRIPT_DECLARATION_EXTENSIONS];
const ALL_TYPESCRIPT_EXTENSIONS = [...TYPESCRIPT_MODULE_EXTENSIONS, ...TYPESCRIPT_DECLARATION_EXTENSIONS];

/** @type {import('eslint').Linter.Config} */
const common = {
	name: 'common',
	files: [`**/*.{${ALL_EXTENSIONS.join(',')}}`],
	languageOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
		globals: {
			...globals.es2021,
			...globals.nodeBuiltin,
		},
	},
	linterOptions: {
		reportUnusedDisableDirectives: 'error',
	},
	plugins: {
		stylistic: stylisticPlugin,
		perfectionist: perfectionistPlugin,
		import: importPlugin,
		unicorn: unicornPlugin,
		n: nPlugin,
	},
	settings: {
		'import/extensions': MODULE_EXTENSIONS.map((it) => `.${it}`),
		'import/resolver': {
			node: {
				extensions: MODULE_EXTENSIONS.map((it) => `.${it}`),
			},
		},
	},
	rules: {
		...eslintRules,
		...stylisticRules,
		...perfectionistRules,
		...importRules,
		...unicornRules,
		...nRules,
	},
};

/** @type {import('eslint').Linter.Config} */
const esModuleJavaScript = {
	name: 'es-javascript',
	files: ['**/*.mjs'],
	plugins: {
		'@import': importPlugin,
	},
	rules: {
		'@import/no-commonjs': 'error',
	},
};

/** @type {import('eslint').Linter.Config} */
const typescript = {
	name: 'typescript',
	files: [`**/*.{${ALL_TYPESCRIPT_EXTENSIONS.join(',')}}`],
	plugins: {
		'@typescript-eslint': typescriptPlugin,
	},
	languageOptions: {
		parser: typescriptParser,
		parserOptions: {
			projectService: true,
			warnOnUnsupportedTypeScriptVersion: false,
		},
		globals: {
			NodeJS: 'readonly',
		},
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ALL_TYPESCRIPT_EXTENSIONS.map((it) => `.${it}`),
		},
	},
	rules: {
		...typescriptRules,
	},
};

/** @type {import('eslint').Linter.Config} */
const mocha = {
	name: 'mocha',
	files: [
		`**/*.spec.{${MODULE_EXTENSIONS.join(',')}}`,
		`**/test{,s}/**/*.{${MODULE_EXTENSIONS.join(',')}}`,
	],
	plugins: {
		mocha: mochaPlugin,
	},
	languageOptions: {
		globals: {
			Mocha: 'readonly',
		},
	},
	rules: {
		'max-nested-callbacks': 'off',
		'@typescript-eslint/no-magic-numbers': 'off',
		'n/no-unpublished-import': 'off',
		'import/no-extraneous-dependencies': 'off',
		...mochaRules,
	},
};

/**
 * @param {Object} options
 * @param {boolean} [options.esModuleJavaScript]
 * @param {boolean} [options.typescript]
 * @param {boolean} [options.mocha]
 */
export function build(options) {
	const config = [common];

	if (options.esModuleJavaScript !== false) {
		config.push(esModuleJavaScript);
	}

	if (options.typescript !== false) {
		config.push(typescript);
	}

	if (options.mocha !== false) {
		config.push(mocha);
	}

	return config;
}
