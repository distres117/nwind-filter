var expect = require('chai').expect,
  request = require('supertest-as-promised')(require('../app')),
  seed = require('../db/seed');

before(function(){
  return seed();
});

describe('Employee routes', function(){
  it('gets alpabetized and sort hash', function(){
    return request.get('/api/employees').then(function(res){
      expect(res.body.L.map(n=>n.name)).to.eql(['Larry', 'Lenny']);
    });
  });
  it('gets records with starting letter', function(){
    return request.get('/api/employees/L').then(function(res){
      expect(res.body.map(n=>n.name)).to.eql(['Larry', 'Lenny']);
    });
  });
  it('returns 404 when not found', function(){
    return request.get('/cats').expect(404);
    });
});
describe('Product routes', function(){
  it('gets alpabetized and sort hash', function(){
    return request.get('/api/products').then(function(res){
      expect(res.body.B.map(n=>n.name)).to.eql(['Bar', 'Bazz']);
    });
  });
  it('gets records with starting letter', function(){
    return request.get('/api/products/B').then(function(res){
      expect(res.body.map(n=>n.name)).to.eql(['Bar', 'Bazz']);
    });
  });
});
