import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Forms from './Forms';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <Forms searchText={searchText} onSearchTextChange={onSearchTextChange} />
      </div>);
  }
}

SearchBar.PropTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
