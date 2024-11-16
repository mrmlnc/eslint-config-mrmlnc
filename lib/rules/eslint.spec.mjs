import { test } from 'node:test';

import eslint from 'eslint/use-at-your-own-risk';

import { getActualRuleNames, assertRules } from '../tests/index.mjs';
import rules from './eslint.mjs';

function getAvailablePluginRules() {
	return getActualRuleNames(eslint.builtinRules);
}

test('Rules → ESLint', async (t) => {
	await t.test('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = Object.keys(rules);

		assertRules(actual, expected);
	});
});
