class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  include ExceptionHandler
  include Authentication

  before_action :check_user
end
