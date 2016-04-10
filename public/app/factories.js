angular.module('app')
.factory('ApiFactory', function($http, $q){
  var factory = {}, data = {};

  factory.getData = function(type, force){
    if (!data[type] || force){
      return $http.get('/api/' + type)
      .then(function(res){
        data[type] = res.data;
        return data[type];
      });
    }
    return $q.resolve(data[type]);

  };
  return factory;

});
