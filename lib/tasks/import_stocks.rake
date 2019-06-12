require 'csv'
namespace :import_stocks do
  task :import_all => :environment do 
    Rake::Task['import_stocks:import_nasdaq'].invoke
    Rake::Task['import_stocks:import_nyse'].invoke
    Rake::Task['import_stocks:import_amex'].invoke
  end 

  task :import_nasdaq => :environment do 
    CSV.foreach('./db/data/companylist_nasdaq.csv', :headers => true) do |row|
      puts "[#{row["Symbol"]}] #{row["Name"]} created"

      Stock.create(
        exchange:   "NASDAQ",
        ticker:     row["Symbol"],
        stock_name: row["Name"],
        industry:   row["industry"],
        market_cap: row["MarketCap"],
        ipo_year:   row["IPOyear"]
      )
    end
  end

  task :import_nyse => :environment do
    CSV.foreach('./db/data/companylist_nyse.csv', :headers => true) do |row|
      puts "[#{row["Symbol"]}] #{row["Name"]} created"

      Stock.create(
        exchange:   "NYSE",
        ticker:     row["Symbol"],
        stock_name: row["Name"],
        industry:   row["industry"],
        market_cap: row["MarketCap"],
        ipo_year:   row["IPOyear"]
      )
    end
  end

  task :import_amex => :environment do
    CSV.foreach('./db/data/companylist_amex.csv', :headers => true) do |row|
      puts "[#{row["Symbol"]}] #{row["Name"]} created"

      Stock.create(
        exchange:   "AMEX",
        ticker:     row["Symbol"],
        stock_name: row["Name"],
        industry:   row["industry"],
        market_cap: row["MarketCap"],
        ipo_year:   row["IPOyear"]
      )
    end
  end
end