'use strict';

/* Directives */
angular.module('rfp.directives', [])
    .directive("headerBar", function() { 
        return {
            restrict: "AE", 
            replace: true, 
            transclude: true,
            templateUrl: "static/partials/Header-Bar.html" 
        };
    })

    .directive("navBar", function() { 
        return {
            restrict: "AE", 
            replace: true, 
            transclude: true,
            templateUrl: "static/partials/Nav-Bar.html" 
        };
    })
;
