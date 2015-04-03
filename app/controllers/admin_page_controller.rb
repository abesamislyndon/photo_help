class AdminPageController < ApplicationController


	def vendor_list
		@vendor = Vendor.where(:status=>'1')
    end
	
       
   def destroy
        @vendor = Vendor.find(params[:id])
        @vendor.destroy
        redirect_to admin_page_vendor_list_path
   end

    def update
    	 @vendor = Vendor.find(params[:id])
    	 if @vendor.update_attribute(:status, "2")
    	 	redirect_to admin_page_vendor_list_path 	
    	 end	
    end

   private
    def vendor_params
      params.require(:vendor).permit(:status, :id)
    end


end
