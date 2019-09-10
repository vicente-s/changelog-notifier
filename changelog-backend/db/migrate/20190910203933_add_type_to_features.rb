class AddTypeToFeatures < ActiveRecord::Migration[5.2]
  def change
    add_column :features, :type, :string
  end
end
