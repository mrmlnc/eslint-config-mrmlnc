import eslintConfigXo from 'eslint-config-xo';

/**
 * Build the ESLint flat config.
 *
 * @param {import('eslint-config-xo').Options} [options] - XO config options.
 * @returns {import('eslint').Linter.Config[]} ESLint flat config objects.
 */
export function build(options = {}) {
	return [
		...eslintConfigXo(options),
		{
			name: 'mrmlnc/rules',
			files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
			rules: {
				'@stylistic/arrow-parens': ['error', 'always'],
				'@stylistic/object-curly-spacing': ['error', 'always'],
				'jsdoc/require-asterisk-prefix': ['error', 'always'],
			},
		},
		{
			files: ['src/**/*.{test,spec,func,e2e}.ts'],
			rules: {
				'@typescript-eslint/no-floating-promises': [
					'error',
					{
						allowForKnownSafeCalls: [
							{ from: 'lib', name: 'describe' },
							{ from: 'lib', name: 'it' },
							{ from: 'lib', name: 'test' },
							{ from: 'lib', name: 'before' },
							{ from: 'lib', name: 'beforeEach' },
							{ from: 'lib', name: 'after' },
							{ from: 'lib', name: 'afterEach' },
						],
					},
				],
			},
		},
	];
}
