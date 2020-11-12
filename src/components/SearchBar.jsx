import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="search-text" data-testid="text-input-label">
            Inclui o texto:
            <input
              name="search-text"
              data-testid="text-input"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>
          <label htmlFor="bookmarked-change" data-testid="checkbox-input-label">
            <input
              type="checkbox"
              name="bookmarked-change"
              data-testid="checkbox-input"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
              data-key="bookmarkedOnly"
            />
          Mostrar somente favoritos
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
//   selectedGenre: PropTypes.string.isRequired,
//   onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
