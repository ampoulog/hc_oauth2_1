'use strict';

angular.module('angularJsApp')
	.controller('FridgeFreezerDoorStateController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+fridge_freezer_id+door_state,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': 'en-US',
			  'Authorization' : bear
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response = res.data;
	          }
	        });
	
}]);