// https://github.com/lo1tuma/eslint-plugin-mocha/tree/master/docs/rules#rules
const MOCHA_RULES = {
	'mocha/consistent-spacing-between-blocks': 'error',
	'mocha/handle-done-callback': 'error',
	'mocha/max-top-level-suites': ['error', { limit: 3 }],
	'mocha/no-async-describe': 'error',
	'mocha/no-empty-description': 'error',
	'mocha/no-exclusive-tests': 'error',
	'mocha/no-exports': 'error',
	'mocha/no-global-tests': 'error',
	'mocha/no-hooks': 'off',
	'mocha/no-hooks-for-single-case': 'off',
	'mocha/no-identical-title': 'error',
	'mocha/no-mocha-arrows': 'off',
	'mocha/no-nested-tests': 'error',
	'mocha/no-pending-tests': 'error',
	'mocha/no-return-and-callback': 'error',
	'mocha/no-return-from-async': 'error',
	'mocha/no-setup-in-describe': 'error',
	'mocha/no-sibling-hooks': 'error',
	'mocha/no-skipped-tests': 'error',
	'mocha/no-synchronous-tests': 'off',
	'mocha/no-top-level-hooks': 'error',
	'mocha/prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
	'mocha/valid-suite-description': [
		'error',
		{
			pattern: '^(.|[A-Z])',
			suiteNames: ['describe'],
			message: 'The `describe` declaration must starts with a dot or capital letter',
		},
	],
	'mocha/valid-test-description': [
		'error',
		{
			pattern: '^should.+',
			testNames: ['it'],
			message: 'The `it` declaration must starts with the "should" word',
		},
	],
};

const MOCHA_PLUGIN_RULES = {
	...MOCHA_RULES,
};

export default MOCHA_PLUGIN_RULES;
