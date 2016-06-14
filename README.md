# prevent-unload

[![NPM](https://nodei.co/npm/prevent-unload.png?downloads=true)](https://nodei.co/npm/prevent-unload/)

Prevent page unloading from the user's action.

## Installation

```bash
$ npm install prevent-unload --save
```

## Usage

Example:

```javascript
import preventUnload, {cancel} from 'prevent-unload';

let handler = preventUnload();
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
