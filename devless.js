const axios = require('axios')
const express = require('express')


// Setting variables for common url pattern
const urlPending = "/api/v1/service/"
const tableType =   "/db?table="


const app = express()


function DevLess(url, token){
    this.url = url
    this.token = token

    // Setting default headers for the devless token
    axios.defaults.headers.common["Devless-token"] = this.token

    /**
     * @param {String} serviceName 
     * @param {String} tableName 
     * @param {object} data 
     * returns Promise <object>
     */
    this.addData = async (serviceName, tableName, data={})=>{
        try {
            return (await axios.post(`${this.url}${urlPending}${serviceName}/db`,{
                "resource": [{
                    "name": tableName,
                    "field": [data]
                }]
            })).data
        } catch (e) {
            return e
        }
    }


    /**
     * @param {String} serviceName 
     * @param {String} tableName 
     * @param {object} params 
     * return Promise <object>
     */
    this.queryData = async (serviceName, tableName, params=null) => {
        try {
            if(params !== null){
              return (await axios.get(`${this.url}${urlPending}${serviceName}${tableType}${tableName}&${params}`)).data
            }
            return (await axios.get(`${this.url}${urlPending}${serviceName}${tableType}${tableName}`)).data
        } catch (e) {
            return e
        }
    }



    /**
     * 
     * @param {String} serviceName 
     * @param {String} tableName 
     * @param {String} field 
     * @param {String} fieldValue 
     * @param {object} data 
     */
    this.updateData = async (serviceName, tableName,field, fieldValue, data) => {
        try {
            return (await axios.patch(`${this.url}${urlPending}${serviceName}/db`,{
                "resource": [{
                    "name": tableName,
                    "params": [{
                        "where":`${field},${fieldValue}`,
                        "data": [data]
                    }]
                }]
            })).data
        } catch (e) {
            return e
        }
    }

    /**
     * 
     * @param {String} serviceName 
     * @param {String} tableName 
     * @param {String} field 
     * @param {String} fieldValue 
     */
    this.deleteData = async (serviceName, tableName,field, fieldValue) => {
        try {
            return (await axios.delete(`${this.url}${urlPending}${serviceName}/db`,{
                "resource": [{
                    "name": tableName,
                    "params": [{
                        "where":`${field},${fieldValue}`,
                        "delete":true
                    }]
                }]
            })).data
        } catch (e) {
            return e
        }
    }


    /**
     * Signup the user
     * @param {object} params 
     */
    this.signup = async (params={}) => {
        try {
            return (await this.call('devless', 'signUp', [params.email || null, params.password,
                params.username|| null, params.phone || null, params.firstname || null, params.lastname || null,null,null, params.extra]
            ))
        } catch (e) {
            return e
        }
    }

    /**
     * Login the user and set in the token
     * @param {object} params 
     */
    this.login = async (params={}) => {
        try {
            const resp = (await this.call('devless', 'login', [params.username || null, params.email || null,
                    params.phone|| null, params.password || null]
            ))
        this.setToken(resp.payload.result.token)
        return resp
        } catch (e) {
            return e
        }
    }

    /**
     * Set the user authentication token to make queries
     * @param {String} token 
     */
    this.setToken = token => {
        return axios.defaults.headers.common['devless-user-token'] = token
    }

    /**
     * Generate an random number to set as the id
     * @param {Number} min 
     * @param {Number} max 
     * @returns randomNumber
     */
    const nonce = (min, max) => {
        return Math.floor(Math.random() * (min - min +1)) + min
    }

    /**
     * Making an RPC call
     * @param {String} serviceName 
     * @param {String} action 
     * @param {object} params 
     */
    this.call = async (serviceName, action, params) => {
       try {
          return (await axios.post(`${this.url}${urlPending}${serviceName}/rpc?action=${action}`, {
                "jsonrpc": "2.0",
                "method": serviceName,
                "id": nonce(1, 10000),
                "params": params    
        })).data
       } catch (e) {
           return e
       }
    }
    
}



module.exports = DevLess