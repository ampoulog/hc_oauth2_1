'use strict';

angular.module('angularJsApp')
	.controller('OvenSelectedProgrammController', [ '$http', '$scope', '$log', function($http, $scope, $log){
	 
	$http({
		  method: "GET",
		  url: basic_uri+oven_id+selected_program,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_oven_selected_program = res.data;
	          }
	        else{
	        	$log.error(error);
	        } 
	        });
	
}]);