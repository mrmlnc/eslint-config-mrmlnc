const { Linter } = require('eslint');

const rules = require('./eslint');
const tests = require('../tests');

function getAvailablePluginRules() {
	const linter = new Linter();

	return tests.getActualRuleNames(linter.getRules());
}

describe('Rules → ESLint', () => {
	it('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = Object.keys(rules);

		tests.assertRules(actual, expected);
	});
});
