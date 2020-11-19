// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="for" data-testid="text-input-label">
        Inclui o texto:
          <input
            data-testid="text-input"
            id="for"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label >
      </form>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired
}

export default SearchBar;
