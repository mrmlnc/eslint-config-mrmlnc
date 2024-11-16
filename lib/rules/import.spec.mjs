import { test } from 'node:test';

import importPlugin from 'eslint-plugin-import';

import { getActualRuleNames, assertRules } from '../tests/index.mjs';
import rules from './import.mjs';

function getAvailablePluginRules() {
	const availablePluginRules = new Map(Object.entries(importPlugin.rules));

	return getActualRuleNames(availablePluginRules, 'import');
}

test('Rules → Import Plugin', async (t) => {
	await t.test('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = Object.keys(rules);

		assertRules(actual, expected);
	});
});
