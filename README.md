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
dv.queryData(serviceName, tableName, queryParams);
```

**Add data to table**
```javascript
dv.addData(serviceName, tableName, data);
```

**Update data in table**
```javascript
dv.updateData(serviceName, tableName, identifierField, identifierValue, data);
```

**Delete data from table**
```javascript
dv.deleteData(serviceName, tableName, identifierField, identifierValue);
```



### Authentication

For *action*s including **signup** and **login**.

```javascript
dv.signup(params);
```


```javascript
dv.login(params);
```

### RPC

```javascript
dv.call(serviceName, action, params, callback);
```

#Example
const dv = new DevLess("http://my-devlessapp.herokuapp.com", "5a5d555d55ds5a5e45ss2")

**And you can now have access to all the methods exposed by the module. They include:**

#USING EXPRESS
   
    ```javascript
    $ npm install express -s
    ```


    ```javascript
    const express = require('express')

    const app = express()


    Creating Record 

    dv.addData(serviceName, tableName, queryParams)
    This will return a promise

    Example

    app.post('/', async(req, res)=>{
        let data = {
         name: "",
         description: "This is all night waakye for the students at Lancaster",
         location: "AnC Mall",
        }
        const resp =  await dv.addData('Events', 'event', data)

            #OR

        const resp = await dv.addData('Events', 'event', req.body)
    })



     #### Creating Record 

    dv.queryData(serviceName, tableName, queryParams)
    This will return a promise

    ### Example 
    app.post('/', async(req, res)=>{
        let data = {
         name: "",
         description: "This is all night waakye for the students at Lancaster",
         location: "AnC Mall",
        }
        const resp =  await dv.addData('Events', 'event', data)

            #OR

        const resp = await dv.addData('Events', 'event', req.body)
    })


    app.listen(3000, function(){
        console.log('Server started')
    })
    ```


Note: This readme is a *WIP*. For more info on parameter definitions, etc, see the [DevLess Documentation](https://devless.gitbooks.io/devless-docs-1-3-0/http_api.html).
