var workoutServices = angular.module('workoutServices', ['ngResource']);

workoutServices.factory('Workout', ['$resource',
  function($resource){
    return $resource('workouts/:id.json');
  }]);
