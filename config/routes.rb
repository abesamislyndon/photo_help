Rails.application.routes.draw do

  devise_for :users, :controllers => { :omniauth_callbacks => 'authentications', :registrations => 'registrations' }
   resources :vendors, :only => [:new, :result_page, :create]
   resources :admin_page, :only => [:vendor_list, :destroy, :update]

   root 'vendors#index' 
   get  'vendors/login'
   get  'vendors/all'
   get  'vendors/new'
   get  'vendors/result'

   get  'admin_page/vendor_list'
   get  'admin_page/destroy'  
   get  'admin_page/update'


   devise_scope :user do
  delete "/users/sign_out" => "devise/sessions#destroy"
end

end