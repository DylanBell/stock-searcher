import React from 'react';
import Stock from './Stock'

class SearchList extends React.Component {


  renderStocks() {
    const stocks = this.props.stocks;
    if (stocks === null || stocks.length == 0 || stocks === undefined) return null;

    return stocks.map(stock => (
      <li key={stock.id}>
        <Stock stock={stock} />
      </li>
    ));
  }

  render() {
    return (
      <ul className="ul-styleless">
        {this.renderStocks()}
      </ul>
    );
  }
}

export default SearchList;
