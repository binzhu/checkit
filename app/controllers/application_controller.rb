class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :authenticate, :except => 'login'
  
  def authenticate
      unless User.find_by_id(session[:user_id])
        flash[:notice] = "Please log in."
        redirect_to :controller => 'admin', :action => 'login'
      end
  end
  
end
