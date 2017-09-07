'use strict';

const axios = require('axios');

let devless = {
  //Add data to service table
  add: (url, token, serviceName, tableName, data) => {
    let config = {
      headers: {
        "Devless-token": token
      }
    };
    axios.post(
      url + "/api/v1/service/" + serviceName + "/db",
      {
        "resource": [{
          "name": tableName,
          "field": [data]
        }]
      }, config
    ).then(response => {
      console.log(response.data);
    })
      .catch(error => {
        console.error(error);
      });
  }
}

module.exports = devless