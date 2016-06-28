(function() { 

	'use strict';
	angular
		.module('main')
		.config(function($stateProvider, $urlRouterProvider) {


		$urlRouterProvider
			.otherwise('/');

		$stateProvider
			.state('/', {
				url:'/',
				template: '<div layout-padding> <h1> Landing Page </h1> </div>'
			})
			.state('home', {
				url: '/home',
				templateUrl: 'assets/views/home.html',
				controller: function($scope) {}
			})
			.state('about', {
				url: '/about',
				templateUrl: 'assets/views/about.html',
				controller: function($scope) {}
			})
			.state('todo', {
				url: '/todo',
				templateUrl: 'assets/views/todo.html',
				controller: 'TodoCtrl'
			});
		});
})();