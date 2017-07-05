//Unsupported
'use strict';

angular.module('angularJsApp')
	.controller('FridgeFreezerPowerStateController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+fridge_freezer_id+power_state,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear 
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response = res.data;
	          }
	        });
	
}]);