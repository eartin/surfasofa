@hostings.each do |hosting|
    json.set! hosting.id do
        json.extract! hosting, :id, :description, :longitude, :latitude
    end
end

