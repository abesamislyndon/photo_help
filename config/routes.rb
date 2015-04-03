Rails.application.routes.draw do


   resources :vendors, :only => [:new, :result_page, :create]
   resources :admin_page, :only => [:vendor_list, :destroy, :update]
   devise_for :users,:controllers => { :omniauth_callbacks => "omniauth_callbacks" }
   

 devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
   
   root 'vendors#index' 
   get  'vendors/login'
   get  'vendors/all'
   get  'vendors/new'
   get  'vendors/result'

   get  'admin_page/vendor_list'
   get  'admin_page/destroy'  
   get  'admin_page/update'


end