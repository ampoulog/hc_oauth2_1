'use strict';

angular.module('angularJsApp')
	.controller('OvenProgramProgressController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+oven_id+progress,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear 
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_oven_program_progress = res.data;
	          }
	        });
	
}]);