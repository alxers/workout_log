class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.string :title
      t.integer :reps
      t.integer :sets
      t.references :workout, index: true

      t.timestamps
    end
  end
end
