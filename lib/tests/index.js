const assert = require('assert');

module.exports = {
	getActualRuleNames,
	assertRules
};

/**
 * @param {Map<string, import("eslint").Rule.RuleModule>} rules
 * @param {string|undefined} scope
 * @returns {string[]}
 */
function getActualRuleNames(rules, scope = undefined) {
	return [...rules]
		.filter(([_name, rule]) => isActualRule(rule))
		.map(([name]) => scope === undefined ? name : `${scope}/${name}`);
}

/**
 * @param {import("eslint").Rule.RuleModule} rule
 * @returns {boolean}
 */
function isActualRule(rule) {
	return !isDeprecatedRule(rule);
}

/**
 * @param {import("eslint").Rule.RuleModule} rule
 * @returns {boolean}
 */
function isDeprecatedRule(rule) {
	return rule.meta.deprecated;
}

/**
 * @param {string[]} actual
 * @param {string[]} expected
 * @returns {void}
 */
function assertRules(actual, expected) {
	actual.sort();
	expected.sort();

	assert.deepStrictEqual(actual, expected);
}
