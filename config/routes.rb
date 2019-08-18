Rails.application.routes.draw do
  resources :bookings
  root 'pages#index'
  match '*path', to: 'pages#index', via: :all
end
