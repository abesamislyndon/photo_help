Rails.application.routes.draw do

   resources :vendors

   root 'pages#index' 
   get  'pages/login'
   get  'pages/result_page'
   get  'pages/new'

end
