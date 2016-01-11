# prevent-unload

`prevent-unload` lets you prevent page unloading from the user's action.

**This module works only in a browser**

## Installation

```bash
$ npm install prevent-unload
```

## Usage

Example:

```javascript
import preventUnload from 'prevent-unload';
// const preventUnload = require('prevent-unload');

preventUnload(); // When user close the page, the browser shows 'Are you sure?' dialog box.
```

## API

### `preventUnload([message])`

Prevent page unloading. (`message` is optional)

### `preventUnload.revoke()`

Cancel the unload prevention.
