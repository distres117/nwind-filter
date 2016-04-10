angular.module('app')
.directive('filterPanel', function(){
  return {
    scope: {
      data: '=',
      type: '='
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
      ApiFactory.getData().then(function(data){
      $scope.data = data;
      $scope.type = $stateParams.type;
      $scope.key = $stateParams.key;

      });
    }
  };
});
