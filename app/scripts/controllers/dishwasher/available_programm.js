'use strict';

angular.module('angularJsApp')
	.controller('DishwasherAvailableProgrammController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+dishwasher_id+available_programs,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_dishwasher_available_program = res.data;
	        }
	        });
	
}]);