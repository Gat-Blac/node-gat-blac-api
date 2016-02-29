'use strict';
var request = require('request');
var util = require('util');
var EventEmitter = require('events').EventEmitter;

/**
* Class Gat Blac Api
* @class GatBlacApi
* @constructor
*/
var GatBlacApi = function(){
  this.baseUrlSports = 'http://gat-blac.com/sport/api/';
  this.baseUrlIndicators = 'http://gat-blac.com/indicator/api/';
};

util.inherits(GatBlacApi, EventEmitter);

/**
* Generates url with api path.
* @return {String} url
* @param {String} baseUrl
* @param {String} path
* @private
*/
GatBlacApi.prototype._buildURL = function(baseUrl, path){
  return baseUrl + path;
};

/**
* Generates get parameters.
* @return {String} parameters
* @param {Object} params
* @private
*/
GatBlacApi.prototype._buildGetParams = function(filters){
  var params = '';
  for(var key in filters){
    params += key + '=' + filters[key] + '&';
  }
  return params;
};

/**
* Make a Request to Gat-Blac Api
* @return {Function} callback with error or data
* @param {String} baseUrl
* @param {String} path
* @param {String} method
* @private
*/
GatBlacApi.prototype._request = function(baseUrl, path, method, callback){
  request({
    'method':method,
    'uri':this._buildURL(baseUrl,path)
  },function(error, response, body){
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      callback(null,data);
    }else{
      callback(error,null);
    }
  });
};

/**
* Get a list of teams from gat-blac sport api
* @return {Function} callback with error or Array of Teams
* @param {Object} filters
*/
GatBlacApi.prototype.getTeams = function(filters,callback){
  var params = this._buildGetParams(filters);
  var path = 'teams?' + params;
  this._request(this.baseUrlSports, path, 'GET', function(error,data){
    if(error){
      callback(error,null);
    }else{
      callback(null,data.teams);
    }
  });
};

/**
* Get a team by code from gat-blac sport api
* @return {Function} callback with error or Object of Team.
* @param {String} code
*/
GatBlacApi.prototype.getTeam = function(code,callback){
  var path = 'teams/' + code;
  this._request(this.baseUrlSports, path, 'GET', function(error,data){
    if(error){
      callback(error,null);
    }else{
      callback(null,data.teams[0]);
    }
  });
};

/**
* Get a economics indicators from Chile by gat-blac indicators api (Dollar, Euro, UTM, UF, IPSA, Gold, IMACEC, Copper, TCM)
* @return {Function} callback with error or Object of indicators
* @param {Object} filters
*/
GatBlacApi.prototype.getIndicators = function(filters,callback){
  var params = this._buildGetParams(filters);
  var path = 'indicators?' + params;
  this._request(this.baseUrlIndicators, path, 'GET', function(error,data){
    if(error){
      callback(error,null);
    }else{
      callback(null,data.results);
    }
  });
};

/**
* Get a economics inflation from Chile by gat-blac indicators api (TPM,IPCX,IPC)
* @return {Function} callback with error or Object of Indicators
* @param {Object} filters
*/
GatBlacApi.prototype.getInflation = function(filters,callback){
  var params = this._buildGetParams(filters);
  var path = 'inflation?' + params;
  this._request(this.baseUrlIndicators, path, 'GET', function(error,data){
    if(error){
      callback(error,null);
    }else{
      callback(null,data.results);
    }
  });
};

/**
* Get a economics noon indicators from Chile by gat-blac indicators api (dollar, tasa interbancaria)
* @return {Function} callback with error or Object of Indicators
* @param {Object} filters
*/
GatBlacApi.prototype.getNoonIndicators = function(filters,callback){
  var params = this._buildGetParams(filters);
  var path = 'noonIndicators?' + params;
  this._request(this.baseUrlIndicators, path, 'GET', function(error,data){
    if(error){
      callback(error,null);
    }else{
      callback(null,data.results);
    }
  });
};

/**
* Get a economics exchange rate from Chile by gat-blac indicators api (real, peso mexicano, peso colombiano, peso argentino, sol peruano, libra, franco suizo, dolar canadiense)
* @return {Function} callback with error or Object of Noon Indicators
* @param {Object} filters
*/
GatBlacApi.prototype.getExchangeRate = function(filters, callback){
  var params = this._buildGetParams(filters);
  var path = 'exchangeRate?' + params;
  this._request(this.baseUrlIndicators, path, 'GET', function(error,data){
    if(error){
      callback(error,null);
    }else{
      callback(null,data.results);
    }
  });
};

module.exports = GatBlacApi;
