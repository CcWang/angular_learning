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

	factory.removeUser = function(i){
		factory.users.splice(i,1);
	};

	factory.addUser = function(data){
		factory.users.push(data);
	}

	return factory;
})
myApp.controller('listController', function($scope, userFactory){
	$scope.users;
   	$scope.getUsers = function(data){
   		$scope.users = data;
   	};
   	$scope.getUsers(userFactory.users);
})

myApp.controller('userController', function($scope,userFactory){
	$scope.users;
   	$scope.getUsers = function(data){
   		$scope.users = data;
   	};
   	$scope.getUsers(userFactory.users);
   	$scope.removeUser = function($index){
   		userFactory.removeUser($index);
   	};

   	$scope.addUser = function(){
   		userFactory.addUser($scope.user);
   	}
})