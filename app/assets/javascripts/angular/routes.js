angular.module('WorkoutApp').config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
      when('/workouts', {
        templateUrl: 'workouts.html',
        controller: 'WorkoutsCtrl'
      }).
      when('/workouts/:workoutId',{
          templateUrl: 'workout.html',
          controller: 'WorkoutCtrl'
      }).
      otherwise({
        redirectTo: '/workouts'
      });
  }
]);
