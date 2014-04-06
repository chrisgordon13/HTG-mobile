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
    .when('/Requests', {
        templateUrl: 'partials/Request-List.html',
        controller: 'RequestListCtrl'
    })
    .when('/Requests/:request_id', {
        templateUrl: 'partials/Request-Detail.html', 
        controller: 'RequestDetailCtrl'
    })
    .when('/Responses', {
        templateUrl: 'partials/Response-List.html',
        controller: 'ResponseListCtrl'
    })
    .when('/Responses/:response_id', {
        templateUrl: 'partials/Response-Detail.html', 
        controller: 'ResponseDetailCtrl'
    })
    .when('/Buyers', {
        templateUrl: 'partials/Buyer-List.html',
        controller: 'BuyerListCtrl'
    })
    .when('/Buyers/:buyer_id', {
        templateUrl: 'partials/Buyer-Detail.html',
        controller: 'BuyerDetailCtrl'
    })
    .when('/Suppliers', {
        templateUrl: 'partials/Supplier-List.html',
        controller: 'SupplierListCtrl'
    })
    .when('/Suppliers/:supplier_id', {
        templateUrl: 'partials/Supplier-Detail.html',
        controller: 'SupplierDetailCtrl'
    })
    .otherwise({redirectTo: '/'})
  ;
}]);
