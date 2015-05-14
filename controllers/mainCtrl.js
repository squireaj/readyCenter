var app = angular.module('readyCenter');

app.controller('mainCtrl', function($scope){
	
		$scope.newReg = false;
		$scope.showReg = function(){
		$scope.newReg = !$scope.newReg;
		console.log("Ran newReg")
		}

});