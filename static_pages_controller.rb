class StaticPagesController < ApplicationController
  def home
  	if logged_in?
  	@micropost = current.user.micropost.build
  	@user = current.user
  end

  def help
  end

  def about
  end
end
