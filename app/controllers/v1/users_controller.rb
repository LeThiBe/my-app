class V1::UsersController < ApplicationController
  skip_before_action :check_user
  
  def index
    users = User.all
    render json: { users: users }
  end

  def create
    user = User.new user_params
    if user.save
      authenticate params[:email], params[:password]
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  private
  def user_params
    params.permit :full_name, :email, :date_of_birth, :gender, :password,
      :password_confirmation, :avatar
  end

  def authenticate email, password
    command = AuthenticateUser.new(email, password).call
    if command
      render json: {
        data: ActiveModel::SerializableResource.new(
          load_user(email),
          each_serializer: UserSerializer
        ),
        access_token: command.result
      }
    else
      render json: { error: command.errors, status: 422 }
    end
  end

  def load_user email
    @user = User.find_by! email: email
  end
end
