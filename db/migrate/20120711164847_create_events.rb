class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :start
      t.datetime :end
      t.integer :allday, :default => 0
      t.integer :recurring, :default => 0
      t.string :location
      t.text :details
      t.string :color

      t.timestamps
    end
  end
end
