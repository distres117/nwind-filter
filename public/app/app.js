angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $urlRouterProvider.when('/', '/products');
  // $transitionsProvider.onError({}, function($transitions$, $error$, $state){
  //   $state.go('itemsView', {type: 'products'});
  // });

  $stateProvider
    .state('itemsView', {
      url: '/:type',
      template: '<tab-view></tabview>'
    })
    .state('filteredView', {
      url: '/:type/:key?p',
      template: '<tab-view></tab-view>'
    });

});
