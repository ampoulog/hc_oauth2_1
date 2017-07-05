'use strict';

angular.module('angularJsApp')
	.controller('OvenSetPointTemperatureController', [ '$http', '$scope', '$log', function($http, $scope, $log){
	 
	$http({
		  method: "GET",
		  url: basic_uri+oven_id+set_point_temperature,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_oven_set_point_temperature = res.data;
	          }
	        else{
	        	$log.error(error);
	        } 
	        });
	
}]);