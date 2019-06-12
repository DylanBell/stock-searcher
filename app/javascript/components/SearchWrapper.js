import React       from 'react';
import axios       from 'axios';
import Header      from './Header';
import SearchBar   from './SearchBar';
import SearchTable from './SearchTable';

class SearchWrapper extends React.Component {


  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-3-24"></div>
        <div className="pure-u-18-24" id="content">
          <SearchTable stocks={this.props.stocks} selected_filter={this.props.selected_filter} />
        </div>
        <div className="pure-u-3-24"></div>
      </div>
    );
  }
}

export default SearchWrapper;