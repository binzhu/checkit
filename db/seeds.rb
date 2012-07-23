# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
i = 12345
User.create(
  :username =>  i.to_s,
  :pwd =>  i.to_s,
  :fname => "Frank",
  :lname => "Dylon"
)
i+=1
User.create(
  :username =>  i.to_s,
  :pwd =>  i.to_s,
  :fname => "Bobie",
  :lname => "Fakel"
)
i+=1
User.create(
  :username =>  i.to_s,
  :pwd =>  i.to_s,
  :fname => "Andrela",
  :lname => "Dona"
)
i+=1
User.create(
  :username =>  i.to_s,
  :pwd =>  i.to_s,
  :fname => "Frachy",
  :lname => "Newdy"
)
i+=1
User.create(
  :username =>  i.to_s,
  :pwd =>  i.to_s,
  :fname => "Blake",
  :lname => "Brown"
)
i+=1
User.create(
  :username =>  i.to_s,
  :pwd =>  i.to_s,
  :fname => "Langi",
  :lname => "Youki"
)