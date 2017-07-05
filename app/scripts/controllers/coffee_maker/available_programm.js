'use strict';

angular.module('angularJsApp')
	.controller('CoffeeMakerAvailableProgrammController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+coffee_maker_id+available_programs,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_cm_available_program = res.data;
	          }
	        });
	
}]);