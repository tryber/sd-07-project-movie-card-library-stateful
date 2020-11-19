// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
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

        <label data-testid="checkbox-input-label">
        Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
      </form>
    );
  }
}
SearchBar.propTypes = {
  searchText: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
