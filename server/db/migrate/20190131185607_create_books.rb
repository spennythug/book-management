class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, :null => false
      t.string :ISBN, :null => false
      t.string :notes

      t.timestamps
    end
  end
end
