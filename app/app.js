var app = angular.module("authorize", ['app.router', 'app.controller', 'app.service', 'app.constant'])
    .run(['$rootScope', 'service', function ($rootScope, service) {
    	console.log("run");
    }]);