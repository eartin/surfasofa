# == Schema Information
#
# Table name: hostings
#
#  id           :bigint           not null, primary key
#  address      :string
#  city_id      :integer
#  description  :text             not null
#  latitude     :float            not null
#  longitude    :float            not null
#  host_id      :integer          not null
#  img_url      :string
#  rating       :float            default(0.0)
#  rating_count :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Hosting < ApplicationRecord
    validates :description, :latitude, :longitude, :host_id, presence: true
    validates :host_id, uniqueness: true

    
end
