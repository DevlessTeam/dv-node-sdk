'use strict';

const axios = require('axios');

function Devless(url, token) {
  //CRUD functions

  //Add data to service table
  this.addData = function(serviceName, tableName, data) {
    let config = {
      headers: {
        "Devless-token": token
      }
    };
    return axios.post(
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

  //Query data from service table
  this.queryData = function (serviceName, tableName, params) {
    let config = {
      headers: {
        "Devless-token": token
      }
    };
    axios.get(
      url + "/api/v1/service/" + serviceName + "/db?table=" + tableName,
      {
        params: params
      }, config
    ).then(response => {
      console.log(response.data);
    })
      .catch(error => {
        console.error(error);
      });
  }

  //Update data in service table
  this.updateData = function (serviceName, tableName, identifierField, identifierValue, data) {
    let config = {
      headers: {
        "Devless-token": token
      }
    };
    var payload = {
      "resource": [{
        "name": tableName,
        "params": [{
          "where": identifierField + ',' + identifierValue,
          "data": [
            data
          ]
        }]
      }]
    }
    axios.patch(
      url + "/api/v1/service/" + serviceName + "/db",
      payload, config
    ).then(response => {
      console.log(response.data);
    })
      .catch(error => {
        console.error(error);
      });
  }
}

module.exports = Devless