import React        from 'react';
import FilterOption from './FilterOption'

class Filters extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filters: ["ALL", "NASDAQ", "NYSE", "AMEX"],
      selected: "ALL",
    }

  }

  handleSelect(filter) {
    this.setState({selected: filter});
    this.props.updateFilter(filter);
  }

  renderFilters() {
    const filters  = this.state.filters;
    const selected = this.state.selected;

    return filters.map(filter => (
      <li key={filter} className="pure-menu-item filter-option">
        <FilterOption filter={filter} onClick={this.handleSelect.bind(this)} selected_filter={selected}/>
      </li>
    ));
  }

  render() {
    return (
      <div className="pure-menu pure-menu-horizontal">
        <ul className="pure-menu-list">
          {this.renderFilters()}
        </ul>
      </div>
    );
  }
}

export default Filters;