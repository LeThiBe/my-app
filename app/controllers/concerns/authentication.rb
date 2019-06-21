module Authentication
  extend ActiveSupport::Concern

  included do
    def current_user
      @current_user ||= AuthorizeApiRequest.call(request.headers).result
    end

    def check_user
      raise ExceptionHandler::AuthenticationError unless current_user
    end
  end
end
