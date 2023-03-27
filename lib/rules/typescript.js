const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');

const eslintRules = require('./eslint');

const ESLINT_RULES_KEYS = Object.keys(eslintRules);
const TYPESCRIPT_ESLINT_RULES_INDEX = new Map(
	Object.entries(typescriptEslintPlugin.rules)
		.filter(([_, rule]) => rule.meta.deprecated !== true)
		.map(([key]) => [key, true]),
);

// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules
const TYPESCRIPT_ESLINT_OVERRIDES_RULES = ESLINT_RULES_KEYS.reduce((collection, key) => {
	if (TYPESCRIPT_ESLINT_RULES_INDEX.has(key)) {
		let typescriptEslintKey = key;

		if (key === 'no-return-await') {
			typescriptEslintKey = 'return-await';
		}

		collection[key] = 'off';
		collection[`@typescript-eslint/${typescriptEslintKey}`] = eslintRules[key];
	}

	return collection;
}, {});

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
	'@typescript-eslint/ban-types': [
		'error',
		{
			types: {
				String: {
					message: 'Use `string` instead.',
					fixWith: 'string',
				},
				Number: {
					message: 'Use `number` instead.',
					fixWith: 'number',
				},
				Boolean: {
					message: 'Use `boolean` instead.',
					fixWith: 'boolean',
				},
				Symbol: {
					message: 'Use `symbol` instead.',
					fixWith: 'symbol',
				},
				Object: {
					message: 'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
					fixWith: 'Record<string, unknown>',
				},
				'{}': {
					message: 'The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.',
					fixWith: 'Record<string, unknown>',
				},
				object: {
					message: 'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
					fixWith: 'Record<string, unknown>',
				},
				Function: 'Use a specific function type instead, like `() => void`.',
			},
		},
	],
	'@typescript-eslint/class-literal-property-style': ['error', 'fields'],
	'@typescript-eslint/consistent-generic-constructors': 'error',
	'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
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
	'@typescript-eslint/member-delimiter-style': [
		'error',
		{
			multiline: {
				delimiter: 'semi',
				requireLast: true,
			},
			singleline: {
				delimiter: 'semi',
				requireLast: false,
			},
		},
	],
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
	'@typescript-eslint/no-base-to-string': 'error',
	// The non-null assertion is forbid by this config.
	'@typescript-eslint/no-confusing-non-null-assertion': 'off',
	'@typescript-eslint/no-confusing-void-expression': 'error',
	'@typescript-eslint/no-duplicate-enum-values': 'error',
	'@typescript-eslint/no-dynamic-delete': 'error',
	'@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
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
	'@typescript-eslint/no-type-alias': [
		'error',
		{
			allowAliases: 'always',
			allowCallbacks: 'always',
			allowConditionalTypes: 'always',
			allowConstructors: 'always',
			allowLiterals: 'in-unions-and-intersections',
			allowMappedTypes: 'always',
			allowTupleTypes: 'in-unions-and-intersections',
			allowGenerics: 'always',
		},
	],
	'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
	'@typescript-eslint/no-unnecessary-condition': 'error',
	'@typescript-eslint/no-unnecessary-qualifier': 'error',
	'@typescript-eslint/no-unnecessary-type-arguments': 'error',
	'@typescript-eslint/no-unnecessary-type-assertion': 'error',
	'@typescript-eslint/no-unnecessary-type-constraint': 'error',
	'@typescript-eslint/no-unsafe-argument': 'error',
	'@typescript-eslint/no-unsafe-assignment': 'error',
	'@typescript-eslint/no-unsafe-call': 'error',
	'@typescript-eslint/no-unsafe-declaration-merging': 'error',
	'@typescript-eslint/no-unsafe-member-access': 'error',
	'@typescript-eslint/no-unsafe-return': 'error',
	'@typescript-eslint/no-useless-empty-export': 'error',
	'@typescript-eslint/no-var-requires': 'error',
	'@typescript-eslint/non-nullable-type-assertion-style': 'off',
	// I don't care about the using parameter properties in constructors.
	'@typescript-eslint/parameter-properties': 'off',
	'@typescript-eslint/prefer-as-const': 'error',
	'@typescript-eslint/prefer-enum-initializers': 'error',
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
	'@typescript-eslint/prefer-ts-expect-error': 'error',
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
	'@typescript-eslint/sort-type-constituents': 'error',
	'@typescript-eslint/strict-boolean-expressions': 'error',
	'@typescript-eslint/switch-exhaustiveness-check': 'error',
	'@typescript-eslint/triple-slash-reference': 'error',
	'@typescript-eslint/type-annotation-spacing': [
		'error',
		{
			before: false,
			after: true,
			overrides: {
				arrow: {
					before: true,
					after: true,
				},
			},
		},
	],
	'@typescript-eslint/typedef': [
		'error',
		{
			arrowParameter: false,
			memberVariableDeclaration: true,
			parameter: true,
			propertyDeclaration: true,
		},
	],
	'@typescript-eslint/unbound-method': 'off',
	'@typescript-eslint/unified-signatures': 'error',
};

module.exports = {
	...TYPESCRIPT_ESLINT_OVERRIDES_RULES,
	...TYPESCRIPT_RULES,
};
