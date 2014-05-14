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
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'static/partials/Home.html',
        controller: 'HomeCtrl'
    })
    .when('/Airport-Yes/:code', {
        templateUrl: 'static/partials/Airport-Yes.html',
        controller: 'AirportYesCtrl'
    })
    .when('/Airport-In/:code', {
        templateUrl: 'static/partials/Airport-In.html',
        controller: 'AirportInCtrl'
    })
    .when('Airport-Out/:code', {
        templateUrl: 'static/partials/Airport-Out.html',
        controller: 'AirportOutCtrl'
    })
    .when('/Blog', {
        templateUrl: 'static/partials/Blog.html',
        controller: 'BlogCtrl'
    })
    .when('/Airports', {
        templateUrl: 'static/partials/Airports.html',
        controller: 'AirportsCtrl'
    })
    .when('/Airports/:code/Terminals/:terminal', {
        templateUrl: 'static/partials/Places.html',
        controller: 'PlacesCtrl'
    })
    .when('/Places/Typee/:type', {
        templateUrl: 'static/partials/Places.html',
        controller: 'PlacesByTypeCtrl'
    })
    .when('/Places/:id', {
        templateUrl: 'static/partials/Place.html',
        controller: 'PlaceCtrl'
    })
    //.otherwise({redirectTo: '/'})
  ;
}]);
