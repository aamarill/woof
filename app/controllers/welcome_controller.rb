class WelcomeController < ApplicationController
  def index
  end

  def new
    @info = Info.new
  end

  def edit
  end

  def create
    @info = Info.new
    redirect_to new_welcome_path
  end

  def show
  end

  def destroy
  end
end
