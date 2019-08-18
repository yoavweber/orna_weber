json.extract! booking, :id, :name, :email, :date, :text, :created_at, :updated_at
json.url booking_url(booking, format: :json)
