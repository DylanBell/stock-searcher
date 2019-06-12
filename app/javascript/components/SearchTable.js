import React from 'react';
import SearchList from './SearchList';

class SearchTable extends React.Component {

  render() {
    const filter_text = (this.props.selected_filter != "ALL" && this.props.selected_filter.length > 0) ? `(${this.props.selected_filter})` : '';

    return (
      <section>
        <h2 className="table-title"> Stocks {filter_text}</h2>

        <table className="pure-table table-wrap">
          <thead>
            <tr className="pure-g table-head">
              <th className="pure-u-2-5">Ticker</th>
              <th className="pure-u-1-5">Market Cap</th>
              <th className="pure-u-1-5">IPO Year</th>
              <th className="pure-u-1-5">Sector</th>
            </tr>
          </thead>
        </table>
        <SearchList stocks={this.props.stocks} />
      </section>
    );
  }
}

export default SearchTable;
