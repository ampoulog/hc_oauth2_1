'use strict';

angular.module('angularJsApp')
	.controller('OvenDurationController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+oven_id+duration,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear  
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_oven_duration = res.data;
	          }
	        });
	
}]);