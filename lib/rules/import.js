// https://github.com/benmosher/eslint-plugin-import#static-analysis
const IMPORT_STATIC_ANALYSIS_RULES = {
	'import/no-unresolved': ['error', { caseSensitive: true }],
	'import/named': 'error',
	'import/default': 'error',
	'import/namespace': ['error', { allowComputed: true }],
	'import/no-restricted-paths': 'off',
	'import/no-absolute-path': 'error',
	'import/no-dynamic-require': 'error',
	'import/no-internal-modules': 'off',
	'import/no-webpack-loader-syntax': 'error',
	'import/no-self-import': 'error',
	'import/no-cycle': 'error',
	'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
	'import/no-relative-parent-imports': 'off',
	'import/no-relative-packages': 'error'
};

// https://github.com/benmosher/eslint-plugin-import#helpful-warnings
const IMPORT_HELPFUL_WARNINGS_RULES = {
	'import/export': 'error',
	'import/no-named-as-default': 'error',
	'import/no-named-as-default-member': 'error',
	'import/no-deprecated': 'warn',
	'import/no-extraneous-dependencies': 'error',
	'import/no-mutable-exports': 'error',
	'import/no-unused-modules': 'error'
};

// https://github.com/benmosher/eslint-plugin-import#module-systems
const IMPORT_MODULE_SYSTEMS_RULES = {
	'import/unambiguous': 'off',
	'import/no-commonjs': 'off',
	'import/no-amd': 'error',
	'import/no-nodejs-modules': 'off',
	'import/no-import-module-exports': 'off'
};

// https://github.com/benmosher/eslint-plugin-import#style-guide
const IMPORT_STYLE_GUIDE_RULES = {
	// Produce an error for `import = require` TS syntax.
	'import/first': 'off',
	'import/exports-last': 'off',
	// Produce an error when `import type` is used for default and named bindings.
	// `import type Settings from '../settings';`
	// `import type { Options } from '../settings';`
	'import/no-duplicates': 'off',
	'import/no-namespace': 'off',
	'import/extensions': ['error', 'never', { json: 'always' }],
	'import/order': 'error',
	'import/newline-after-import': 'error',
	'import/prefer-default-export': 'off',
	'import/max-dependencies': 'off',
	'import/no-unassigned-import': 'error',
	'import/no-named-default': 'error',
	'import/no-default-export': 'off',
	'import/no-named-export': 'off',
	'import/no-anonymous-default-export': 'error',
	'import/group-exports': 'off',
	'import/dynamic-import-chunkname': 'off'
};

module.exports = {
	...IMPORT_STATIC_ANALYSIS_RULES,
	...IMPORT_HELPFUL_WARNINGS_RULES,
	...IMPORT_MODULE_SYSTEMS_RULES,
	...IMPORT_STYLE_GUIDE_RULES
};
