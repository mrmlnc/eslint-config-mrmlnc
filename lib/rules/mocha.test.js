const { test } = require('node:test');

const eslintPlugin = require('eslint-plugin-mocha');

const tests = require('../tests');
const rules = require('./mocha');

function getAvailablePluginRules() {
	const availablePluginRules = new Map(Object.entries(eslintPlugin.rules));

	return tests.getActualRuleNames(availablePluginRules, 'mocha');
}

test('Rules → Mocha Plugin', async (t) => {
	await t.test('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = Object.keys(rules);

		tests.assertRules(actual, expected);
	});
});
