class Api::StocksController < ApplicationController

  def index
    render json: Stock.order(stock_name: :ASC)
  end

  def show
    render json: Stock.find(params[:id])
  end

  def search
    value   = params['value']
    filter  = nil
    if params.key?('filter')
      filter = params['filter'] unless params['filter'] == "ALL"
    end

    query   = "SELECT id FROM StockSearch WHERE StockSearch MATCH '#{value}*';"
    results = ActiveRecord::Base.connection.execute(query)

    stocks   = Stock.where(id: results.pluck("id"))
    stocks   = stocks.where(exchange: filter) if filter.present?
    render json: stocks.order(stock_name: :ASC)
  end

  def query_prices
    id = params['id']

    stock    = Stock.find(id)
    response = stock.get_prices
    render json: response
  end
end