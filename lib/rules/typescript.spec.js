const { Linter } = require('eslint');
const eslintPlugin = require('@typescript-eslint/eslint-plugin');

const tests = require('../tests');
const rules = require('./typescript');

function getAvailablePluginRules() {
	const actualRules = Object.entries(eslintPlugin.rules).filter(([_, rule]) => rule.meta.deprecated !== true);
	const availablePluginRules = new Map(actualRules);

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
