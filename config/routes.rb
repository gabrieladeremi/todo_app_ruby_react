Rails.application.routes.draw do

  namespace :api do
    resources :todos do
      member do
        patch 'updated_completed'
      end
    end
  end
end
