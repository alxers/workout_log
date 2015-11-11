Rails.application.routes.draw do
  resources :workouts do
    resources :comments
  end

  root 'workouts#index'
end
