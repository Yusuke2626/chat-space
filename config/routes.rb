Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'groups#index'

  resources  :users, only: [:edit,:index,:update]
  resources  :groups, only: [:create,:edit,:index,:new] do
    resources :messages, only: [:index,:create]
  end

end
