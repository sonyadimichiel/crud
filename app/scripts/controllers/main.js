/**
 * @ngdoc function
 * @name crudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crudApp
 */

angular.module('crudApp')
  .controller('MainCtrl', [ '$scope', '$location', function ($scope, $location) {
    'use strict';

    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.items = [{
        id: 'home',
        title: 'Home',
        path: '/home'
    },{
        id: 'about',
        title: 'About',
        path: '/about'
    },{
        id: 'contact',
        title: 'Contact',
        path: '/contact'
    },{
        id: 'login',
        title: 'Login',
        path: '/login'
    }];

    $scope.isActive = function(item) {
        if (item.path === $location.path()) {
            return true;
        }
        return false;
     };
  }]);
