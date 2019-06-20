class AuthorizeApiRequest
  prepend SimpleCommand
  attr_reader :headers

  def initialize headers = {}
    @headers = headers
  end

  def call
    user
  end

  private
  def user
    return nil unless decoded_auth_token
    @user ||= User.find(decoded_auth_token[:user_id])
  end

  def decoded_auth_token
    @decoded_auth_token ||= JsonWebToken.decode http_auth_header
  rescue StandardError
    nil
  end

  def http_auth_header
    headers["Authorization"]&.split(" ")&.last
  end
end
