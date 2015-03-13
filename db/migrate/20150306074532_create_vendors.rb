class CreateVendors < ActiveRecord::Migration
  def change
    create_table :vendors do |t|
      t.string :helper
      t.string :name
      t.text :address

      t.timestamps null: false
    end
  end
end
