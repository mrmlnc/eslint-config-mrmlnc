// https://github.com/mysticatea/eslint-plugin-node#possible-errors
const NODE_POSSIBLE_RULES = {
	'n/handle-callback-err': ['error', '^(err|error)|.+Error$'],
	'n/no-callback-literal': 'error',
	'n/no-exports-assign': 'error',

	// Redundant with import/no-extraneous-dependencies
	'n/no-extraneous-import': 'off',
	'n/no-extraneous-require': 'off',

	// Redundant with import/no-unresolved
	'n/no-missing-import': 'off',
	'n/no-missing-require': 'off',

	'n/no-new-require': 'error',
	'n/no-path-concat': 'error',
	'n/no-process-exit': 'off',
	'n/no-unpublished-bin': 'error',
	'n/no-unpublished-import': 'error',
	'n/no-unpublished-require': 'error',
	'n/no-unsupported-features/es-builtins': 'error',

	// Conflict with TypeScript
	'n/no-unsupported-features/es-syntax': 'off',
	'n/no-unsupported-features/node-builtins': 'off',

	'n/process-exit-as-throw': 'error',
	'n/hashbang': 'error',
};

// https://github.com/mysticatea/eslint-plugin-node#best-practices
const NODE_BEST_PRACTICES_RULES = {
	'n/no-deprecated-api': 'error',
};

// https://github.com/mysticatea/eslint-plugin-node#stylistic-issues
const NODE_STYLISTIC_ISSUES_RULES = {
	'n/callback-return': 'error',
	'n/exports-style': ['error', 'module.exports'],
	// Redundant with import/@todo
	'n/file-extension-in-import': 'off',
	'n/global-require': 'off',
	'n/no-mixed-requires': [
		'error',
		{
			grouping: true,
			allowCall: true,
		},
	],
	'n/no-process-env': 'off',
	'n/no-restricted-import': 'off',
	'n/no-restricted-require': 'off',
	'n/no-sync': 'off',
	'n/prefer-global/buffer': ['error', 'always'],
	'n/prefer-global/console': ['error', 'always'],
	'n/prefer-global/process': ['error', 'always'],
	'n/prefer-global/text-decoder': ['error', 'always'],
	'n/prefer-global/text-encoder': ['error', 'always'],
	'n/prefer-global/url-search-params': ['error', 'always'],
	'n/prefer-node-protocol': 'error',
	'n/prefer-global/url': ['error', 'always'],
	'n/prefer-promises/dns': 'off',
	'n/prefer-promises/fs': 'off',
};

const NODE_PLUGIN_RULES = {
	...NODE_POSSIBLE_RULES,
	...NODE_BEST_PRACTICES_RULES,
	...NODE_STYLISTIC_ISSUES_RULES,
};

export default NODE_PLUGIN_RULES;
