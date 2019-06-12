# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_08_205540) do

# Could not dump table "StockSearch" because of following StandardError
#   Unknown type '' for column 'id'

# Could not dump table "StockSearch_config" because of following StandardError
#   Unknown type '' for column 'k'

# Could not dump table "StockSearch_content" because of following StandardError
#   Unknown type '' for column 'c0'

  create_table "StockSearch_data", force: :cascade do |t|
    t.binary "block"
  end

  create_table "StockSearch_docsize", force: :cascade do |t|
    t.binary "sz"
  end

# Could not dump table "StockSearch_idx" because of following StandardError
#   Unknown type '' for column 'segid'

  create_table "stocks", force: :cascade do |t|
    t.string "ticker"
    t.string "stock_name"
    t.string "exchange"
    t.string "industry"
    t.string "market_cap"
    t.string "ipo_year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
