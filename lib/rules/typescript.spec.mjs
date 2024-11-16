import { test } from 'node:test';

import eslint from 'eslint/use-at-your-own-risk';
import stylisticPlugin from '@stylistic/eslint-plugin';
import { plugin as typescriptPlugin } from 'typescript-eslint';

import { getActualRuleNames, assertRules } from '../tests/index.mjs';
import rules from './typescript.mjs';

function getAvailablePluginRules() {
	const actualRules = Object.entries(typescriptPlugin.rules).filter(([_, rule]) => rule.meta.deprecated !== true);
	const availablePluginRules = new Map(actualRules);

	return getActualRuleNames(availablePluginRules, '@typescript-eslint');
}

function getEslintCoreRules() {
	return new Set(getActualRuleNames(eslint.builtinRules));
}

function getStylisticRules() {
	const actualRules = Object.entries(stylisticPlugin.rules).filter(([_, rule]) => rule.meta.deprecated !== true);
	const availablePluginRules = new Map(actualRules);

	const rules = getActualRuleNames(availablePluginRules, '@stylistic');

	return new Set(rules);
}

function getComparablePluginRules() {
	const eslintCoreRules = getEslintCoreRules();
	const stylisticRules = getStylisticRules();

	return Object.keys(rules)
		.filter((rule) => !eslintCoreRules.has(rule) && !stylisticRules.has(rule));
}

test('Rules → TypeScript Plugin', async (t) => {
	await t.test('should define all plugin rules', () => {
		const expected = getAvailablePluginRules();

		const actual = getComparablePluginRules();

		assertRules(actual, expected);
	});
});
