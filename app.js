/*global appServices, appDirectives, angular */
var appServices = angular.module("PortalFb.Services", []);
var appDirectives = angular.module("PortalFb.Directives", []);
var app = angular.module("PortalFb", ['kendo.directives', "PortalFb.Services", "PortalFb.Directives", "angularFileUpload", "ngDialog"]);

app.run(function () {
    "use strict";
});

app.filter('reverse', function() {
    return function(items) {
        if (items !== undefined) {
            return items.slice().reverse();
        }
    };
});

app.directive('autoFocus', function($timeout) {
    return {
        restrict: 'AC',
        link: function(_scope, _element) {
            $timeout(function(){
                _element[0].focus();
            }, 0);
        }
    };
});

app.run(['appConfigurator', function (appConfigurator) {
    "use strict";
    appConfigurator.configure();
}]);

