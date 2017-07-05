'use strict';

angular.module('angularJsApp')
	.controller('OvenAvailableProgrammController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+oven_id+available_programs,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': 'en-US',
			  'Authorization' : bear
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_oven_available_program = res.data;
	          }
	        });
	
}]);