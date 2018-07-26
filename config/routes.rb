Rails.application.routes.draw do
  namespace :api do
    resources :reviews, only: [:index, :create]
    resources :services, only: [:index]
    resources :contacts, only: [:create]
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
