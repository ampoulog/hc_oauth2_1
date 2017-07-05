'use strict';

angular.module('angularJsApp')
	.controller('OvenRemainingProgramTimeController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+oven_id+remaining_time,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_oven_remaining_program_time = res.data;
	          }
	        });
	
}]);