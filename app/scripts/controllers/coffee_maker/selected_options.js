'use strict';

angular.module('angularJsApp')
	.controller('CoffeeMakerSelectedOptionsController', [ '$http', '$scope', function($http, $scope){
	 
	$http({
		  method: "GET",
		  url: basic_uri+coffee_maker_id+selected_option,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear 
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_cm_selected_options = res.data;
	          }
	        });
	
}]);