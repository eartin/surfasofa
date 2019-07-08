# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string           not null
#  about           :text             default("")
#  age             :integer
#  sex             :string
#  first_name      :string           default("")
#  last_name       :string           default("")
#  hosting         :boolean          default(FALSE)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :username, :password_digest, :session_token, :email, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password

    # has_many :bookings
    # has_many :reviews
    # has_many :hostings

    after_initialize :ensure_session_token

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def valid_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.valid_password?(password)
            return user 
        else
            return nil 
        end
    end

end

