// controllers, models, filters, Objects, Classes, 

// Module => Controller => $scope

// Dependencies => always put them in square brackets
// Rest of it goes in curly brackets {}

app = angular.module('todoApp',[]);

app.controller('ToDoController',['$scope', function($scope){

	// $scope is a model in Angularjs
	$scope.totalNumberOfTodos = 10;
	
	// $scope.todos = []; List Of Todo's

	// $scope.abc = 'xyz'

	// $scope.addToDo = function(){
			// Custom code
	//}

	// $scope.deleteTodo = function(){}

	


}]);