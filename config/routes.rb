Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'site#index'

  namespace :api do
    resources :stocks, only: [:index] do
      get 'search', on: :collection
      get 'query_prices', on: :member
    end
  end

end
