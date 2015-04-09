class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :authenticate_user!, :except => [:index, :all, :result]

  def after_sign_in_path_for(resource)
   vendors_new_path
  end



def after_sign_up_path_for(resource)
  credit_path 
  return request.env['omniauth.origin'] || session[:return_to] 
end 

def after_sign_in_path_for(resource)
  return request.env['omniauth.origin'] || session[:return_to]
end
end
