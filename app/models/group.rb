class Group < ApplicationRecord

  has_many :users ,through: :group_users
  has_many :group_users
  has_many :messages

  validates :name, presence: true


<<<<<<< Updated upstream
  def sow_last_message
=======
  def show_last_message
>>>>>>> Stashed changes
    if (last_message = messages.last).present?
      last_message.content? ? last_message.content : '画像が投稿されています'
    else
      'nononon'
    end
  end

end
