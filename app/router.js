angular.module('app.router', ['ui.router'])
    .config(['$provide', '$stateProvider', '$urlRouterProvider', function ($provide, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/authorize');

        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'assets/tpl/index.html',
                controller: 'index'
            })
            .state('userop', {
                url: '/userop',
                templateUrl: 'assets/tpl/userop.html',
                controller: 'userop'
            })
            .state('company', {
                url: '/company',
                templateUrl: 'assets/tpl/company.html',
                controller: 'company'
            })
            .state('wf_op', {
                url: '/wfop',
                templateUrl: 'assets/tpl/wfop.html',
                controller: 'wfop'
            })
            .state('search', {
                url: '/search',
                templateUrl: 'assets/tpl/search.html',
                controller: 'search'
            })
            .state('authorize', {
                url: '/authorize',
                templateUrl: 'assets/tpl/authorize.html',
                controller: 'authorize'
            });

    }]);