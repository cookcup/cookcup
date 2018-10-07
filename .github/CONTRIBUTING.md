# Contributing to CookCup

Contributions are always welcome. Before contributing please [search the issue tracker](https://github.com/cookcup/cookcup/issues), your issue may have already been discussed or fixed. To contribute, [fork](https://help.github.com/articles/fork-a-repo/) CookCup, commit your changes, and [send a pull request](https://help.github.com/articles/using-pull-requests/).

## Feature Requests

Feature requests should be submitted in the [issue tracker](https://github.com/cookcup/cookcup/issues), with a description of the expected behavior and use case, where they’ll remain closed until sufficient interest, [e.g. :+1: reactions](https://help.github.com/articles/about-discussions-in-issues-and-pull-requests/), has been [shown by the community](https://github.com/cookcup/cookcup/issues?q=label%3Aenhancement+sort%3Areactions-%2B1-desc).

Before submitting a request, please search for similar ones in the [closed issues](https://github.com/cookcup/cookcup/issues?q=is%3Aissue+is%3Aclosed+label%3Aenhancement).

## Pull Requests

For additions or bug fixes you should only need to modify the specific module inside a `src` directory. Include updated unit tests in the `test` directory as part of your pull request. Don’t
worry about regenerating the `dist` files.

Before running the unit tests you’ll need to install, [development dependencies](https://docs.npmjs.com/files/package.json#devdependencies) (`npm install`). After that, run unit tests from the command-line via `npm test` and verify the style of your code.

## Coding Guidelines

In addition to the following guidelines, please follow the conventions already established in the code.

- **Spacing**:<br>
  Use two spaces for indentation. No tabs.

- **Naming**:<br>
  Keep variable and method names concise and descriptive.<br>
  Variable names like `index`, `array`, or `iteratee` are preferable to `i`, `arr`, or `fn`.

- **Quotes**:<br>
  Single-quoted strings are preferred to double-quoted strings; however, please use a double-quoted string if the value contains a single-quote character to avoid unnecessary escaping.

- **Comments**:<br>
  Please use single-line comments to annotate significant additions, and [JSDoc](http://usejsdoc.org) comments for functions.

Guidelines are enforced using [ESLint](https://eslint.org):

```bash
$ npm run style
```