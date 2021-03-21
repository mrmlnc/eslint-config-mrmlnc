const eslintPlugin = require('eslint-plugin-node');

const rules = require('./node');
const tests = require('../tests');

function getAvailablePluginRules() {
	const availablePluginRules = new Map(Object.entries(eslintPlugin.rules));

	return tests.getActualRuleNames(availablePluginRules, 'node');
}

describe('Rules → Node Plugin', () => {
	it('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = Object.keys(rules);

		tests.assertRules(actual, expected);
	});
});
