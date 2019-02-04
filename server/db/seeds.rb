# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.delete_all

Book.create!([
  {title: "The Detective and the Destroying Crow", notes: "none", ISBN: "978-7-8969-3030-7"},
  {title: "Graveyardless", notes: "none", ISBN: "978-0-9890-8424-6"},
  {title: "Frankenstein, the Jungle Rabbit", notes: "none", ISBN: "978-8-6748-1978-4"},
  {title: "The Tragic Blade Across the Sky", notes: "none", ISBN: "978-5-9239-0554-0"},
  {title: "Guardian's Unknown Us", notes: "none", ISBN: "978-6-5810-2840-4"},
  {title: "Will and a World", notes: "none", ISBN: "978-1-8406-8457-5"},
  {title: "The Smith Beyond the Plant", notes: "none", ISBN: "978-6-9398-9430-9"},
  {title: "The Southern People", notes: "none", ISBN: "978-5-2280-7976-2"},
  {title: "The Jailer Is Urban", notes: "none", ISBN: "978-7-6238-2700-9"},
  {title: "The ZeppelinPeople", notes: "none", ISBN: "978-3-2958-4456-6"},
])
