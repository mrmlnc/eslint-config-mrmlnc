# :panda_face: eslint-config-mrmlnc

ESLint flat config for [@mrmlnc](https://github.com/mrmlnc) projects.

It wraps [`eslint-config-xo`](https://github.com/xojs/eslint-config-xo) and adds a small set of personal rule overrides.

## Installation

```sh
npm install --save-dev eslint-config-mrmlnc
```

## Usage

```js
// ./eslint.config.mjs
import * as cfg from 'eslint-config-mrmlnc';

export default cfg.build({
	// override some rules
});
```

`build(options)` accepts the same options as `eslint-config-xo`.
