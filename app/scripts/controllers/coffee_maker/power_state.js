'use strict';

angular.module('angularJsApp')
	.controller('CoffeeMakerPowerStateController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+coffee_maker_id+power_state,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear 
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_cm_power_state = res.data;
	          }
	        });
	
}]);