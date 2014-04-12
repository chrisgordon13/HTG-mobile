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

  alert(window.location);
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
    .when('/Airports/:code/Terminal/:terminal', {
        template: 'Places Controller Called',
        controller: 'PlacesCtrl'
    })
    //.otherwise({redirectTo: '/'})
  ;
}]);
