var app = angular.module('theApp');

app.controller('theCtrl', function($scope){
	$scope.name = "Eric Church Williams";
	var currentTime = new Date();
	$scope.time = currentTime.toString();
});