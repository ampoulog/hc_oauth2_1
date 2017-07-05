'use strict';

angular.module('angularJsApp')
	.controller('DishwasherProgramProgressController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+dishwasher_id+progress,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear 
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_dishwasher_program_progress = res.data;
	          }
	        });
	
}]);