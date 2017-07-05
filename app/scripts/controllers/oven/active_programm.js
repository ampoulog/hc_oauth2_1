'use strict';

angular.module('angularJsApp')
	.controller('OvenActiveProgrammController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+oven_id+active_program,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear  
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_oven_active_program = res.data;
	          }
	        });
	
}]);