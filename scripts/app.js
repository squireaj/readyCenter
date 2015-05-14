var app = angular.module('readyCenter', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
			.when('/', {
			templateUrl: 'views/home.html',
			controller: 'mainCtrl'
		})

			.when('/', {
			templateUrl: 'views/home.html',
			// controller: ''
		})
			.otherwise({
  			redirectTo: '/'
  		});

	});