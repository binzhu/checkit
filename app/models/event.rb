class Event < ActiveRecord::Base
  attr_accessible :allday, :color, :details, :end, :location, :name, :recurring, :start
end
