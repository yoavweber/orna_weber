class Booking < ApplicationRecord
    validates :date, :name, presence: true
    validate  :valid_date
        
    def valid_date
        year_from_now = Date.today + 365
        if date < Date.today || date > year_from_now
            errors.add(:date, "can't be in the past")
        end 
    end
end
