'use strict';

angular.module('angularJsApp')
	.controller('CoffeeMakerFillQuantityController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+coffee_maker_id+coffee_quantity,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear 
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_cm_fill_quantity = res.data;
	          }
	        });
	
}]);