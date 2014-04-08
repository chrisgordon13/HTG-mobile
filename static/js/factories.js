'use strict';

/* Factories */

angular.module('rfp.factories', [])
    .factory('blog', ['$http', function($http) {

        var urlBase = 'https://www.googleapis.com/blogger/v3/blogs/210404798699886185/posts?key=AIzaSyA-1aYJiCoBYL4qEKA2VwSFnvdBFfh0hDU&callback=posts';
        var data = {};

        data.getPosts = function() {
            return $http.get(urlBase);
        };

        return data;
    }])

    .factory('visitor', ['$http', function($http) {

        var urlBase = 'https://api.TripNanny.com/Visitors';
        var authHeader = {headers: {'Authorization': 'Basic YXV0aC1DNjVBRTBCQy00Mjk4LTRDN0MtOEM4MC0zQUY1MkFDMzBFRkE6'}}; 
        var data = {};

        data.getVisitors = function () {
            return $http.get(urlBase, authHeader);
        };

        data.getVisitor = function (id) {
            return $http.get(urlBase + '/' + id, authHeader);
        };

        data.insertVisitor = function (visitor) {
            return $http.post(urlBase, visitor, authHeader);
        };

        data.updateVisitor = function (visitor) {
            return $http.put(urlBase + '/' + visitor.ID, visitor, authHeader)
        };

        data.deleteVisitor = function (id) {
            return $http.delete(urlBase + '/' + id, authHeader);
        };

        return data;
    }])

    .factory('question', ['$http', function($http) {

        var data = {};

        data.getQuestions = function() {
	        return $http.get('http://api.rfp.io');
        };

	return data;
    }])
;
