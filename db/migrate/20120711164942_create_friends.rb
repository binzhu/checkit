class CreateFriends < ActiveRecord::Migration
  def change
    create_table :friends do |t|
      t.integer :followee_id
      t.integer :follower_id

      t.timestamps
    end
  end
end
