'use strict';

const axios = require('axios');

function Devless (url, token) {
  //Add data to service table
  this.addData = function(serviceName, tableName, data) {
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

module.exports = Devless