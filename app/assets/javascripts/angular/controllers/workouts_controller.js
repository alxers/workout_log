angular.module('WorkoutApp').controller('WorkoutsCtrl', ['$scope', 'WorkoutService',
  function($scope, WorkoutService) {
    $scope.workouts = WorkoutService.query();
  }
]);

angular.module('WorkoutApp').controller('WorkoutCtrl', ['$scope', 'WorkoutService','$routeParams',
  function($scope, WorkoutService, $routeParams) {
    $scope.workout = WorkoutService.get({ workoutId: $routeParams.workoutId});
  }
]);
