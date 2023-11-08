const { test } = require('node:test');

const eslintPlugin = require('@stylistic/eslint-plugin');

const tests = require('../tests');
const rules = require('./stylistic');

function getAvailablePluginRules() {
	const availablePluginRules = new Map(Object.entries(eslintPlugin.rules));

	return tests.getActualRuleNames(availablePluginRules, '@stylistic');
}

test('Rules → ESLint Stylistic Plugin', async (t) => {
	await t.test('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = Object.keys(rules);

		tests.assertRules(actual, expected);
	});
});
