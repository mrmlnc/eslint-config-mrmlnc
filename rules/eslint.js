// https://eslint.org/docs/rules/#possible-errors
const ESLINT_POSSIBLE_ERRORS_RULES = {
	'for-direction': 'error',
	'getter-return': 'error',
	'no-async-promise-executor': 'error',
	'no-await-in-loop': 'error',
	'no-compare-neg-zero': 'error',
	'no-cond-assign': 'error',
	'no-console': 'off',
	'no-constant-condition': 'error',
	'no-control-regex': 'error',
	'no-debugger': 'error',
	'no-dupe-args': 'error',
	'no-dupe-else-if': 'error',
	'no-dupe-keys': 'error',
	'no-duplicate-case': 'error',
	'no-empty': ['error', { allowEmptyCatch: true }],
	'no-empty-character-class': 'error',
	'no-ex-assign': 'error',
	'no-extra-boolean-cast': 'error',
	'no-extra-parens': 'error',
	'no-extra-semi': 'error',
	'no-func-assign': 'error',
	'no-import-assign': 'error',
	'no-inner-declarations': 'error',
	'no-invalid-regexp': 'error',
	'no-irregular-whitespace': 'error',
	'no-loss-of-precision': 'error',
	'no-misleading-character-class': 'error',
	'no-obj-calls': 'error',
	'no-promise-executor-return': 'error',
	'no-prototype-builtins': 'error',
	'no-regex-spaces': 'error',
	'no-setter-return': 'error',
	'no-sparse-arrays': 'error',
	'no-template-curly-in-string': 'error',
	'no-unexpected-multiline': 'error',
	'no-unreachable': 'error',
	'no-unreachable-loop': 'error',
	'no-unsafe-finally': 'error',
	'no-unsafe-negation': 'error',
	'no-unsafe-optional-chaining': 'error',
	'no-useless-backreference': 'error',
	'require-atomic-updates': 'error',
	'use-isnan': 'error',
	'valid-typeof': ['error', { requireStringLiterals: false }]
};

// https://eslint.org/docs/rules/#best-practices
const ESLINT_BEST_PRACTICES_RULES = {
	'accessor-pairs': ['error', { enforceForClassMembers: true }],
	'array-callback-return': ['error', { allowImplicit: true }],
	'block-scoped-var': 'error',
	'class-methods-use-this': 'off',
	complexity: 'warn',
	'consistent-return': 'off',
	curly: 'error',
	'default-case': 'error',
	'default-case-last': 'error',
	'default-param-last': 'error',
	'dot-location': ['error', 'property'],
	'dot-notation': 'error',
	eqeqeq: 'error',
	'grouped-accessor-pairs': ['error', 'getBeforeSet'],
	'guard-for-in': 'error',
	'max-classes-per-file': 'off',
	'no-alert': 'error',
	'no-caller': 'error',
	'no-case-declarations': 'error',
	'no-constructor-return': 'error',
	'no-div-regex': 'off',
	'no-else-return': ['error', { allowElseIf: false }],
	'no-empty-function': 'off',
	'no-empty-pattern': 'error',
	'no-eq-null': 'error',
	'no-eval': 'error',
	'no-extend-native': 'error',
	'no-extra-bind': 'error',
	'no-extra-label': 'error',
	'no-fallthrough': 'error',
	'no-floating-decimal': 'error',
	'no-global-assign': 'error',
	'no-implicit-coercion': 'error',
	'no-implicit-globals': 'error',
	'no-implied-eval': 'error',
	'no-invalid-this': 'off',
	'no-iterator': 'error',
	'no-labels': 'error',
	'no-lone-blocks': 'error',
	'no-loop-func': 'error',
	'no-magic-numbers': 'off',
	'no-multi-spaces': 'error',
	'no-multi-str': 'error',
	'no-new': 'error',
	'no-new-func': 'error',
	'no-new-wrappers': 'error',
	'no-nonoctal-decimal-escape': 'error',
	'no-octal': 'error',
	'no-octal-escape': 'error',
	'no-param-reassign': 'error',
	'no-proto': 'error',
	'no-redeclare': 'error',
	'no-restricted-properties': 'off',
	'no-return-assign': ['error', 'always'],
	'no-return-await': 'error',
	'no-script-url': 'error',
	'no-self-assign': ['error', { props: true }],
	'no-self-compare': 'error',
	'no-sequences': 'error',
	'no-throw-literal': 'error',
	'no-unmodified-loop-condition': 'error',
	'no-unused-expressions': 'error',
	'no-unused-labels': 'error',
	'no-useless-call': 'error',
	'no-useless-catch': 'error',
	'no-useless-concat': 'error',
	'no-useless-escape': 'error',
	'no-useless-return': 'error',
	'no-void': 'error',
	'no-warning-comments': 'warn',
	'no-with': 'error',
	'prefer-named-capture-group': 'error',
	'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
	'prefer-regex-literals': 'error',
	radix: 'error',
	'require-await': 'off',
	'require-unicode-regexp': 'off',
	'vars-on-top': 'off',
	'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],
	yoda: 'error'
};

