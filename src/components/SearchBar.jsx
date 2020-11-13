// implement SearchBar component here
import React from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="search-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              type="text"
              data-testid="text-input"
              id="search-input"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>
          <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
            <input
              type="checkbox"
              onChange={onBookmarkedChange}
              id="checkbox-input"
              checked={bookmarkedOnly}
              data-testid="checkbox-input"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
