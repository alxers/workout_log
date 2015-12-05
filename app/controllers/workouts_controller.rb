class WorkoutsController < ApplicationController

  def index
    @workouts = Workout.all

    respond_to do |format|
      format.json { render json: @workouts }
      format.html { render 'index' }
    end
  end

  def show
    @workout = find_workout

    respond_to do |format|
      format.json { render json: @workout }
      format.html { render 'index' }
    end
  end

  def new
    @workout = Workout.new
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
    @workout = find_workout

    if @workout.update(workout_params)
      redirect_to @workout
    else
      render 'edit'
    end
  end

  def destroy
    @workout = find_workout
    @workout.destroy

    redirect_to workouts_path
  end

  private

    def workout_params
      params.require(:workout).permit(:title, :length)
    end

    def find_workout
      Workout.find(params[:id])
    end
end