// https://eslint.org/docs/rules/#strict-mode
const ESLINT_STRICT_RULES = {
	strict: 'off'
};

// https://eslint.org/docs/rules/#variables
const ESLINT_VARIABLES_RULES = {
	'init-declarations': 'off',
	'no-delete-var': 'error',
	'no-label-var': 'error',
	'no-restricted-globals': ['error', 'event'],
	'no-shadow': 'off',
	'no-shadow-restricted-names': 'error',
	'no-undef': ['error', { typeof: true }],
	'no-undef-init': 'error',
	'no-undefined': 'off',
	'no-unused-vars': [
		'error',
		{
			vars: 'all',
			args: 'after-used',
			ignoreRestSiblings: true,
			argsIgnorePattern: /^_/.source,
			caughtErrors: 'all',
			caughtErrorsIgnorePattern: /^_$/.source
		}
	],
	'no-use-before-define': 'off'
};

// https://eslint.org/docs/rules/#stylistic-issues
const ESLINT_STYLISTIC_ISSUES = {
	'array-bracket-newline': ['error', 'consistent'],
	'array-bracket-spacing': ['error', 'never'],
	'array-element-newline': ['error', 'consistent'],
	'block-spacing': ['error', 'always'],
	'brace-style': [
		'error',
		'1tbs',
		{ allowSingleLine: false }
	],
	camelcase: ['error', { properties: 'always' }],
	'capitalized-comments': [
		'error',
		'always',
		{
			ignorePattern: /prettier-ignore/.source,
			ignoreInlineComments: true,
			ignoreConsecutiveComments: true
		}
	],
	'comma-dangle': ['error', 'never'],
	'comma-spacing': [
		'error',
		{
			before: false,
			after: true
		}
	],
	'comma-style': ['error', 'last'],
	'computed-property-spacing': [
		'error',
		'never',
		{ enforceForClassMembers: true }
	],
	'consistent-this': 'off',
	'eol-last': 'error',
	'func-call-spacing': ['error', 'never'],
	'func-name-matching': ['error', { considerPropertyDescriptor: true }],
	'func-names': ['error', 'never'],
	'func-style': 'off',
	'function-call-argument-newline': ['error', 'consistent'],
	'function-paren-newline': 'off',
	'id-denylist': 'off',
	'id-length': 'off',
	'id-match': 'off',
	'implicit-arrow-linebreak': 'off',
	indent: [
		'error',
		'tab',
		{ SwitchCase: 1 }
	],
	'jsx-quotes': 'error',
	'key-spacing': [
		'error',
		{
			beforeColon: false,
			afterColon: true
		}
	],
	'keyword-spacing': 'error',
	'line-comment-position': 'off',
	'linebreak-style': [
		'error',
		'unix'
	],
	'lines-around-comment': 'off',
	'lines-between-class-members': [
		'error',
		'always',
		{ exceptAfterSingleLine: true }
	],
	'max-depth': 'warn',
	'max-len': 'off',
	'max-lines': 'off',
	'max-lines-per-function': 'off',
	'max-nested-callbacks': ['warn', 4],
	'max-params': ['warn', { max: 4 }],
	'max-statements': 'off',
	'max-statements-per-line': 'error',
	'multiline-comment-style': 'off',
	'multiline-ternary': ['error', 'never'],
	'new-cap': [
		'error',
		{
			newIsCap: true,
			capIsNew: true
		}
	],
	'new-parens': 'error',
	'newline-per-chained-call': 'off',
	'no-array-constructor': 'error',
	'no-bitwise': 'error',
	'no-continue': 'off',
	'no-inline-comments': 'off',
	'no-lonely-if': 'error',
	'no-mixed-operators': 'error',
	'no-mixed-spaces-and-tabs': 'error',
	'no-multi-assign': 'error',
	'no-multiple-empty-lines': ['error', { max: 1 }],
	'no-negated-condition': 'error',
	'no-nested-ternary': 'error',
	'no-new-object': 'error',
	'no-plusplus': 'off',
	'no-restricted-syntax': ['error', 'WithStatement'],
	'no-tabs': 'off',
	'no-ternary': 'off',
	'no-trailing-spaces': 'error',
	'no-underscore-dangle': 'off',
	'no-unneeded-ternary': 'error',
	'no-whitespace-before-property': 'error',
	'nonblock-statement-body-position': 'off',
	'object-curly-newline': 'off',
	'object-curly-spacing': ['error', 'always'],
	'object-property-newline': 'off',
	'one-var': ['error', 'never'],
	'one-var-declaration-per-line': 'error',
	'operator-assignment': ['error', 'always'],
	'operator-linebreak': ['error', 'after'],
	'padded-blocks': [
		'error',
		'never',
		{ allowSingleLineBlocks: false }
	],
	'padding-line-between-statements': [
		'error',
		{
			blankLine: 'always',
			prev: 'multiline-block-like',
			next: '*'
		}
	],
	'prefer-exponentiation-operator': 'error',
	'prefer-object-spread': 'error',
	'quote-props': ['error', 'as-needed'],
	quotes: ['error', 'single', { avoidEscape: true }],
	semi: ['error', 'always'],
	'semi-spacing': [
		'error',
		{
			before: false,
			after: true
		}
	],
	'semi-style': ['error', 'last'],
	'sort-keys': 'off',
	'sort-vars': 'off',
	'space-before-blocks': ['error', 'always'],
	'space-before-function-paren': [
		'error',
		{
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always'
		}
	],
	'space-in-parens': ['error', 'never'],
	'space-infix-ops': 'error',
	'space-unary-ops': 'error',
	'spaced-comment': [
		'error',
		'always',
		{
			line: {
				exceptions: ['-', '+', '*'],
				markers: ['!', '/', '=>']
			},
			block: {
				exceptions: ['-', '+', '*'],
				markers: ['!', '*'],
				balanced: true
			}
		}
	],
	'switch-colon-spacing': [
		'error',
		{
			after: true,
			before: false
		}
	],
	'template-tag-spacing': ['error', 'never'],
	'unicode-bom': ['error', 'never'],
	'wrap-regex': 'off'
};

