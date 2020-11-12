// implement SearchBar component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {

  render() {
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text" data-testid="text-input-label">Inclui o texto:</label>
        <input
          type="text"
          data-testid="text-input"
          id="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
        <label htmlFor="checkbox" data-testid="checkbox-input-label">Mostrar somente favoritos</label>
        <input
        type="checkbox"
        id="checkbox"
        checked={this.props.bookmarkedOnly}
        onChange={this.props.onBookmarkedChange}
        data-testid="checkbox-input"
        />
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};
