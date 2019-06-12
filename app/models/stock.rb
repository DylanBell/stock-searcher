class Stock < ApplicationRecord
  
  def get_prices
    key = self.class.iex_public_key
    raise InvalidIEXKeyError, "Invalid IEX public key [#{key}] defined in secrets" unless key.present?

    conn = iex_conn

    url = "/stable/stock/#{self.ticker}/chart/1m?token=#{key}"
    response = conn.get(url)

    chart_data = []
    response.body.each do |data|
      daily_data = {
        date:  data['date'],
        label: data['label'],
        high:  data['high'],
        low:   data['low'],
        open:  data['open'],
        close: data['close']
      }
      chart_data << daily_data
    end

    return chart_data
  end

  def iex_conn
    conn = Faraday.new(:url => 'https://cloud.iexapis.com') do |conn|
      conn.headers['Content-Type'] = 'application/json'
      conn.response :json, :content_type => /\bjson$/
      conn.adapter Faraday.default_adapter
    end
    return conn
  end

  def self.iex_public_key
    Rails.application.credentials.dig(:iex_cloud, :public_key) || ENV["PUBLIC_KEY"]
  end

end
