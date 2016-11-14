angular.module("app.controller", [])
    .controller('index', ['$scope', '$state', '$stateParams', 'service', function($scope, $state, $stateParams, service) {
          console.log("into index");
    }]); 