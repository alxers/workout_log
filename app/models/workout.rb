class Workout < ActiveRecord::Base
  has_many :exercises, dependent: :destroy
  validates :title, presence: true,
                    length: { minimum: 3 }
end
