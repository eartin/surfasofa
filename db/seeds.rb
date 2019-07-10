# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Hosting.delete_all
User.delete_all

Hosting.create!(
  description: 'alamo square, many dogs',
  latitude: 37.775769,
  longitude: -122.434960,
  host_id: 1
)

Hosting.create!(
  description: 'UN plaza, food truck access',
  latitude: 37.779760,
  longitude: -122.413820,
  host_id: 2
)

Hosting.create!(
  description: 'Ocean Beach, gnarly breh',
  latitude: 37.769996,
  longitude: -122.511281,
  host_id: 3
)

User.create!(
  username: 'DemoUser',
  password: 'password',
  email: 'DemoUser@demo.org',
)
