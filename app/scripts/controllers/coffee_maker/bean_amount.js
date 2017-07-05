'use strict';

angular.module('angularJsApp')
	.controller('CoffeeMakerBeanAmountController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+coffee_maker_id+bean_amount,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear 
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_cm_bean_amount = res.data;
	          }
	        });
	
}]);