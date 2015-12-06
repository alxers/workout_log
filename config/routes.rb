Rails.application.routes.draw do
  resources :workouts do
    resources :exercises
  end

  root 'workouts#index'
  # get 'workouts/:id', to: 'workouts#show'
end
