describe('testing angular', function(){
  var $compile, $rootScope;
  beforeEach(module('app'));
  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('simple directive', function(){
    var $scope = $rootScope.$new();
    $scope.name = 'Moe';
    var html = '<test-dir name="name"></test-dir>';
    var element = $compile(html)($scope);
    console.log(element);
  });
});
