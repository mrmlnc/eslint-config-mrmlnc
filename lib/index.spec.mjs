import assert from 'node:assert/strict';
import { test } from 'node:test';
import { ESLint } from 'eslint';
import { build } from './index.mjs';

const source = 'export const value = true;\n';

test('config works with ESLint', async () => {
	const eslint = new ESLint({
		overrideConfigFile: true,
		overrideConfig: build(),
	});

	const [result] = await eslint.lintText(source, { filePath: 'fixture.mjs' });

	assert.match(result.filePath, /fixture\.mjs$/v);
	assert.equal(result.fatalErrorCount, 0);
	assert.ok(Array.isArray(result.messages));
});
