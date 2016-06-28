(function() {

	'use strict';
	angular
		.module('main')
		.controller('TodoCtrl', TodoCtrl);

		TodoCtrl.$inject = ['$scope', '$mdDialog'];

		function TodoCtrl($scope, $mdDialog, $event) {
			var isImportant = false;
			var title;
			var notes;
			var item;
			
			// $scope.todo.isImportant = isImportant;       
			$scope.todos = [
				{ 	name: 'yani',
					additional: 'hi',
					isImportant: false 
				},
				{ 	name: 'oppa',
					additional: 'hello po',
					isImportant: true 
				},
				{ 	name: 'markjaykun',
					additional: null,
					isImportant: true 
				}

			];

			$scope.submit = function() {
					// $scope.checkForm();
					title = $scope.todo.title;
					notes = $scope.todo.notes;	
					console.log(title);
					console.log(notes);
					console.log(isImportant);
					$scope.pushValues();
					console.log("PUSH");
					$scope.reset();
					console.log($scope.todos.length);
				// }
			}

			$scope.change = function() {
				// console.log("before" + isImportant);
				isImportant = !isImportant;
				// console.log("after" + isImportant);

			}

			$scope.reset = function() {
				$scope.todo.title = null;
				$scope.todo.notes = null;
				$scope.todo.isImportant = false;
			}

			$scope.pushValues = function() {
				item = {
					name: $scope.todo.title,
					additional: $scope.todo.notes,
					isImportant: isImportant
				};
				$scope.todos.push(item);
				console.log($scope.todos.length);
			}

			$scope.addTodo = function() {
				$mdDialog.show({
					clickOutsideToClose: true,
					scope: $scope,
					preserveScope: true,
					templateUrl: 'assets/views/dialog.html',
					controller: function DialogController($scope, $mdDialog) {
						$scope.cancel = function() {
							$mdDialog.cancel();
							console.log("cancel");
						}
						$scope.printTrue = function() {
							console.log("true");
						}
						$scope.printFalse = function() {
							console.log("false");
						}
					}
				});
			}

			$scope.remove = function(item) {
				var index = $scope.todos.indexOf(item);

				console.log(index);
				$scope.todos.splice($scope.todos[index], 1);
			}

			$scope.checkForm = function() {
				console.log("title:" + $scope.todo.title);
				if($scope)
			}
		}
})();