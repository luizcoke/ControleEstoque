/*
 Template cache module.
*/
angular.module('templates', []);

var App = angular.module('App', ['ngRoute', 'ngResource', 'templates']);

App.config(function($logProvider, $routeProvider, $httpProvider, $compileProvider, $locationProvider){

    var enableDebug = localStorage.debug == true; // jshint ignore:line

    $logProvider.debugEnabled(enableDebug);
    
    $compileProvider.debugInfoEnabled(enableDebug);

    $locationProvider.html5Mode(true).hashPrefix('');

    $httpProvider.interceptors.push('HttpInterceptor');

    $httpProvider.defaults.headers.common.Accept = 'application/json';

    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeCtrl',
            reloadOnSearch: false
        })
        .otherwise({
            redirectTo: '/'
        });

});

App.run(function(){
	
});
