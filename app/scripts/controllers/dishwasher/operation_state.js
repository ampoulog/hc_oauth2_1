'use strict';

angular.module('angularJsApp')
	.controller('DishwasherOperationStateController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+dishwasher_id+operation_state,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear 
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_dishwasher_operation_state = res.data;
	          }
	        });
	
}]);