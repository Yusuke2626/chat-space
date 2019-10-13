FactoryBot.define do

  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/584115187.232866 3.jpg")}
    user
    group
  end
end
