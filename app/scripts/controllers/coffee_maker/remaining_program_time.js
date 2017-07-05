//Unsupported 

'use strict';

angular.module('angularJsApp')
	.controller('CoffeeMakerRemainingTimeController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+coffee_maker_id+remaining_time,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear 
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_cm_remaining_program_time = res.data;
	          }
	        });
	
}]);