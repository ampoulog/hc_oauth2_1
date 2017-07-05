'use strict';

angular.module('angularJsApp')
	.controller('DishwaherProgrammController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+dishwasher_id+active_program,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_dishwasher_active_program = res.data;
	          }
	        });
	
}]);