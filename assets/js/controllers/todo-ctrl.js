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
					// $scope.checkForm(title);
					console.log(title);
					console.log(notes);
					console.log(isImportant);
					if(title === null || title === undefined || title === ""){
						console.log("no entry");
					}
					else{
						$scope.pushValues();
						console.log("PUSH");
						$scope.reset();
					}
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
					templateUrl: 'assets/views/addDialog.html',
					controller: function DialogController($scope, $mdDialog) {}
				});
			}

			$scope.remove = function(item) {
				var index = $scope.todos.indexOf(item);

				console.log(index);
				$scope.todos.splice($scope.todos[index], 1);
			}

			$scope.editTodo = function(item) {
				$mdDialog.show({
					clickOutsideToClose: true,
					scope: $scope,
					preserveScope: true,
					templateUrl: 'assets/views/editDialog.html',
					controller: function DialogController($scope, $mdDialog) {
						$scope.editHeader = item.name;
						$scope.editTitle = item.name;
						$scope.editNotes = item.additional;
						$scope.editImportant = item.isImportant;

						// $scope.change = function() {
						// 	console.log("before" + isImportant);
						// 	$scope.editImportant = !$scope.editImportant;
						// 	console.log("after" + isImportant);
						// }

						$scope.edit = function() {
							var newTitle = $scope.edit.newTitle;
							var newNotes = $scope.edit.newNotes;
							var newIsImportant = $scope.edit.editImportant;
							console.log(newTitle);
							console.log(newNotes);
							console.log(newIsImportant);
							// if(title === null || title === undefined || title === ""){
							// 	console.log("no entry");
							// }
							// else{
							// 	$scope.pushValues();
							// 	console.log("PUSH");
							// 	$scope.reset();
							// }
							// console.log($scope.todos.length);
						// }
						}
					}
				});
				// console.log($scope.item.name);
			}
		}
})();