angular.module('app.router', ['ui.router'])
    .config(['$provide', '$stateProvider', '$urlRouterProvider', function ($provide, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/wfop');

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
            });

    }]);