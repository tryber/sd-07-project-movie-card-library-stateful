import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, bookmarkedOnly } = this.props;
    const { onSearchTextChange, onBookmarkedChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="searchInput" data-testid="text-input-label">Inclui o texto:</label>
          <input
            id="searchInput"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
          />
          <label
            htmlFor="checkboxInput"
            data-testid="checkbox-input-label"
          >
            Mostrar somente favoritos
          </label>
          <input
            type="checkbox"
            id="checkboxInput"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />
        </form>
      </div>);
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
