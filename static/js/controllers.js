'use strict';

angular.module('rfp.controllers', [])

    .controller('VisitorListCtrl', ['$scope', 'visitor', function($scope, visitor) {
        $scope.visitors;
        $scope.status;

        getVisitors();

        function getVisitors() {
            visitor.getVisitors()
                .success(function (data) {
                    $scope.visitors = data;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
        }
    }])
    
    .controller('NavBarCtrl', ['$scope', '$location', function($scope, $location) {
        
        $scope.navBarActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    }])

    .controller('DashboardCtrl', ['$scope', function($scope) {

        $scope.title = 'Dashboard';
    }])

    .controller('RequestListCtrl', ['$scope', function($scope) {

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

    .controller('ResponseListCtrl', ['$scope', function($scope) {

    }])

    .controller('ResponseDetailCtrl', ['$scope', function($scope) {

        var response = {'PROPNAME':'Test Property'};
        $scope.response = response;

    }])

    .controller('BuyerListCtrl', ['$scope', function($scope) {

    }])

    .controller('BuyerDetailCtrl', ['$scope', function($scope) {

    }])

    .controller('SupplierListCtrl', ['$scope', function($scope) {

    }])

    .controller('SupplierDetailCtrl', ['$scope', function($scope) {

    }])
;
