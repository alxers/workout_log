var workoutsController = angular.module('workoutsController', []);

workoutsController.controller('WorkoutsCtrl', ['$scope', 'Workout','$routeParams',
  function($scope, Workout, $routeParams) {
    $scope.workouts = Workout.query();
    $scope.removeWorkout = function() { console.log('!!!') };
  }
]);
