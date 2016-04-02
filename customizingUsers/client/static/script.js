var myApp=angular.module('myApp',['ngRoute']);
myApp.config(function ($routeProvider) {
	// body...
	$routeProvider
		.when('/list', {
			templateUrl:'partials/list.html'
		})
		.when('/users', {
			templateUrl:'partials/users.html'
		})
		.otherwise({
			redirectTo:'/'
		});
})
myApp.factory('userFactory', function(){
	var factory={};

	factory.users = [
		{first_name: "Yukihiro", last_name:"Matsumoto", lan:"Ruby"},
 		{first_name:"Ryan", last_name:"Dahl", lan:"JavaScript"},
 		{first_name:"Brendan", last_name:"Eich",lan:"JavaScript"}
	];

	return factory;
})
myApp.controller('listController', function($scope, userFactory){
	$scope.users;
   	$scope.getUsers = function(data){
   		$scope.users = data;
   	};
   	$scope.getUsers(userFactory.users);
})