class EventsController < ApplicationController
  
  def getusers
    if !session[:user_id].nil?
      
    end
  end
  
  def getmeetings
    if !session[:user_id].nil?
      @events = Event.find_all_by_user_id(session[:user_id])
      @events.each{|e| e[:end] = e[:start] + e.length*60}
    end
    respond_to do |format|
      format.json {render json: @events}
    end
  end
  
  def checkit
    if !params[:merger_id].nil?
      user = User.find(params[:merger_id])
      data={
        :user_id => user.id,
        :username => user.username
      }
      respond_to do |format|
        format.json{render json: data}
      end
    end
  end
  

    
  # GET /events
  # GET /events.json
  def index
    @friends = current_user.followees 
    @events = Event.all
    puts "test info"
    puts session[:user_id]
    #search bar condition to search friends
    @event = Event.new

    if !params[:userinput].nil? #&& params[:userinput].length != 0
    @users = User.find(:all, :conditions=> ["fname like ? or lname like ? or fname||' '||lname like ? or email like ?","%"+  params[:userinput] + "%","%"+  params[:userinput] + "%","%"+  params[:userinput] + "%","%"+  params[:userinput] + "%"])
    end
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @events }
    end
  end

  # GET /events/1
  # GET /events/1.json
  def show
    @event = Event.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @event }
    end
  end

  # GET /events/new
  # GET /events/new.json
  def new
    @event = Event.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @event }
    end
  end

  # GET /events/1/edit
  def edit
    @event = Event.find(params[:id])
  end

  # POST /events
  # POST /events.json
  def create
    @event = Event.new(params[:event])

    respond_to do |format|
      if @event.save
        format.html { redirect_to events_path }
        format.json { render json: @event, status: :created, location: @event }
      else
        format.html { render action: "new" }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /events/1
  # PUT /events/1.json
  def update
    @event = Event.find(params[:id])

    respond_to do |format|
      if @event.update_attributes(params[:event])
        format.html { redirect_to @event, notice: 'Event was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event = Event.find(params[:id])
    @event.destroy

    respond_to do |format|
      format.html { redirect_to events_url }
      format.json { head :no_content }
    end
  end
end
