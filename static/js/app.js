'use strict';

angular.module('rfp', [
  'ngRoute',
  'rfp.filters',
  'rfp.services',
  'rfp.directives',
  'rfp.factories',
  'rfp.controllers'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'static/partials/Dashboard.html',
        controller: 'DashboardCtrl'
    })
    .when('/Blog', {
        templateUrl: 'static/partials/Blog-List.html',
        controller: 'BlogListCtrl'
    })
    .when('/Requests/:request_id', {
        templateUrl: 'static/partials/Request-Detail.html', 
        controller: 'RequestDetailCtrl'
    })
    .otherwise({redirectTo: '/'})
  ;
}]);
