Rails.application.routes.draw do
  get '/', to: 'hello_world#index'
  
  namespace :v1 do
    resources :users
  end
end
