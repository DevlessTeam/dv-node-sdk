'use strict';

const axios = require('axios');

function Devless(url, token) {
  //CRUD functions

  //Add data to service table
  this.addData = function(serviceName, tableName, data, callback) {
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
    ).then(function (response) {
      callback(response);
    })
      .catch(error => {
        console.error(error);
      });
  }

  //Query data from service table
  this.queryData = function (serviceName, tableName, params, callback) {
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
    ).then(function (response) {
      callback(response);
    })
      .catch(error => {
        console.error(error);
      });
  }

  //Update data in service table
  this.updateData = function (serviceName, tableName, identifierField, identifierValue, data, callback) {
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
    ).then(function (response) {
      callback(response);
    })
      .catch(error => {
        console.error(error);
      });
  }
}

module.exports = Devless