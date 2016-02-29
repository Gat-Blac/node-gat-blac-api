var should = require('chai').should();
var GatBlacApi = require('../index');
var gatBlacApi = new GatBlacApi();

describe('#gatBlacApi',function(){
  it('api::get teams', function(done) {
    var filters = {'code':'colo-colo'};
    gatBlacApi.getTeams(filters,function(error,teams){
      teams[0].code.should.equal('colo-colo');
      done();
    });
  });
  it('api::get team', function(done){
    gatBlacApi.getTeam('colo-colo',function(error,team){
        team.code.should.equal('colo-colo');
        done();
    });
  });
  it('api::get indicators', function(done) {
    var filters = {'date':'2016-02-28'}
    gatBlacApi.getIndicators(filters,function(error,indicators){
      indicators.date.should.equal('2016-02-28');
      done();
    });
  });
  it('api::get inflation', function(done) {
    var filters = {'date':'2016-02-28'};
    gatBlacApi.getInflation(filters,function(error,inflation){
      inflation.date.should.equal('2016-02-28');
      done();
    });
  });
  it('api::get noonIndicators', function(done) {
    var filters = {'date':'2016-02-28'};
    gatBlacApi.getNoonIndicators(filters,function(error,noonIndicators){
      noonIndicators.date.should.equal('2016-02-28');
      done();
    });
  });
  it('api::get exchangeRate', function(done) {
    var filters = {'date':'2016-02-28'};
    gatBlacApi.getExchangeRate(filters,function(error,exchangeRate){
      exchangeRate.date.should.equal('2016-02-28');
      done();
    });
  });
});
