const { Linter } = require('eslint');
const eslintPlugin = require('@typescript-eslint/eslint-plugin');

const rules = require('./typescript');
const tests = require('../tests');

function getAvailablePluginRules() {
	const availablePluginRules = new Map(Object.entries(eslintPlugin.rules));

	return tests.getActualRuleNames(availablePluginRules, '@typescript-eslint');
}

function getEslintCoreRules() {
	const linter = new Linter();

	return new Set(tests.getActualRuleNames(linter.getRules()));
}

function getComparablePluginRules() {
	const eslintCoreRules = getEslintCoreRules();

	return Object.keys(rules)
		.filter((rule) => !eslintCoreRules.has(rule));
}

describe('Rules → TypeScript Plugin', () => {
	it('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = getComparablePluginRules();

		tests.assertRules(actual, expected);
	});
});
