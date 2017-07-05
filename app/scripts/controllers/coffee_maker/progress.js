'use strict';

angular.module('angularJsApp')
	.controller('CoffeeMakerProgressController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+coffee_maker_id+progress,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear 
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_cm_progress = res.data;
	          }
	        });
	
}]);