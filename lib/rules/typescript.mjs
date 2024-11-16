import eslintRules from './eslint.mjs';

const TYPESCRIPT_ESLINT_OVERRIDES_RULES = {
	'class-methods-use-this': 'off',
	'@typescript-eslint/class-methods-use-this': eslintRules['class-methods-use-this'],

	'default-param-last': 'off',
	'@typescript-eslint/default-param-last': eslintRules['default-param-last'],

	'dot-notation': 'off',
	'@typescript-eslint/dot-notation': eslintRules['dot-notation'],

	'init-declarations': 'off',
	'@typescript-eslint/init-declarations': eslintRules['init-declarations'],

	'max-params': 'off',
	'@typescript-eslint/max-params': eslintRules['max-params'],

	'no-array-constructor': 'off',
	'@typescript-eslint/no-array-constructor': eslintRules['no-array-constructor'],

	'no-dupe-class-members': 'off',
	'@typescript-eslint/no-dupe-class-members': eslintRules['no-dupe-class-members'],

	'no-empty-function': 'off',
	'@typescript-eslint/no-empty-function': eslintRules['no-empty-function'],

	'no-implied-eval': 'off',
	'@typescript-eslint/no-implied-eval': eslintRules['no-implied-eval'],

	'no-invalid-this': 'off',
	'@typescript-eslint/no-invalid-this': eslintRules['no-invalid-this'],

	'no-loop-func': 'off',
	'@typescript-eslint/no-loop-func': eslintRules['no-loop-func'],

	'no-magic-numbers': 'off',
	'@typescript-eslint/no-magic-numbers': eslintRules['no-magic-numbers'],

	'no-redeclare': 'off',
	'@typescript-eslint/no-redeclare': eslintRules['no-redeclare'],

	'no-restricted-imports': 'off',
	'@typescript-eslint/no-restricted-imports': eslintRules['no-restricted-imports'],

	'no-shadow': 'off',
	'@typescript-eslint/no-shadow': eslintRules['no-shadow'],

	'no-throw-literal': 'off',
	'@typescript-eslint/only-throw-error': eslintRules['no-throw-literal'],

	'no-unused-expressions': 'off',
	'@typescript-eslint/no-unused-expressions': eslintRules['no-unused-expressions'],

	'no-unused-vars': 'off',
	'@typescript-eslint/no-unused-vars': eslintRules['no-unused-vars'],

	'no-use-before-define': 'off',
	'@typescript-eslint/no-use-before-define': eslintRules['no-use-before-define'],

	'no-useless-constructor': 'off',
	'@typescript-eslint/no-useless-constructor': eslintRules['no-useless-constructor'],

	'prefer-destructuring': 'off',
	'@typescript-eslint/prefer-destructuring': eslintRules['prefer-destructuring'],

	'require-await': 'off',
	'@typescript-eslint/require-await': eslintRules['require-await'],

	'prefer-promise-reject-errors': 'off',
	'@typescript-eslint/prefer-promise-reject-errors': eslintRules['prefer-promise-reject-errors'],
};

// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
const TYPESCRIPT_RULES = {
	'@typescript-eslint/adjacent-overload-signatures': 'error',
	'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
	'@typescript-eslint/await-thenable': 'error',
	'@typescript-eslint/ban-ts-comment': [
		'error',
		{
			'ts-expect-error': 'allow-with-description',
			'ts-ignore': 'allow-with-description',
			'ts-nocheck': false,
			'ts-check': false,
			minimumDescriptionLength: 10,
		},
	],
	// We do not use TSLint anymore.
	'@typescript-eslint/ban-tslint-comment': 'off',
	'@typescript-eslint/no-restricted-types': [
		'error',
		{
			types: {
				object: {
					message: 'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
					fixWith: 'Record<string, unknown>',
				},
			},
		},
	],
	'@typescript-eslint/no-empty-object-type': [
		'error',
		{
			allowInterfaces: 'with-single-extends',
		},
	],
	'@typescript-eslint/no-unsafe-function-type': 'error',
	'@typescript-eslint/no-wrapper-object-types': 'error',
	'@typescript-eslint/class-literal-property-style': ['error', 'fields'],
	'@typescript-eslint/consistent-generic-constructors': 'error',
	'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
	// Prefer to use tsconfig.noImplicitReturns instead of this rule.
	'@typescript-eslint/consistent-return': 'off',
	'@typescript-eslint/consistent-type-assertions': [
		'error',
		{
			assertionStyle: 'as',
			objectLiteralTypeAssertions: 'never',
		},
	],
	// https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections
	'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
	'@typescript-eslint/consistent-type-imports': [
		'error',
		{
			prefer: 'type-imports',
			disallowTypeAnnotations: true,
		},
	],
	'@typescript-eslint/consistent-type-exports': 'error',
	'@typescript-eslint/explicit-function-return-type': [
		'error',
		{
			allowExpressions: true,
			allowTypedFunctionExpressions: true,
			allowHigherOrderFunctions: true,
		},
	],
	'@typescript-eslint/explicit-member-accessibility': [
		'error',
		{
			accessibility: 'explicit',
			overrides: {
				constructors: 'off',
			},
		},
	],
	// We have "explicit-function-return-type" rule, which requires types always.
	'@typescript-eslint/explicit-module-boundary-types': 'off',
	'@typescript-eslint/member-ordering': [
		'error',
		{
			default: [
				'static-field',
				'instance-field',
				'constructor',
				'static-method',
				'instance-method',
			],
			interfaces: [
				'constructor',
				'method',
				'field',
			],
			typeLiterals: [
				'constructor',
				'method',
				'field',
			],
		},
	],
	'@typescript-eslint/method-signature-style': ['error', 'property'],
	'@typescript-eslint/naming-convention': [
		'error',
		{
			selector: 'typeLike',
			format: ['StrictPascalCase'],
		},
		// I want to use `I` prefix for interfaces that must have an implementations.
		{
			selector: 'interface',
			format: ['PascalCase'],
			filter: {
				regex: '^I[A-Z]',
				match: true,
			},
		},
		{
			// Type parameter name should either be `T` or a descriptive name.
			selector: 'typeParameter',
			filter: /^T$|^[A-Z][A-Za-z]+$/.source,
			format: ['StrictPascalCase'],
		},
		{
			// Enforce that private members are prefixed with an underscore.
			selector: 'memberLike',
			modifiers: ['private'],
			format: ['strictCamelCase'],
			leadingUnderscore: 'require',
		},
		{
			// Enforce that protected members are prefixed with an underscore.
			selector: 'memberLike',
			modifiers: ['protected'],
			format: ['strictCamelCase'],
			leadingUnderscore: 'require',
		},
	],
	'@typescript-eslint/no-array-delete': 'error',
	'@typescript-eslint/no-base-to-string': 'error',
	// The non-null assertion is forbid by this config.
	'@typescript-eslint/no-confusing-non-null-assertion': 'off',
	'@typescript-eslint/no-confusing-void-expression': 'error',
	'@typescript-eslint/no-deprecated': 'warn',
	'@typescript-eslint/no-duplicate-enum-values': 'error',
	'@typescript-eslint/no-duplicate-type-constituents': 'error',
	'@typescript-eslint/no-dynamic-delete': 'error',
	'@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
	'@typescript-eslint/no-extra-non-null-assertion': 'error',
	'@typescript-eslint/no-extraneous-class': 'error',
	'@typescript-eslint/no-floating-promises': 'error',
	'@typescript-eslint/no-for-in-array': 'error',
	'@typescript-eslint/no-import-type-side-effects': 'error',
	'@typescript-eslint/no-inferrable-types': [
		'error',
		{
			ignoreParameters: true,
			ignoreProperties: true,
		},
	],
	'@typescript-eslint/no-invalid-void-type': 'error',
	'@typescript-eslint/no-meaningless-void-operator': 'error',
	'@typescript-eslint/no-misused-new': 'error',
	'@typescript-eslint/no-mixed-enums': 'error',
	'@typescript-eslint/no-misused-promises': [
		'error',
		{
			checksVoidReturn: true,
			checksConditionals: true,
		},
	],
	'@typescript-eslint/no-namespace': 'off',
	'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
	'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
	'@typescript-eslint/no-non-null-assertion': 'error',
	'@typescript-eslint/no-redundant-type-constituents': 'error',
	'@typescript-eslint/no-require-imports': 'error',
	'@typescript-eslint/no-this-alias': 'error',
	'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
	'@typescript-eslint/no-unnecessary-condition': 'error',
	'@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
	'@typescript-eslint/no-unnecessary-qualifier': 'error',
	'@typescript-eslint/no-unnecessary-template-expression': 'error',
	'@typescript-eslint/no-unnecessary-type-arguments': 'error',
	'@typescript-eslint/no-unnecessary-type-assertion': 'error',
	'@typescript-eslint/no-unnecessary-type-constraint': 'error',
	'@typescript-eslint/no-unnecessary-type-parameters': 'error',
	'@typescript-eslint/no-unsafe-argument': 'error',
	'@typescript-eslint/no-unsafe-assignment': 'error',
	'@typescript-eslint/no-unsafe-call': 'error',
	'@typescript-eslint/no-unsafe-declaration-merging': 'error',
	'@typescript-eslint/no-unsafe-enum-comparison': 'error',
	'@typescript-eslint/no-unsafe-member-access': 'error',
	'@typescript-eslint/no-unsafe-return': 'error',
	'@typescript-eslint/no-unsafe-unary-minus': 'error',
	'@typescript-eslint/no-useless-empty-export': 'error',
	'@typescript-eslint/non-nullable-type-assertion-style': 'off',
	// I don't care about the using parameter properties in constructors.
	'@typescript-eslint/parameter-properties': 'off',
	'@typescript-eslint/prefer-as-const': 'error',
	'@typescript-eslint/prefer-enum-initializers': 'error',
	'@typescript-eslint/prefer-find': 'error',
	'@typescript-eslint/prefer-for-of': 'error',
	'@typescript-eslint/prefer-function-type': 'error',
	'@typescript-eslint/prefer-includes': 'error',
	'@typescript-eslint/prefer-literal-enum-member': 'error',
	'@typescript-eslint/prefer-namespace-keyword': 'error',
	'@typescript-eslint/prefer-nullish-coalescing': [
		'error',
		{
			ignoreConditionalTests: true,
			ignoreMixedLogicalExpressions: true,
		},
	],
	'@typescript-eslint/prefer-optional-chain': 'error',
	'@typescript-eslint/prefer-readonly': 'error',
	// Right now, I think this rule is only required for public types.
	'@typescript-eslint/prefer-readonly-parameter-types': 'off',
	'@typescript-eslint/prefer-reduce-type-parameter': 'error',
	'@typescript-eslint/prefer-regexp-exec': 'error',
	'@typescript-eslint/prefer-return-this-type': 'error',
	'@typescript-eslint/prefer-string-starts-ends-with': 'error',
	// Right now, I think TS cover all the cases.
	'@typescript-eslint/promise-function-async': 'off',
	'@typescript-eslint/require-array-sort-compare': 'error',
	'@typescript-eslint/restrict-plus-operands': 'error',
	'@typescript-eslint/restrict-template-expressions': [
		'error',
		{
			allowNumber: true,
			allowBoolean: true,
		},
	],
	'@typescript-eslint/return-await': 'error',
	'@typescript-eslint/strict-boolean-expressions': 'error',
	'@typescript-eslint/switch-exhaustiveness-check': 'error',
	'@typescript-eslint/triple-slash-reference': 'error',
	'@typescript-eslint/typedef': [
		'error',
		{
			arrowParameter: false,
			memberVariableDeclaration: false,
			parameter: true,
			propertyDeclaration: true,
		},
	],
	'@typescript-eslint/unbound-method': 'off',
	'@typescript-eslint/unified-signatures': 'error',
	// It's very annoying right now for me.
	'@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
};

const TYPESCRIPT_PLUGIN_RULES = {
	...TYPESCRIPT_ESLINT_OVERRIDES_RULES,
	...TYPESCRIPT_RULES,
};

export default TYPESCRIPT_PLUGIN_RULES;
