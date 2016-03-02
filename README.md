#node-gat-blac-api
=========

[![npm package](https://nodei.co/npm/node-gat-blac-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-gat-blac-api/)

A library providing methods to use all gat-blac apis

## Installation

  npm install node-gat-blac-api --save

## Usage
### Football Api
Use the football team api of gat-blac is simple and easy with this module, there is here an example of using this.
With getTeams Method returns an array with all teams that match with the filters
```javascript
var GatBlacApi = require('node-gat-blac-api');
var gatBlacApi = new GatBlacApi();
var filters = {'country':'chile'};
gatBlacApi.getTeams(filters,function(error,teams){
  if(error){
    console.log(error);
  }
  console.log(teams);
});
```
With getTeam Method returns an Object with a team that match with the code
```javascript
var GatBlacApi = require('node-gat-blac-api');
var gatBlacApi = new GatBlacApi();
gatBlacApi.getTeam('colo-colo',function(error,team){
  if(error){
    console.log(error);
  }
  console.log(team);
});
```
### Indicators Api
Use the indicators api of gat-blac is simple and easy with this module, there is here an example of using this.
With getIndicators Method returns an array with indicators of Chile that match with the filters
```javascript
var filters = {'date':'2016-02-28'}
gatBlacApi.getIndicators(filters,function(error,indicators){
  if(error){
    console.log(error);
  }
  console.log(indicators);
});
```
With getInflation Method returns an array with inflation indicators of Chile that match with the filters
```javascript
var filters = {'date':'2016-02-28'}
gatBlacApi.getInflation(filters,function(error,inflation){
  if(error){
    console.log(error);
  }
  console.log(inflation);
});
```
With getNoonIndicators Method returns an array with noon indicators of Chile that match with the filters
```javascript
var filters = {'date':'2016-02-28'}
gatBlacApi.getNoonIndicators(filters,function(error,noonIndicators){
  if(error){
    console.log(error);
  }
  console.log(noonIndicators);
});
```
With getExchangeRate Method returns an array with noon indicators of Chile that match with the filters
```javascript
var filters = {'date':'2016-02-28'}
gatBlacApi.getExchangeRate(filters,function(error,exchangeRate){
  if(error){
    console.log(error);
  }
  console.log(exchangeRate);
});
```
## Tests

  npm test

# References

- [Webpage API](http://www.gat-blac.com)

## Release History

* 1.0.0 Initial release
* 1.0.1 Fix release
* 1.0.2 Fix release
