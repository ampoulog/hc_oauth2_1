'use strict';

angular.module('angularJsApp')
	.controller('DishwasherPowerStateController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+dishwasher_id+power_state,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear 
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_dishwasher_power_state = res.data;
	          }
	        });
	
}]);