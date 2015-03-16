class AddStatusToVendors < ActiveRecord::Migration
  def change
    add_column :vendors, :status, :integer
  end
end
