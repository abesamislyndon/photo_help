class PagesController < ApplicationController
  def index
  end

  def login
  end

  def result_page
  	 @user = Vendor.first
  end
  
end
