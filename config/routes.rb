Rails.application.routes.draw do
  namespace :api do
    resources :reviews, only: [:index]
    resources :services, only: [:index]
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
