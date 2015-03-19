class AdminPageController < ApplicationController


	def vendor_list
		@vendor = Vendor.where(:status=>'1')
	end


    def destroy
        @vendor = Vendor.find(params[:id])
        @vendor.destroy
        redirect_to admin_page_vendor_list_path
      end



   private
    def vendor_params
      params.require(:vendor).permit(:status)
    end


end
