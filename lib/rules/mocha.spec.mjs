import { test } from 'node:test';

import mochaPlugin from 'eslint-plugin-mocha';

import { getActualRuleNames, assertRules } from '../tests/index.mjs';
import rules from './mocha.mjs';

function getAvailablePluginRules() {
	const availablePluginRules = new Map(Object.entries(mochaPlugin.rules));

	return getActualRuleNames(availablePluginRules, 'mocha');
}

test('Rules → Mocha Plugin', async (t) => {
	await t.test('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = Object.keys(rules);

		assertRules(actual, expected);
	});
});
