import React from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      classes: '',
      selected_filter: '',
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUnMount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    
    if (window.pageYOffset >= sticky) {
      this.setState({classes: "sticky"});
    } else {
      this.setState({classes: ""});
    }
  }

  updateFilter(filter) {
    this.props.updateFilter(filter);
  }

  render() {
    const classes = this.state.classes;

    return (
      <header id="header" className={ classes }>
        <div className="pure-g header-content">
          <div className="pure-u-3-24"></div>
          <div className="pure-u-4-24 header-title"> StockSearcher 2019 v1.0 </div>
          <div className="pure-u-8-24"> <SearchBar value={this.props.search_value} handleSearchSubmit={this.props.handleSearchSubmit} handleSearchChange={this.props.handleSearchChange}/> </div>
          <div className="pure-u-6-24"> <Filters updateFilter={this.updateFilter.bind(this)}/> </div>
          <div className="pure-u-3-24"></div>
        </div>
      </header>
    );
  }
}

export default Header;