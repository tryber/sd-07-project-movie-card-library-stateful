import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* import MovieList from './MovieList.jsx' */


class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      /*       bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange */ } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text-input" data-testid="text-input-label">
              Inclui o texto:
            <input
              type="text"
              value={searchText}
              onChange={onSearchTextChange}
              data-testid="text-input"
              id="text-input"
            />
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

/* bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func, */
export default SearchBar;
