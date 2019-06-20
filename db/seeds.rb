20.times do |n|
  name  = Faker::Name.name
  email = "le.thi.be-#{n+1}@sun-asterisk.com"
  User.create!(email: email,
    name: Faker::Name.first_name,
    age: rand(0..100),
    password: "123123",
    password_confirmation: "123123")
end