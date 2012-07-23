class UsersEventsController < ApplicationController
  # GET /users_events
  # GET /users_events.json
  def index
    @users_events = UsersEvent.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @users_events }
    end
  end

  # GET /users_events/1
  # GET /users_events/1.json
  def show
    @users_event = UsersEvent.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @users_event }
    end
  end

  # GET /users_events/new
  # GET /users_events/new.json
  def new
    @users_event = UsersEvent.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @users_event }
    end
  end

  # GET /users_events/1/edit
  def edit
    @users_event = UsersEvent.find(params[:id])
  end

  # POST /users_events
  # POST /users_events.json
  def create
    @users_event = UsersEvent.new(params[:users_event])

    respond_to do |format|
      if @users_event.save
        format.html { redirect_to @users_event, notice: 'Users event was successfully created.' }
        format.json { render json: @users_event, status: :created, location: @users_event }
      else
        format.html { render action: "new" }
        format.json { render json: @users_event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /users_events/1
  # PUT /users_events/1.json
  def update
    @users_event = UsersEvent.find(params[:id])

    respond_to do |format|
      if @users_event.update_attributes(params[:users_event])
        format.html { redirect_to @users_event, notice: 'Users event was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @users_event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users_events/1
  # DELETE /users_events/1.json
  def destroy
    @users_event = UsersEvent.find(params[:id])
    @users_event.destroy

    respond_to do |format|
      format.html { redirect_to users_events_url }
      format.json { head :no_content }
    end
  end
end
