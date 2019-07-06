class Api::SessionsController < ApplicationController
    def new
    end

    def create
        user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if user
            login(user)
        else
            flash.now[:errors] = ["Invalid username or password!"]
            render :new
        end
    end

    def destroy
        if current_user
            logout
            render 'api/users/show'
        else
          render json: ["you must be logged in to do that!"], status: 404
        end
    end
end