namespace :initialize_table do
  task :search => :environment do 

    drop   = "DROP TABLE IF EXISTS StockSearch;"
    create = "CREATE VIRTUAL TABLE IF NOT EXISTS StockSearch USING fts5(id, stock_name, ticker);"
    insert = "INSERT INTO StockSearch SELECT id, stock_name, ticker FROM Stocks;"

    ActiveRecord::Base.connection.execute(drop)
    ActiveRecord::Base.connection.execute(create)
    ActiveRecord::Base.connection.execute(insert)

  end 
end