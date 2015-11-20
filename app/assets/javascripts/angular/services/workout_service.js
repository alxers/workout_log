angular.module('WorkoutApp.services').factory('WorkoutService', ['$resource',
  function($resource){
    return $resource('workouts/:id.json');
  }]);
