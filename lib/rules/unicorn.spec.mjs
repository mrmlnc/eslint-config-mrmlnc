import { test } from 'node:test';

import unicornPlugin from 'eslint-plugin-unicorn';

import { getActualRuleNames, assertRules } from '../tests/index.mjs';
import rules from './unicorn.mjs';

function getAvailablePluginRules() {
	const availablePluginRules = new Map(Object.entries(unicornPlugin.rules));

	return getActualRuleNames(availablePluginRules, 'unicorn');
}

test('Rules → Unicorn Plugin', async (t) => {
	await t.test('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = Object.keys(rules);

		assertRules(actual, expected);
	});
});
