// https://github.com/mysticatea/eslint-plugin-node#possible-errors
const NODE_POSSIBLE_RULES = {
	'node/handle-callback-err': ['error', '^(err|error)|.+Error$'],
	'node/no-callback-literal': 'error',
	'node/no-exports-assign': 'error',

	// Redundant with import/no-extraneous-dependencies
	'node/no-extraneous-import': 'off',
	'node/no-extraneous-require': 'off',

	// Redundant with import/no-unresolved
	'node/no-missing-import': 'off',
	'node/no-missing-require': 'off',

	'node/no-new-require': 'error',
	'node/no-path-concat': 'error',
	'node/no-process-exit': 'off',
	'node/no-unpublished-bin': 'error',
	'node/no-unpublished-import': 'error',
	'node/no-unpublished-require': 'error',
	'node/no-unsupported-features/es-builtins': 'error',

	// Conflict with TypeScript
	'node/no-unsupported-features/es-syntax': 'off',
	'node/no-unsupported-features/node-builtins': 'off',

	'node/process-exit-as-throw': 'error',
	'node/shebang': 'error'
};

// https://github.com/mysticatea/eslint-plugin-node#best-practices
const NODE_BEST_PRACTICES_RULES = {
	'node/no-deprecated-api': 'error'
};

// https://github.com/mysticatea/eslint-plugin-node#stylistic-issues
const NODE_STYLISTIC_ISSUES_RULES = {
	'node/callback-return': 'error',
	'node/exports-style': ['error', 'module.exports'],
	// Redundant with import/@todo
	'node/file-extension-in-import': 'off',
	'node/global-require': 'off',
	'node/no-mixed-requires': [
		'error',
		{
			grouping: true,
			allowCall: true
		}
	],
	'node/no-process-env': 'off',
	'node/no-restricted-import': 'off',
	'node/no-restricted-require': 'off',
	'node/no-sync': 'off',
	'node/prefer-global/buffer': ['error', 'always'],
	'node/prefer-global/console': ['error', 'always'],
	'node/prefer-global/process': ['error', 'always'],
	'node/prefer-global/text-decoder': ['error', 'always'],
	'node/prefer-global/text-encoder': ['error', 'always'],
	'node/prefer-global/url-search-params': ['error', 'always'],
	'node/prefer-global/url': ['error', 'always'],
	'node/prefer-promises/dns': 'off',
	'node/prefer-promises/fs': 'off'
};

module.exports = {
	...NODE_POSSIBLE_RULES,
	...NODE_BEST_PRACTICES_RULES,
	...NODE_STYLISTIC_ISSUES_RULES
};
