'use strict';

/* Directives */


angular.module('rfp.directives', [])
    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }])
    .directive("navBar", function() { // (1)
        return {
            restrict: "AE",         // (2)
            replace: true,         // (3)
            transclude: true,      // (4)
            templateUrl: "partials/Nav-Bar.html"    // (5)
        };
    });
