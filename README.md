# mkware-builder [![NPM Version Badge]][NPM] ![Node Version Badge] [![Build Status Badge]][Travis CI] [![Coverage Badge]][Coverage]

Make you a middleware pipe (with a builder)!

## Installation

```sh
npm install --save mkware-builder
```

or

```sh
yarn add mkware-builder
```

## Usage (normal)

```js
var mkware = require('mkware-builder');

var ware = mkware();

ware.use(function(value, next) {
  next(value, value + 1);
});

ware.use(function(originalValue, value, next) {
  next(originalValue, value * 2);
});

ware.use(function(originalValue, value, next) {
  next(originalValue + value);
});

ware.use(function(value) {
  console.log(value);
});

ware(5); // last middleware outputs 17
```

## Usage (promise)

```js
var mkware = require('mkware-builder/promise');

var ware = mkware();

ware.use(function(value, next) {
  next(value, value + 1);
});

ware.use(function(originalValue, value, next) {
  next(originalValue, value * 2);
});

ware.use(function(originalValue, value, next) {
  next(originalValue + value);
});

ware(5).then(function(value) {
  console.log(value); // 17
});
```

[NPM Version Badge]: https://img.shields.io/npm/v/mkware-builder.svg
[NPM]: https://npmjs.com/package/mkware-builder
[Node Version Badge]: https://img.shields.io/node/v/mkware-builder.svg
[Build Status Badge]: https://img.shields.io/travis/jackwilsdon/mkware-builder.svg
[Travis CI]: https://travis-ci.org/jackwilsdon/mkware-builder
[Coverage Badge]: https://img.shields.io/codecov/c/github/jackwilsdon/mkware-builder.svg
[Coverage]: https://codecov.io/gh/jackwilsdon/mkware-builder
