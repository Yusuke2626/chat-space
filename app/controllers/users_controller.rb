class UsersController < ApplicationController

  def edit
  end

  def update
    if  current_user.update(user_params)
       redirect_to root_path
    else
        render :edit
    end
<<<<<<< Updated upstream
=======
  end
>>>>>>> Stashed changes

   private
  def user_params
    params.require(:user).permit(:name,:email)
  end



end
