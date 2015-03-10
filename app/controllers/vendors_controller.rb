class VendorsController < ApplicationController

  def index
  end

  def login
  end


  def all
  	@vendor = Vendor.all
  end

  def new
  	@vendor = Vendor.new	
  end

  def create
  	@vendor = Vendor.new(vendor_params)
  	if @vendor.save
       redirect_to vendors_all_path
  	end		
  	end

 private

    def vendor_params
      params.require(:vendor).permit(:name, :address)
    end

  
end