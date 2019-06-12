import React      from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};
  }


  render() {
    return (
      <form className="form-input pure-form" onSubmit={this.props.handleSearchSubmit}>
        <input className="pure-input-2-3" type="text" value={this.props.value} onChange={this.props.handleSearchChange} />
        <input className="pure-button pure-button-primary form-button" type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBar;