class RenameNameToTitle < ActiveRecord::Migration
  def change
    change_table :workouts do |t|
      t.rename :name, :title
    end
  end
end
