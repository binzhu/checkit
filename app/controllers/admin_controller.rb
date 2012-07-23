class AdminController < ApplicationController
  def login
    if request.post?
      user = User.authenticate(params[:username], params[:password])
      if user
        session[:user_id] = user.id
        session[:username] = user.username
        redirect_to(:controller=> "events", :action => "index")
      else
        flash.now[:notice] = "Invalid user/password combination"
      end
    end
  end

  def logout
    session[:user_id] = nil 
    flash[:notice] = "Logged Out"
    redirect_to(:action => "login")
  end
end
