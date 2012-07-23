class Friend < ActiveRecord::Base
  attr_accessible :followee_id, :follower_id
  has_and_belongs_to_many :users
    
end
