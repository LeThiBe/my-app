# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"
  
  skip_before_action :check_user

  def index
    @hello_world_props = { name: "Stranger" }
  end
end
