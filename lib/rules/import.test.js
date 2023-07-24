const { test } = require('node:test');

const eslintPlugin = require('eslint-plugin-import');

const tests = require('../tests');
const rules = require('./import');

function getAvailablePluginRules() {
	const availablePluginRules = new Map(Object.entries(eslintPlugin.rules));

	return tests.getActualRuleNames(availablePluginRules, 'import');
}

test('Rules → Import Plugin', async (t) => {
	await t.test('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = Object.keys(rules);

		tests.assertRules(actual, expected);
	});
});
