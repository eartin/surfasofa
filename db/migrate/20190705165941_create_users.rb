class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :email, null: false
      t.text :about, default: ''
      t.integer :age
      t.string :sex
      t.string :first_name, default: ''
      t.string :last_name, default: ''
      t.boolean :hosting, default: false
      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true 
  end
end
