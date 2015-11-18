//= require angular
//= require angular-route
//= require angular-resource
//= require pages/resources/workout
//= require pages/controllers/workouts_controller

var dependencies = [
  'ngRoute',
  'ngResource',
  'workoutServices',
  'workoutsController'
];

var WorkoutApp = angular.module('WorkoutApp', dependencies);


WorkoutApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
      when('/workouts', {
        templateUrl: 'workouts.html',
        controller: 'WorkoutsCtrl'
      }).
      otherwise({
        redirectTo: '/workouts'
      });
  }
]);
