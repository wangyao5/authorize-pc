angular.module('app.router', ['ui.router'])
    .config(['$provide', '$stateProvider', '$urlRouterProvider', function ($provide, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/company');

        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'assets/tpl/index.html',
                controller: 'index'
            })
            .state('company', {
                url: '/company',
                templateUrl: 'assets/tpl/company.html',
                controller: 'company'
            });

    }]);