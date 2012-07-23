class User < ActiveRecord::Base
  attr_accessible :email, :fb_id, :fname, :lname, :pwd, :reputation, :status, :username, :password, :password_confirmation
  validates_uniqueness_of :username, :email
  validates_confirmation_of :password
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create
  
  
  # one direction friendship
  def followers
    Friend.find_all_by_followee_id(id).map{ |fr|  User.find(fr.follower_id)}
  end
  
  def followees
    Friend.find_all_by_follower_id(id).map{ |fr|  User.find(fr.followee_id)}
  end
  
  
  
  # authentication and password encryption
  def self.authenticate(username, pswd)
    user = self.find_by_username(username)
    if user
      if user.pwd != encrypted_password(pswd, user.seed)
        
        user = nil
      end
    end
    user
  end

  def password
    @password
  end

  def password=(pswd)
    @password = pswd
    return if pswd.blank?
    create_new_seed
    self.pwd = User.encrypted_password(self.password, self.seed)
  end

  private

  def password_non_blank
    errors.add(:password, "Missing password") if pwd.blank?
  end

  def self.encrypted_password(pswd, seed)
    string_to_hash = pswd + "hoge" + seed
    Digest::SHA1.hexdigest(string_to_hash)
  end

  def create_new_seed
    self.seed = self.object_id.to_s + rand.to_s
  end
  #authentication end
  

  
  
end
