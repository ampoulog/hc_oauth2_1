// Unsupported 
'use strict';

angular.module('angularJsApp')
	.controller('FridgeFreezerProgrammController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+fridge_freezer_id+active_program,
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