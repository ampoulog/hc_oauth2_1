'use strict';

angular.module('angularJsApp')
	.controller('OvenElapseProgramTimeController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+oven_id+elapse_time,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear 
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_oven_elapse_program_time = res.data;
	          }
	        });
	
}]);