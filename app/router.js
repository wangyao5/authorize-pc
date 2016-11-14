angular.module('app.router', ['ui.router'])
    .config(['$provide', '$stateProvider', '$urlRouterProvider', function ($provide, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/index');

        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'tpl/index.html',
                controller: 'index'
            })

    }]);