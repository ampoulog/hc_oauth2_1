'use strict';

angular.module('angularJsApp')
	.controller('WasherRemoteControlStartAllowedController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+washer_id+remote_control_start_allowed,
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