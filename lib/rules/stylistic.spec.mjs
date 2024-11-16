import { test } from 'node:test';

import stylisticPlugin from '@stylistic/eslint-plugin';

import { getActualRuleNames, assertRules } from '../tests/index.mjs';
import rules from './stylistic.mjs';

function getAvailablePluginRules() {
	const availablePluginRules = new Map(Object.entries(stylisticPlugin.rules));

	return getActualRuleNames(availablePluginRules, 'stylistic');
}

test('Rules → ESLint Stylistic Plugin', async (t) => {
	await t.test('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = Object.keys(rules);

		assertRules(actual, expected);
	});
});
