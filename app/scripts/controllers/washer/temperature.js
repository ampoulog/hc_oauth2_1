'use strict';

angular.module('angularJsApp')
	.controller('WasherTemperatureController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+washer_id+washer_temperature,
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