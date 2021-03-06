const eslintPlugin = require('eslint-plugin-unicorn');

const tests = require('../tests');
const rules = require('./unicorn');

function getAvailablePluginRules() {
	const availablePluginRules = new Map(Object.entries(eslintPlugin.rules));

	return tests.getActualRuleNames(availablePluginRules, 'unicorn');
}

describe('Rules → Unicorn Plugin', () => {
	it('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = Object.keys(rules);

		tests.assertRules(actual, expected);
	});
});
