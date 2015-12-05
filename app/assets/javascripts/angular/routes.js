angular.module('WorkoutApp').config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
      when('/workouts', {
        templateUrl: 'workouts.html',
        controller: 'WorkoutsCtrl'
      }).
      when('/workouts/:id',{
          templateUrl: 'workout.html',
          controller: 'WorkoutsCtrl'
      }).
      otherwise({
        redirectTo: '/workouts'
      });
  }
]);
