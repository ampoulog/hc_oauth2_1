'use strict';

angular.module('angularJsApp')
	.controller('OvenSelectedOptionsController', [ '$http', '$scope', '$log', function($http, $scope, $log){
	 
	$http({
		  method: "GET",
		  url: basic_uri+oven_id+selected_option,
		  headers: {
			  'Accept' : accept,
			  'Accept-Language': language,
			  'Authorization' : bear 
		  }
		}).then(function (res) {
	        if (res.data) {
	            $scope.response_oven_selected_options = res.data;
	          }
	        else{
	        	$log.error(error);
	        } 
	        });
	
}]);