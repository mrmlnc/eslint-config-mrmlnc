import * as assert from 'node:assert';

/**
 * @param {Map<string, import("eslint").Rule.RuleModule>} rules
 * @param {string|undefined} scope
 * @returns {string[]}
 */
export function getActualRuleNames(rules, scope = undefined) {
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
export function assertRules(actual, expected) {
	actual.sort();
	expected.sort();

	for (const expectedRule of expected) {
		if (!actual.includes(expectedRule)) {
			console.warn(`Missing rule: ${expectedRule}`);
		}
	}

	for (const actualRule of actual) {
		if (!expected.includes(actualRule)) {
			console.warn(`Unexpected rule: ${actualRule}`);
		}
	}

	assert.deepStrictEqual(actual, expected);
}
