class UsersEvent < ActiveRecord::Base
  attr_accessible :confirm_time, :event_id, :user_id
end
