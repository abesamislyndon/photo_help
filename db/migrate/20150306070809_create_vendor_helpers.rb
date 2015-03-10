class CreateVendorHelpers < ActiveRecord::Migration
  def change
    create_table :vendor_helpers do |t|
      t.string :name
      t.text :address

      t.timestamps null: false
    end
  end
end
