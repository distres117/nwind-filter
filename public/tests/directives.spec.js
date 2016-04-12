

describe('directive testing', function(){
  var $compile, $rootScope, $scope, ApiFactory, $q;
  beforeEach(module('app'));
  beforeEach(module('app.views'));
  beforeEach(inject(function(_$compile_, _$rootScope_, _ApiFactory_, _$q_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    ApiFactory = _ApiFactory_;
    $q = _$q_;
    $scope = $rootScope.$new();
  }));
  function getScope(html, scope){
    var element = $compile(html)(scope);
    $scope.$digest();
    return element;
  }
  describe('filterPanel directive', function(){
      var element, scope;
      beforeEach(function(){
        var html = '<filter-panel></filter-panel>';
        element = $compile(html)($scope);
        $scope.$digest();
        //element = getScope('<filter-panel></filter-panel>', $scope);
        scope = element.isolateScope();
      });

    it('has links', function(){
      expect(element.html()).toContain('A');
      expect(element.html()).toContain('Z');
    });
  });
  describe('tabView directive', function(){
    var element, scope;
    beforeEach(function(){
      spyOn(ApiFactory, 'getData').and.callFake(function(){
        return $q.resolve({
          M: [{name: 'Moe'}],
          L: [{name: 'Larry'}],
          C: [{name: 'Curly'}]
        });
      });
      var html = '<tab-view></tab-view>';
      element = $compile(html)($scope);
      $scope.$digest();
      scope = element.scope();
    });
    it('adds data to scope', function(){
      expect(scope.data.M.length).toEqual(1);
    });
    it('returns proper pagination', function(){
      scope.key = 'M';
      expect(scope.pages().length).toEqual(1);
    });

  });
});
