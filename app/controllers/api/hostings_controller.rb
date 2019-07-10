class Api::HostingsController < ApplicationController
    
    def create
        @hosting = Hosting.create!(hosting_params)
        render :show
    end

    def index
        @hostings = bounds ? Hosting.in_bounds(bounds) : Hosting.all

    end

    private

    def hosting_params
        params.require(:hosting).permit(
            :description,
            :latitude,
            :longitude,
            :host_id
        )
    end

    def bounds
        params[:bounds]
    end

end


