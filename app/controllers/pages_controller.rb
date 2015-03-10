class PagesController < ApplicationController
  def index
  end

  def login
  end

  def result_page
  	@vendor = Vendor.all
  end

  def new
  	@vendor = Vendor.new	
  end

  def create
  	@vendor = Vendor.new(user_params)
  	if @vendor.save
  	end		
  	end




 private

    def user_params
      params.require(:vendor).permit(:name, :address)
    end

  
end