Rails.application.routes.draw do

   resources :vendors, :only => [:new, :result_page, :create]

   root 'vendors#index' 
   get  'vendors/login'
   get  'vendors/all'
   get  'vendors/new'

end