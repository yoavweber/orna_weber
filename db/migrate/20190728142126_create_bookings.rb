class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.string :name
      t.string :email
      t.date :date
      t.string :text

      t.timestamps
    end
  end
end
