class AdminPageController < ApplicationController


	def vendor_list
		@vendor = Vendor.where(:status=>'1')
	end





   private
    def vendor_params
      params.require(:vendor).permit(:status)
    end


end
