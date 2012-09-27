class Event < ActiveRecord::Base
  attr_accessible :allday, :color, :details, :end, :location, :name, :recurring, :start, :user_id, :length
  
  belongs_to :user
  
  def end
    start + length*60
  end
  
  def end=(endtime)
    @endtime=Date.new
    @endtime ||= endtime
  end
end
