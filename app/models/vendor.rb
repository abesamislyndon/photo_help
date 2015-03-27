class Vendor < ActiveRecord::Base
  self.inheritance_column = nil
  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

   def self.search(query)
    # where(:title, query) -> This would return an exact match of the query
    
    where("type  like ?", "%#{query}%") 

  end
end
