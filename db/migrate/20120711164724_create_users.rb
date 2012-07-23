class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :pwd
      t.string :email
      t.string :fname
      t.string :lname
      t.string :fb_id
      t.string :reputation
      t.string :status

      t.timestamps
    end
  end
end
