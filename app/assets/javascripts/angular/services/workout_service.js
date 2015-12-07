angular.module('WorkoutApp.services').factory('WorkoutService', ['$resource',
  function($resource){
    return $resource('/workouts/:workoutId.json', {}, {
      query: { method: 'GET', isArray: true }
    });
  }]);
