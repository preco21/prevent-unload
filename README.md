# prevent-unload

[![Code Style Prev](https://img.shields.io/badge/code%20style-prev-32c8fc.svg?style=flat-square)](https://github.com/preco21/eslint-config-prev)
[![NPM Version](https://img.shields.io/npm/v/prevent-unload.svg?style=flat-square)](https://www.npmjs.com/package/prevent-unload)
[![Build Status](https://img.shields.io/travis/preco21/prevent-unload/master.svg?style=flat-square)](https://travis-ci.org/preco21/prevent-unload)
[![Development Dependency Status](https://img.shields.io/david/dev/preco21/prevent-unload.svg?style=flat-square)](https://david-dm.org/preco21/prevent-unload#info=devDependencies)

> Prevent page unloading from the user's action

## Installation

```bash
$ npm install --save prevent-unload
```

## Usage

Example:

```javascript
import preventUnload, {cancel} from 'prevent-unload';

const handler = preventUnload();
cancel(handler);
```

## API

### `preventUnload([message])`

* `message` String (optional) - Message to display on confirm popup. Default is
platform specified.

Apply page unloading prevention. If user attempt to close current web page after
calling the method, then browser blocks page unloading and shows up popup with
specified message.

This method returns reference of `handler`, which can be used for cancel the
behavior.

### `preventUnload.cancel(handler)`

* `handler` Function - Handler reference to cancel event.

Cancel page unloading prevention.

## License

[MIT](http://preco.mit-license.org/)
