class AddContactnoToVendors < ActiveRecord::Migration
  def change
    add_column :vendors, :telno, :integer
  end
end
