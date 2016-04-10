angular.module('app')
.factory('ApiFactory', function($http, $q){
  var factory = {};
  var data;

  factory.getData = function(force){
    if (!data || force){
      return $q.all([$http.get('/api/products'), $http.get('/api/employees')])
      .then(function(res){
        data = {
          products: res[0].data,
          employees: res[1].data
        };
        return data;
      });
    }
    return $q.resolve(data);

  };


  return factory;

});
