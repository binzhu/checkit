class Event < ActiveRecord::Base
  attr_accessible :allday, :color, :details, :end, :location, :name, :recurring, :start, :user_id
  
  belongs_to :user
end
