# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120823200532) do

  create_table "events", :force => true do |t|
    t.string   "name"
    t.datetime "start"
    t.integer  "allday",     :default => 0
    t.integer  "recurring",  :default => 0
    t.string   "location"
    t.text     "details"
    t.string   "color"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
    t.integer  "length",     :default => 60
  end

  create_table "friends", :force => true do |t|
    t.integer  "followee_id"
    t.integer  "follower_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", :force => true do |t|
    t.string   "username"
    t.string   "pwd"
    t.string   "email"
    t.string   "fname"
    t.string   "lname"
    t.string   "fb_id"
    t.string   "reputation"
    t.string   "status"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "seed"
  end

  create_table "users_events", :force => true do |t|
    t.integer  "user_id"
    t.integer  "event_id"
    t.datetime "confirm_time"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
