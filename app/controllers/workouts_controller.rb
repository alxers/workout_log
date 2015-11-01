class WorkoutsController < ApplicationController

  def index
    @workouts = Workout.all
  end

  def show
    @workout = find_workout
  end

  def new
  end

  def edit
    @workout = find_workout
  end

  def create
    @workout = Workout.new(workout_params)

    if @workout.save
      redirect_to @workout
    else
      render 'new'
    end
  end

  def update
  end

  def destroy
  end

  private

    def workout_params
      params.require(:workout).permit(:title, :length)
    end

    def find_workout
      Workout.find(params[:id])
    end
end
