'use strict';

angular.module('angularJsApp').controller('IdentifyApplianceController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri,
		  headers: {
			  'Accept' : accept,
			  'Authorization' : bear
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response = res.data;
	          }
	        });
	
}]);