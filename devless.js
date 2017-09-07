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
    axios.post(
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
    axios({
      method: 'get',
      url: url + "/api/v1/service/" + serviceName + "/db?table=" + tableName,
      headers: {
        "Devless-token": token
      },
      data: {
        params: params
      }
    }).then(function (response) {
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
    axios.patch(
      url + "/api/v1/service/" + serviceName + "/db",
      {
        "resource": [{
          "name": tableName,
          "params": [{
            "where": identifierField + ',' + identifierValue,
            "data": [
              data
            ]
          }]
        }]
      }, config
    ).then(function (response) {
      callback(response);
    })
      .catch(error => {
        console.error(error);
      });
  }

  //Delete data in service table
  this.deleteData = function (serviceName, tableName, identifierField, identifierValue, callback) {
    let config = {
      headers: {
        "Devless-token": token
      }
    };
    axios({
      method: 'delete',
      headers: {
        "Devless-token": token
      },
      url: url + "/api/v1/service/" + serviceName + "/db",
      data: {
        "resource": [{
          "name": tableName,
          "params": [{
            "where": identifierField + ',' + identifierValue,
            "delete": true
          }]
        }]
      }
    }).then(function (response) {
      callback(response);
    })
      .catch(error => {
        console.error(error);
      });
  }
}

module.exports = Devless