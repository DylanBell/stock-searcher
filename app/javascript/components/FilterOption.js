import React      from 'react';
import axios      from 'axios';

class FilterOption extends React.Component {

  handleClick = () => {
    this.props.onClick(this.props.filter);
  }

  render() {
    return (
      <a onClick={this.handleClick} className={(this.props.selected_filter === this.props.filter) ? "pure-menu-link filter-option-selected" : "pure-menu-link"}>{this.props.filter}</a>
    );
  }
}

export default FilterOption;