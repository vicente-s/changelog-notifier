class AddHeadlineToFeature < ActiveRecord::Migration[5.2]
  def change
    add_column :features, :headline, :string
  end
end
