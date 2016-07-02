/**
 * Created by sonyadimichiel on 3/12/2015.
 */
angular.module('crudApp')
  .controller('LoginCtrl',
  ['$scope', '$http',
    function LoginCtrl($scope, $http) {
      'use strict';

      $scope.submitLogin = function() {
        var userName = $scope.uName;
        var userPassword = $scope.uPassword;

          $http({
             method: 'POST',
             url: '../../data/login.php',
             data: {
                    'username': userName,
                    'password': userPassword
             },
             headers: {
                 'Content-Type': 'application/x-www-form-urlencoded'
             }
         }).then(function successCallback(response) {
             $scope.names = response.data.records;
             $scope.status = response.statusText;
         }, function errorCallback(response) {
              $scope.status = response.statusText;
         });
      };
    }]);
