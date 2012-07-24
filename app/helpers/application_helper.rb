module ApplicationHelper
  
  def crt_user
    if !session[:user_id].nil?
      User.find(session[:user_id])
    else
      false
    end
  end
  
  def mergelink(merger)
    #url_for(:controller => 'events', :action => 'merge')
    link_to 'merge',{:controller=> 'events', :action => 'merge', :merger_id => merger.id}, :remote => true
  end
  
  def followlink(followee)
    if crt_user # check if current user logged in 
      if !crt_user.followees.include?(followee)
        link_to 'follow', :controller => 'friends', :action => 'follow', :followee_id => followee.id
      elsif crt_user.followees.include?(followee)
        link_to followee.username, :controller => 'users', :action=>'show', :id=> followee.id
      else
        link_to 'login'
      end
    end
  end
  
  def login
    link_to 'login', :controller => 'admin', :action => 'login'
  end

  def logout
    link_to 'logout', :controller => 'admin', :action => 'logout'
  end

  def username
    user = User.find(session[:user_id])
    link_to user.username,  user_path(user)
  end
  
  def register
    link_to 'register', :controller => 'users', :action => 'register'
  end
  
  def authlink
    if !session[:user_id].nil?
      username + " | " + logout
    else
      login + " | " + register
    end
  end
  
  def sidepanel 
    if params[:controller] == 'events' && params[:action] == 'index' && !session[:user_id].nil?
       render 'layouts/sidepanel'
    end
  end
end
