import { test } from 'node:test';

import nPlugin from 'eslint-plugin-n';

import { getActualRuleNames, assertRules } from '../tests/index.mjs';
import rules from './node.mjs';

function getAvailablePluginRules() {
	const availablePluginRules = new Map(Object.entries(nPlugin.rules));

	return getActualRuleNames(availablePluginRules, 'n');
}

test('Rules → Node Plugin', async (t) => {
	await t.test('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = Object.keys(rules);

		assertRules(actual, expected);
	});
});
