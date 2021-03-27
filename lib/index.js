const rules = require('./rules');

const IMPORT_PLUGIN_JAVASCRIPT_EXTENSIONS = ['.js', '.jsx'];
const IMPORT_PLUGIN_TYPESCRIPT_EXTENSIONS = ['.ts', '.tsx', '.d.ts'];
const IMPORT_PLUGIN_EXTENSIONS = [...IMPORT_PLUGIN_JAVASCRIPT_EXTENSIONS, ...IMPORT_PLUGIN_TYPESCRIPT_EXTENSIONS];

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module'
	},
	env: {
		node: true,
		mocha: true,
		es2021: true
	},
	reportUnusedDisableDirectives: true,
	plugins: [
		'import',
		'node',
		'unicorn'
	],
	rules: {
		...rules.eslint,
		...rules.node,
		...rules.import,
		...rules.unicorn
	},
	overrides: [
		{
			files: ['**/*.ts'],
			extends: [
				'plugin:@typescript-eslint/recommended'
			],
			parserOptions: {
				project: './tsconfig.json'
			},
			parser: '@typescript-eslint/parser',
			plugins: [
				'@typescript-eslint'
			],
			rules: {
				...rules.typescript
			},
			settings: {
				'import/extensions': IMPORT_PLUGIN_EXTENSIONS,
				'import/external-module-folders': ['node_modules', 'node_modules/@types'],
				'import/parsers': {
					'@typescript-eslint/parser': IMPORT_PLUGIN_TYPESCRIPT_EXTENSIONS
				},
				'import/resolver': {
					node: { extensions: IMPORT_PLUGIN_EXTENSIONS }
				}
			}
		},
		{
			files: ['**/*.spec.{ts,js}'],
			plugins: [
				'mocha'
			],
			rules: {
				'max-nested-callbacks': 'off',
				'@typescript-eslint/no-magic-numbers': 'off',
				...rules.mocha
			}
		}
	]
};
