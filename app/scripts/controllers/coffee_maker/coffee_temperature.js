'use strict';

angular.module('angularJsApp')
	.controller('CoffeeTemperatureController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+coffee_maker_id+coffee_tempearture,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear 
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_cm_coffee_temperature = res.data;
	          }
	        });
	
}]);