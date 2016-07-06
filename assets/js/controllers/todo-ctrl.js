(function() {

	'use strict';
	angular
		.module('main')
		.controller('TodoCtrl', TodoCtrl);

		TodoCtrl.$inject = ['$scope', '$mdDialog'];

		function TodoCtrl($scope, $mdDialog) {
			var isImportant = false;
			var title;
			var notes;
			var item;
			var isDone = false;
		
			$scope.todos = [
				{ 	name: 'yani',
					additional: 'hi',
					isImportant: false,
					isDone: false
				},
				{ 	name: 'oppa',
					additional: 'hello po',
					isImportant: true,
					isDone: true
				},
				{ 	name: 'markjaykun',
					additional: null,
					isImportant: true,
					isDone: false
				}
			];

			$scope.doneTodos = [];
			$scope.importantTodos = [];
			$scope.undoneTodos = [];
			$scope.unimportantTodos = [];

			$scope.submit = function() {
				title = $scope.todo.title;
				notes = $scope.todo.notes;	
				if(title === null || title === undefined || title === ""){ }
				else{
					$scope.pushValues();
					$scope.reset();
				}
				$scope.closeDialog();
				console.log($scope.isDone);
			}

			$scope.change = function() {
				isImportant = !isImportant;
			}

			$scope.changeStar = function(item) {
				isImportant = !isImportant;
				item.isImportant = isImportant;
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
					isImportant: isImportant,
					isDone: isDone
				};
				$scope.todos.push(item);
			}

			$scope.pushDone = function(item) {
				isDone = !isDone
				item.isDone = isDone;

				console.log(item.isDone);
				$scope.doneTodos.push(item);
				isDone = false;
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
				$scope.todos.splice($scope.todos[index], 1);
			}

			$scope.closeDialog = function() {
				$mdDialog.hide();
			}

			$scope.editTodo = function(item) {
				$mdDialog.show({
					clickOutsideToClose: true,
					scope: $scope,
					parent: angular.element(document.body),
					preserveScope: true,
					templateUrl: 'assets/views/editDialog.html',
					controller: function DialogController($scope, $mdDialog) {
						$scope.editHeader = item.name;
						$scope.editTitle = item.name;
						$scope.editNotes = item.additional;
						var newIsImportant = false;
						$scope.editImportant = item.isImportant;
						$scope.newChange = function() {
							newIsImportant = !newIsImportant;
						}

						$scope.edit = function() {
							var newTitle = $scope.edit.newTitle;
							var newNotes = $scope.edit.newNotes;
							if(newTitle === null || newTitle === undefined || newTitle === ""){
								item.name = item.name;
							}
							else{
								item.name = newTitle;
							}
							item.additional = newNotes;
							item.isImportant = newIsImportant;
							$scope.closeEditDialog();
						}

						$scope.closeEditDialog = function() {
							$mdDialog.hide();
						}
					}
				});
			}
		}
})();