class WorkoutsController < ApplicationController

  def index
    @workouts = Workout.all
  end

  def show
    @workout = Workout.find(params[:id])
  end

  def new
  end

  def create
    @workout = Workout.new(workout_params)

    @workout.save
    redirect_to @workout
  end

  private

    def workout_params
      params.require(:workout).permit(:name, :length)
    end
end
