var app = angular.module('theApp');

app.directive('showTime', function(){
	return {
		restrict: 'E',
		template: '<div> The current time is {{time}} </div>',
		link: function(scope, element, attrs){

		}
	};
});