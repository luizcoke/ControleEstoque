/*
 Template cache module.
*/
angular.module('templates', [
    'shared.module',
    'produto.module'
]);

var App = angular.module('App', ['ngRoute', 'ngResource', 'templates']);

App.constant('config', {
    apiUrl: 'https://controleestoqueservice.azurewebsites.net',
    baseUrl: '/',
    version: "1.0.0"
});


App.config(function ($logProvider, $routeProvider, $httpProvider, $compileProvider, $locationProvider) {

    var enableDebug = localStorage.debug == true; // jshint ignore:line

    $logProvider.debugEnabled(enableDebug);

    $compileProvider.debugInfoEnabled(enableDebug);

    // $locationProvider.html5Mode(true).hashPrefix('!');
    $locationProvider.hashPrefix('');

    $httpProvider.interceptors.push('HttpInterceptor');

    $httpProvider.defaults.headers.common.Accept = 'application/json';

    $routeProvider
        .otherwise({
            redirectTo: '/produtos'
        });

});

App.run(function () {

});
