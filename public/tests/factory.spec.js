describe('factory testing', function(){
  var $httpBackend, ApiFactory;
  beforeEach(module('app'));
  beforeEach(inject(function(_$httpBackend_, _ApiFactory_){
    $httpBackend = _$httpBackend_;
    ApiFactory = _ApiFactory_;
    $httpBackend.when('GET', '/api/employees').respond([
      {name: 'Moe'}, {name: 'Larry'}, {name: 'Curly'}
    ]);
    $httpBackend.when('GET', '/api/products').respond([
      {name: 'Foo'}, {name: 'Bar'}, {name: 'Bazz'}
    ]);

  }));

  afterEach(function(){
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('gets all employees', function(){
    //$httpBackend.expect('GET', '/api/employees');
    ApiFactory.getData('employees').then(function(data){
      expect(data[0].name).toEqual('Moe');
    });

  });
  it('gets all products', function(){
    ApiFactory.getData('products').then(function(products){
      expect(products.length).toEqual(3);
    });
  });
});
