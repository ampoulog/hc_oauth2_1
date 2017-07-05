'use strict';

angular.module('angularJsApp')
	.controller('DishwasherDoorStateController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+dishwasher_id+door_state,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_dishwasher_door_state = res.data;
	          }
	        });
	
}]);