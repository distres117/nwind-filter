var expect = require('chai').expect,
  request = require('supertest-as-promised')(require('../app')),
  seed = require('../db/seed');

before(function(){
  return seed();
});

describe('Employee routes', function(){
  it('gets all', function(){
    return request.get('/api/employees').then(function(res){
      expect(res.body.length).to.equal(5);
    });
  });
  it('gets records with starting letter', function(){
    return request.get('/api/employees/L').then(function(res){
      expect(res.body.length).to.equal(2);
    });
  });
  it('returns 404 when not found', function(){
    return request.get('/cats').expect(404);
    });
});
