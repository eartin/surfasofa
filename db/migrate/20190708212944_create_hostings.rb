class CreateHostings < ActiveRecord::Migration[5.2]
  def change
    create_table :hostings do |t|
      t.string :address
      t.integer :city_id
      t.text :description, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :host_id, null: false
      t.string :img_url
      t.float :rating, default: 0
      t.integer :rating_count 
      t.timestamps
    end
    add_index :hostings, :host_id, unique: true
  end
end
