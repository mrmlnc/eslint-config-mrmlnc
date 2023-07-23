const { test } = require('node:test');

const eslintPlugin = require('eslint-plugin-unicorn');

const tests = require('../tests');
const rules = require('./unicorn');

function getAvailablePluginRules() {
	const availablePluginRules = new Map(Object.entries(eslintPlugin.rules));

	return tests.getActualRuleNames(availablePluginRules, 'unicorn');
}

test('Rules → Unicorn Plugin', async (t) => {
	await t.test('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = Object.keys(rules);

		tests.assertRules(actual, expected);
	});
});
