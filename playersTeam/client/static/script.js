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

	factory.teams = ['Seahawks','49ers','Honeybadgers'];

	factory.addTeam = function(data){
		factory.teams.push(data);
	}

	factory.removeTeam = function(i){
		factory.teams.splice(i,1);
	}

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

myApp.controller('teamController', function($scope,teamFactory){
	$scope.teams;

	$scope.getTeams = function(data){
		$scope.teams = data;
	}

	$scope.getTeams(teamFactory.teams);
	$scope.removeTeam = function($index){
		teamFactory.removeTeam($index);
	}
	$scope.addTeam = function(){
		teamFactory.addTeam($scope.team);
		$scope.team='';
	}
})