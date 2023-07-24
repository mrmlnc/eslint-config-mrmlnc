const { test } = require('node:test');

const { Linter } = require('eslint');

const tests = require('../tests');
const rules = require('./eslint');

function getAvailablePluginRules() {
	const linter = new Linter();

	return tests.getActualRuleNames(linter.getRules());
}

test('Rules → ESLint', async (t) => {
	await t.test('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = Object.keys(rules);

		tests.assertRules(actual, expected);
	});
});
