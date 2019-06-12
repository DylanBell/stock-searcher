class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :ticker
      t.string :stock_name
      t.string :exchange
      t.string :industry
      t.string :market_cap
      t.string :ipo_year

      t.timestamps
    end
  end
end
