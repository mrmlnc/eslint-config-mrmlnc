const eslintPlugin = require('eslint-plugin-mocha');

const rules = require('./mocha');
const tests = require('../tests');

function getAvailablePluginRules() {
	const availablePluginRules = new Map(Object.entries(eslintPlugin.rules));

	return tests.getActualRuleNames(availablePluginRules, 'mocha');
}

describe('Rules → Mocha Plugin', () => {
	it('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = Object.keys(rules);

		tests.assertRules(actual, expected);
	});
});