// https://eslint.org/docs/rules/#ecmascript-6
const ESLINT_ECMASCRIPT6_RULES = {
	'arrow-body-style': 'off',
	'arrow-parens': ['error', 'always'],
	'arrow-spacing': [
		'error',
		{
			before: true,
			after: true
		}
	],
	'constructor-super': 'error',
	'generator-star-spacing': ['error', 'both'],
	'no-class-assign': 'error',
	'no-confusing-arrow': 'off',
	'no-const-assign': 'error',
	'no-dupe-class-members': 'error',
	'no-duplicate-imports': 'off',
	'no-new-symbol': 'error',
	'no-restricted-exports': 'off',
	'no-restricted-imports': [
		'error',
		'domain',
		'freelist',
		'smalloc',
		'sys',
		'colors'
	],
	'no-this-before-super': 'error',
	'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
	'no-useless-constructor': 'error',
	'no-useless-rename': 'error',
	'no-var': 'error',
	'object-shorthand': ['error', 'always'],
	'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
	'prefer-const': ['error', { destructuring: 'all' }],
	'prefer-destructuring': 'off',
	'prefer-numeric-literals': 'error',
	'prefer-rest-params': 'error',
	'prefer-spread': 'error',
	'prefer-template': 'error',
	'require-yield': 'error',
	'rest-spread-spacing': ['error', 'never'],
	'sort-imports': 'off',
	'symbol-description': 'error',
	'template-curly-spacing': 'error',
	'yield-star-spacing': ['error', 'both']
};

module.exports = {
	...ESLINT_POSSIBLE_ERRORS_RULES,
	...ESLINT_BEST_PRACTICES_RULES,
	...ESLINT_STRICT_RULES,
	...ESLINT_VARIABLES_RULES,
	...ESLINT_STYLISTIC_ISSUES,
	...ESLINT_ECMASCRIPT6_RULES
};
