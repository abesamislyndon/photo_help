class Vendor < ActiveRecord::Base

  has_attached_file :image, styles: { large: "600x600>", medium: "310x350>",  thumb:"150x150#" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
