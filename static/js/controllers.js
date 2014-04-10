'use strict';

/* Controllers */
angular.module('rfp.controllers', [])

    .controller('NavBarCtrl', ['$scope', '$location', function($scope, $location) {
        
        $scope.navBarActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    }])

    .controller('HomeCtrl', ['$scope', 'geo', 'airport', function($scope, geo, airport) {
        $scope.title = 'Welcome to On the Go.';
        $scope.coords;
        $scope.airport;
        $scope.status;

        $scope.coords = geo.getCoords().then(function(coords) {
            console.log(coords);
            return coords;
        });

        airport.getNearest($scope.coords)
            .success(function(data) {
                $scope.airport = data[0];
            })
            .error(function(error) {
                $scope.status = 'Unable to find an airport near you: ' + error.message;
            });
    }])

    .controller('BlogCtrl', ['$scope', 'blog', function($scope, blog) {
        $scope.posts;
        $scope.status;

        getPosts();

        function getPosts() {
            blog.getPosts()
                .success(function(data) {
                    $scope.posts = data.items;
                })
                .error(function(error) {
                    $scope.status = 'Unable to load blog posts data: ' + error.message;
                });
        }
    }])

    .controller('SearchCtrl', ['$scope', function($scope) {

        $scope.title = 'Dashboard';
    }])

    .controller('RequestDetailCtrl', ['$scope', 'question', function($scope, question) {
        $scope.questions;

        getQuestions();

        function getQuestions() {
            question.getQuestions()
                .success(function (data) {
                        $scope.questions = data;
                })
                .error (function (error) {
                    $scope.status = 'Unable to load question data: ' + error.message;
                });
        }
    }])
;
