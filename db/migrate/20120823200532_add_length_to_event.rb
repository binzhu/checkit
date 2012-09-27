class AddLengthToEvent < ActiveRecord::Migration
  def self.up
    add_column :events, :length, :integer, :default=>60
    remove_column :events, :end
  end
  def self.down
    remove_column :events, :length
    add_column :events, :end, :datetime
  end
end
