# :panda_face: eslint-config-mrmlnc

## Introduction

This is the ESLint configuration file used in [@mrmlnc](https://github.com/mrmlnc) projects.

## Installation

```sh
npm install --save-dev eslint-config-mrmlnc
```

## Usage

With ES Modules:

```js
// ./eslint.config.mjs
import * as cfg from 'eslint-config-mrmlnc';

export default cfg.build({
	// The following configurations are enabled by default.
	// esModuleJavaScript: true,
	// typescript: true,
	// mocha: true,
});
```

With CommonJS Modules:

```js
const cfg = require('eslint-config-mrmlnc');

module.exports = cfg.build(/* <options> */);
```
