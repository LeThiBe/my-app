class V1::UsersController < ApplicationController
  skip_before_action :check_user
  
  def index
    users = User.all
    render json: { users: users }
  end
end
