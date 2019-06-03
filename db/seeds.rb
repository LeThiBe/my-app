15.times do |index|
  user_params = {
    name: Faker::Name.first_name,
    age: rand(0..100)
  }
  User.create(user_params)
end