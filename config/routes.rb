Rails.application.routes.draw do

   devise_for :users
   resources :vendors, :only => [:new, :result_page, :create]

   root 'vendors#index' 
   get  'vendors/login'
   get  'vendors/all'
   get  'vendors/new'
   get  'vendors/result'

end