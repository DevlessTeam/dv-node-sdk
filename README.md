# devless-sdk

<img src="https://s20.postimg.org/zdg8n23nh/image.png" alt="devless-sdk" align="right" />

DevLess-SDK is a module that provides a host of functions for working with data from the [DevLess](http://devless.io/) Backend.

[![Inline docs](http://inch-ci.org/github/DevlessTeam/dv-node-sdk.svg?branch=master)](http://inch-ci.org/github/DevlessTeam/dv-node-sdk)
[![npm version](https://badge.fury.io/js/devless-sdk.svg)](https://badge.fury.io/js/devless-sdk)


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

And you can now have access to all the methods exposed by the module. They include:

### CRUD

**Query (read) data from table**
```javascript
dv.queryData(serviceName, tableName, queryParams, callback);
```

**Add data to table**
```javascript
dv.addData(serviceName, tableName, data, callback);
```

**Update data in table**
```javascript
dv.updateData(serviceName, tableName, identifierField, identifierValue, data, callback);
```

**Delete data from table**
```javascript
dv.deleteData(serviceName, tableName, identifierField, identifierValue, callback);
```


### Authentication

For *action*s including **signup** and **login**.

```javascript
dv.authenticate(action, params, callback);
```

### RPC

```javascript
dv.rpc(serviceName, action, params, callback);
```

Note: This readme is a *WIP*. For more info on parameter definitions, etc, see the [DevLess Documentation](https://devless.gitbooks.io/devless-docs-1-3-0/http_api.html).
