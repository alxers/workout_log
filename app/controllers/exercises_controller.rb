class ExercisesController < ApplicationController

  def create
    @workout = find_workout
    @exercise = @workout.exercises.create(exercise_params)
    redirect_to workout_path(@workout)
  end

  def destroy
    @workout = find_workout
    @exercise = @workout.exercise.find(params[:id])
    @exercise.destroy
    redirect_to workout_path(@workout)
  end

  private

    def exercise_params
      params.require(:exercise).permit(:title, :reps, :sets)
    end

    def find_workout
      Workout.find(params[:workout_id])
    end
end
