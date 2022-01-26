# Review 1/26/22 - JavaScript Modules

## NPM

_Node Package Manager_ is a cli, _command line interface_ tool, for managing and maintaining our JS projects/packages.

[npmjs.com](https://npmjs.com) is the registry for all npm packages that can be installed in our projects.

### Installing a Package

Use `npm install <packagename> [--save | --save-dev]` to install an unscoped, public package

All npm packages can be found in your `node_modules/`, which should ignored by git

`package.json` is the configuration file that npm uses to maintain our project

Use `npm init` at the beginning of a project to generate a `package.json` file

To run any script, use `npm run <script>`

## Webpack

Webpack is a module bundler that _bundles and minifies_ our project source code and assets

Use `npm install webpack webpack-cli --save-dev` to install webpack and it's cli tool as development dependencies

Add a `script` to your `package.json` to `build` (bundle) your project: `"build": "webpack"`

## Import/Export ESM Syntax

Export a value as default from a module (only one per module)

```js
const test = () => {};

export default test;
```

Export values by name

```js
export const test = () => {};
export const person = { name: "Ben", city: "Birmingham" };
```

Import an NPM module (3rd party module)

```js
// Importing a default export
import varName from "module";

// Importing named exports
import { varName1, varName2 } from "module";
```

Import a local module (one that you wrote)

```js
// Importing a default export
import varName from "./path/to/file";

// Importing named exports
import { varName1, varName2 } from "./path/to/file";
```
