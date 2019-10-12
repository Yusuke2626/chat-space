FactoryBot.define do

  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/user/yusuke/downloads/584115187.232866 2.jpg")}
    user
    group
  end
end
