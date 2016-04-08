var expect = require('chai').expect,
  request = require('supertest-as-promised')(require('../app')),
  seed = require('../db/seed');

before(function(){
  return seed();
});

describe('Employee routes', function(){
  it('gets all', function(){
    return request.get('/api/employees').then(function(res){
      expect(res.body).to.be.ok;
      console.log(res.body);
    });
  });
});
