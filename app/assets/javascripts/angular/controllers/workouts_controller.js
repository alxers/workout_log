// var workoutsController = angular.module('workoutsController', []);

angular.module('WorkoutApp').controller('WorkoutsCtrl', ['$scope', 'WorkoutService','$routeParams',
  function($scope, WorkoutService, $routeParams) {
    $scope.workouts = WorkoutService.query();
    $scope.removeWorkout = function() { console.log('!!!') };
  }
]);
