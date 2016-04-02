var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function ($routeProvider) {
	// body...
	$routeProvider
		.when('/players',{
			templateUrl:'partials/players.html'
		})
		.when('/teams',{
			templateUrl:'partials/teams.html'
		})
		.when('/associations',{
			templateUrl:'partials/associations.html'
		})
		.otherwise({
			redirectTo:'/'
		});

})

myApp.factory('playerFactory', function(){
	var factory={}

	factory.players =["Speros","Jimmy","Jay"];

	factory.addPlayer = function(data){
		factory.players.push(data);
	}

	factory.removePlayer = function(i){
		factory.players.splice(i,1);
	}

	return factory;
})

myApp.factory('teamFactory',function(){
	var factory={}

	return factory;
})

myApp.controller('playerController', function($scope,playerFactory){
	$scope.players;

	$scope.getPlayers = function(data){
		$scope.players = data;
	}

	$scope.getPlayers(playerFactory.players);
	$scope.removePlayer = function($index){
		playerFactory.removePlayer($index);
	}
	$scope.addPlayer = function(){
		playerFactory.addPlayer($scope.player);
		$scope.player='';
	}
})