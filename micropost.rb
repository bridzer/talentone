class Micropost < ActiveRecord::Base
  belongs_to     :user_id  
  
  mount_uploader :video, VideoUploader
  mount_uploader :picture, PictureUploader
  default_scope -> {order(created_at: :DESC)}
end
