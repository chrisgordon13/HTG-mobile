'use strict';

/* Application */
angular.module('rfp', [
  'ngRoute',
  'rfp.filters',
  'rfp.services',
  'rfp.directives',
  'rfp.factories',
  'rfp.controllers'
])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'static/partials/Home.html',
        controller: 'HomeCtrl'
    })
    .when('/Airport-Yes/:code', {
        templateUrl: 'static/partials/Airport-Yes.html',
        controller: 'AirportYesCtrl'
    })
    .when('/Airport-No/:code', {
        templateUrl: 'static/particals/Airport-No.html'
    })
    .when('/Airport-In/:code', {
        templateUrl: 'static/partials/Airport-In.html',
        controller: 'AirportInCtrl'
    })
    .when('Airport-Out/:code', {
        templateUrl: 'static/partials/Airport-Out.html'
    })
    .when('/Blog', {
        templateUrl: 'static/partials/Blog.html',
        controller: 'BlogCtrl'
    })
    .when('/Search', {
        templateUrl: 'static/partials/Search.html',
        controller: 'SearchCtrl'
    })
    .when('/Airports', {
        templateUrl: 'static/partials/Airports.html',
        controller: 'AirportsCtrl'
    })
    .otherwise({redirectTo: '/'})
  ;
}]);
