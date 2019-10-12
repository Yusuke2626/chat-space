require 'rails_helper'


  RSpec.describe Message,type: :model do
    describe '#create' do
      context 'can save' do

        it "is valid with content is nul" do
          expect(build(:message,image:nil)).to be_valid
      end

    end
  end
end
