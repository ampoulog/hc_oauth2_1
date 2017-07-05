'use strict';

angular.module('angularJsApp')
	.controller('OvenAvailableSettingsController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+oven_id+available_settings,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear 
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_oven_available_settings = res.data;
	          }
	        });
	
}]);