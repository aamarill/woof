class CreateInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :infos do |t|
      t.integer :phone_number

      t.timestamps
    end
  end
end
