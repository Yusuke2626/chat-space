Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'groups#index'

<<<<<<< Updated upstream
=======
  resources  :users, only: [:edit,:update]
  resources  :groups, only: [:create,:edit,:update,:new] do
    resources :messages, only: [:index,:create]
  end
>>>>>>> Stashed changes

end
