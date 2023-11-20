# eslint-config-vue-composition
This package includes instructions that are not added to the general linting package: "plugin:vue/essential", "plugin:vue/strongly-recommended" and "plugin:vue/recommended"

## Dependencies
- @typescript-eslint/eslint-plugin: ^6.7.2
- @typescript-eslint/parser: ^6.7.2

## DevDependencies
- eslint: ^8.50.0
- typescript: ~5.2.2
- @vue/eslint-config-typescript: ^12.0.0
- eslint-plugin-vue: ^9.16.1

## PeerDependencies
- eslint: >= 8.50.0
- typescript: >= 5.0.0

## Install
- NPM: <code>npm install -D @rockso/eslint-config-vue-composition</code>
- PNPM: <code>pnpm add -D @rockso/eslint-config-vue-composition</code>

## Usage
```JavaScript
  // .my-eslintrc.cjs

  module.exports = {
    extends: ["@rockso/eslint-config-vue-composition"]
  }
```
