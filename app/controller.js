angular.module("app.controller", [])
    .controller('index', ['$scope', '$state', '$stateParams', 'service', function($scope, $state, $stateParams, service) {
          console.log("into index");
    }])
    .controller('company', ['$scope', '$state', '$stateParams', 'service', function($scope, $state, $stateParams, service) {
          service.getCompany().then(function(data){
            $scope.company = data;
          });

          $scope.switch = function(index) {
             $scope.company[index].editer = true;
          }

          $scope.blur = function(index) {
             $scope.company[index].editer = false;
             var current = $scope.company[index];
             var otherCompany = $scope.company.splice(index);
             var status = otherCompany.join(',').indexOf(current.name);
          }

          $scope.add = function() {
            $scope.company.push({name:''});
          }
    }]);