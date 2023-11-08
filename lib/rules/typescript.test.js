const { test } = require('node:test');

const { Linter } = require('eslint');
const stylisticPlugin = require('@stylistic/eslint-plugin');
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

function getStylisticRules() {
	const actualRules = Object.entries(stylisticPlugin.rules).filter(([_, rule]) => rule.meta.deprecated !== true);
	const availablePluginRules = new Map(actualRules);

	const rules = tests.getActualRuleNames(availablePluginRules, '@stylistic');

	return new Set(rules);
}

function getComparablePluginRules() {
	const eslintCoreRules = getEslintCoreRules();
	const stylisticRules = getStylisticRules();

	return Object.keys(rules)
		.filter((rule) => !eslintCoreRules.has(rule) && !stylisticRules.has(rule));
}

test('Rules → TypeScript Plugin', async (t) => {
	await t.test('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = getComparablePluginRules();

		tests.assertRules(actual, expected);
	});
});
