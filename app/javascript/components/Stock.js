import React from 'react';
import axios from 'axios';
import Chart from './Chart';


class Stock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stock:      props.stock,
      selected:   false,
      chart_data: null,
    };

    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection() {
    this.setState({selected: !this.state.selected}, () => {
      if (this.state.selected == true) {
        var id = this.state.stock.id;
        axios.get(`/api/stocks/${id}/query_prices`)
        .then(response =>
          this.setState({chart_data: response.data})
        )
        .catch((error) => {
          console.log(error);
        });
      }
    });
  }

  format_chart_data(data) {
    var formatted = [];
    var color     = "";

    data.forEach(function(datum) {
      if (datum['close'] >= datum['open']) {
        color = "#26a69a"
      } else {
        color = "#ef5350"
      }
      var entry = { x: new Date(datum['date']), y: [datum['open'], datum['high'], datum['low'], datum['close']], color: color};
      formatted.push(entry);
    });

    return formatted
  }

  render() {
    const stock      = this.state.stock;
    const selected   = this.state.selected;
    const chart_data = this.state.chart_data;
    var   options    = {}

    if (selected && chart_data != null) {
      const data     = this.format_chart_data(chart_data);
      options  = {
        theme: "dark1",
        animationEnabled: true,
        title: {
          text: `[${stock.ticker}] ${stock.stock_name}`
        },
        axisX: {
          valueFormatString: "MMM D"
        },
        axisY: {
          includeZero: false,
          prefix: "$",
          title: "Price (USD)"
        },
        data: [{
          type: "candlestick",
          yValueFormatString: "$###0.00",
          xValueFormatString: "MMM D",
          dataPoints: data,
          risingColor: "#26a69a",
          fallingColor: "#ef5350",
        }]
      };
    }

    return (
      <div className="stock-body pure-g" onClick={this.handleSelection}>
        <div className="stock-description pure-u-2-5"> 
          <p className="stock-description-ticker"> {stock.ticker} </p>
          <p className="stock-description-full">{stock.stock_name} </p>
        </div>
        <div className="stock-market-cap pure-u-1-5"> {stock.market_cap} </div>
        <div className="stock-ipo pure-u-1-5"> {stock.ipo_year} </div>
        <div className="stock-industry pure-u-1-5"> {stock.industry} </div>

        {selected == true && 
          <Chart options= {options} />
        }

      </div>

    );
  }
}

export default Stock;