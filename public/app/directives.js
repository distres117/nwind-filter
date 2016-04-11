angular.module('app')
.directive('filterPanel', function(){
  return {
    scope: {
      data: '=',
      items: '=',
      type: '=',
      key: '='
    },
    templateUrl: '/app/partials/filter.partial.html',
    controller: function($scope){
        $scope.links = [];
        for(var i = 65; i < 91; i++ )
          $scope.links.push(String.fromCharCode(i));
    }
  };
})
.directive('rowPanel', function(){
  return {
    scope: {
      items: '='
    },
    templateUrl: '/app/partials/row.partial.html'
  };
})
.directive('tabView', function(ApiFactory){
  return {
    templateUrl: '/app/partials/comp.partial.html',
    controller: function(ApiFactory, $scope, $stateParams){
      ApiFactory.getData($stateParams.type).then(function(data){
      $scope.data = data;
      $scope.key = $stateParams.key;
      $scope.type = $stateParams.type;
      $scope.pNum = $stateParams.p;
      var pNum = Number($stateParams.p) -1;
      var items = data[$scope.key];
      var NUM_PAGES = 5;
      if (items)
        $scope.items = items.slice(pNum * NUM_PAGES, (pNum * NUM_PAGES) + NUM_PAGES  );

      $scope.pages = function(){
        var i = 0, p = [];
        while(i++ < $scope.data[$scope.key].length / NUM_PAGES)
          p.push(i);
        return p;
      };


      });
    }
  };
});
