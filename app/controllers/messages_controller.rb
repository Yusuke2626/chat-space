class MessagesController < ApplicationController
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream


def index
end







=======
>>>>>>> Stashed changes
  before_action :set_group

  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
  end

  def create
    @message = @group.messages.new(message_params)
    if @message.save
      redirect_to group_messages_path(@group), notice:'メッセージが送信されました'
    else
<<<<<<< Updated upstream
        @messages = @group.messages.includes(:user)
=======
       @messages = @group.messages.includes(:user)
>>>>>>> Stashed changes
      flash.now[:alert] = 'メッセージを入力してください'
      render :index
    end
  end

  private
  def message_params
     params.require(:message).permit(:content,:image).merge(user_id:current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
end
