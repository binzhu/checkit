class CreateUsersEvents < ActiveRecord::Migration
  def change
    create_table :users_events do |t|
      t.integer :user_id
      t.integer :event_id
      t.datetime :confirm_time

      t.timestamps
    end
  end
end
