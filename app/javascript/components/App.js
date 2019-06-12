import React         from 'react';
import SearchWrapper from './SearchWrapper';
import Header        from './Header';
import axios         from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      stocks: [],
      search_value: '',
      selected_filter: '',
    }


    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  query_search() {
    axios
      .get('/api/stocks/search', 
        {
          params: {
            value:  this.state.search_value,
            filter: this.state.selected_filter
          }
        })
      .then(response => 
        this.setState({stocks: response.data})
      )
      .catch((error) => {
        console.log(error);
      });
  }

  handleSearchChange(event) {
    this.setState({search_value: event.target.value}, () => {
      if (this.state.search_value.length >= 2)
        this.query_search();
    });
  }

  handleSearchSubmit(event) {
    this.query_search();

    event.preventDefault();
  }

  updateFilter(filter) {
    this.setState({selected_filter: filter}, () => {
      this.query_search();
    });
  }

  render() {
    return (
      <div>
        <Header search_value={this.state.search_value} updateFilter={this.updateFilter.bind(this)} handleSearchSubmit={this.handleSearchSubmit.bind(this)} handleSearchChange={this.handleSearchChange.bind(this)}/>
        <SearchWrapper stocks={this.state.stocks} selected_filter={this.state.selected_filter}/>
      </div>
    );
  }

}

export default App;