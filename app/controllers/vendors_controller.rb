class VendorsController < ApplicationController

  def index
    if params[:search]
      @vendor = Vendor.search(params[:search]).order("created_at DESC")
    else
      @vendor = Vendor.order("created_at DESC")
    end
  end

  
  def result
      @vendor = Vendor.search(params[:search]).order("created_at DESC")
  end


  def all
  	@vendor = Vendor.where(:status=>'1')
  end
 
  def new
  	@vendor = Vendor.new	
  end

  
  def create
  	@vendor = Vendor.new(vendor_params)
   	if @vendor.save
       redirect_to vendors_all_path 
    else 
    render 'new'    
  	end		
  end

  
    def destroy
        @vendor = Vendor.find(params[:id])
        @vendor.destroy
        redirect admin_page_approved_path
      end


  def edit
    
  end


  private
    def vendor_params
      params.require(:vendor).permit(:name, :address, :image, :telno, :type, :status,:id)
    end

  
end