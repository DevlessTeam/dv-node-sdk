# devless-sdk

<img src="https://s20.postimg.org/zdg8n23nh/image.png" alt="devless-sdk" align="right" />

DevLess-SDK is a module that provides a host of functions for woring with data from the [DevLess](http://devless.io/) Backend.

## Install

```bash
npm install devless-sdk --save
```

## Usage

Require and initialize the module with your DevLess URL and Token.

```javascript
const DevLess = require('devless-sdk');
const dv = new DevLess("DevLess_instance_URL", "DevLess_Token");
```

An you can now have acces to all the methods exposed by the module.
