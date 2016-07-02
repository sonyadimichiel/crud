'use strict';

/**
 * @ngdoc overview
 * @name crudApp
 * @description
 * # crudApp
 *
 * Main module of the application.
 */

angular
  .module('crudApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/localstorage', {
        templateUrl: 'views/localstorage.html'
      }).when('/readdatabase', {
        templateUrl: 'views/readdatabase.html'
       }).when('/underscore', {
        templateUrl: 'views/underscore.html'
      }).when('/twit-panel', {
        templateUrl: 'views/twit-panel.html'
      }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });
