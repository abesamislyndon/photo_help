Rails.application.routes.draw do

   root 'pages#index' 
   get 'pages/login'
   get 'pages/result_page'

end
