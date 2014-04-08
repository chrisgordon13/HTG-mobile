'use strict';

angular.module('rfp', [
  'ngRoute',
  'rfp.filters',
  'rfp.services',
  'rfp.directives',
  'rfp.factories',
  'rfp.controllers',
  'ui.bootstrap'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'partials/Dashboard.html',
        controller: 'DashboardCtrl'
    })
    .when('/Blog', {
        templateUrl: 'partials/Blog-List.html',
        controller: 'BlogListCtrl'
    })
    .when('/Requests/:request_id', {
        templateUrl: 'partials/Request-Detail.html', 
        controller: 'RequestDetailCtrl'
    })
    .otherwise({redirectTo: '/'})
  ;
}]);
