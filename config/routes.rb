Rails.application.routes.draw do

   devise_for :users
   resources :vendors, :only => [:new, :result_page, :create]
   resources :admin_page, :only => [:vendor_list]

   root 'vendors#index' 
   get  'vendors/login'
   get  'vendors/all'
   get  'vendors/new'
   get  'vendors/result'

   get  'admin_page/vendor_list'


end