class Workout < ActiveRecord::Base
  has_many :exercises
  validates :title, presence: true,
                    length: { minimum: 3 }
end
