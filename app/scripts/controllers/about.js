'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsApp about view
 */
angular.module('angularJsApp')
  .controller('AboutCtrl', function ($rootScope, $scope, $routeParams, $http) {
    if ($routeParams.code) {
      $scope.code = $routeParams.code;
      $http({
        method: "POST",
        url: $rootScope.authData.token_url,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: $.param({
          client_id: $rootScope.authData.client_id,
          redirect_uri: $rootScope.authData.redirect_url,
          grant_type: 'authorization_code',
          code: $routeParams.code,
          state: $routeParams.state ? $routeParams.state : 1,
        })
      }).then(function (res) {
        if (res.data) {
          $scope.authTokenResponseData = res.data;
        }
      });
    }
  });
