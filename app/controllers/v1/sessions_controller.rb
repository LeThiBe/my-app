class V1::SessionsController < ApplicationController
  skip_before_action :check_user, only: :login
  
  def login
    authenticate params[:email], params[:password]
  end

  private
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
