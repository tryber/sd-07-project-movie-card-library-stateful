import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import BookMarkedOnly from './BookMarkedOnly.js';
import SelectedGenre from './SelectedGenre.js';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form className="alinhar" data-testid="search-bar-form">
        <label htmlFor="text" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="text"
            name="searchText"
            data-testid="text-input"
            value={searchText}
            type="text"
            onChange={onSearchTextChange}
          />
        </label>
        {/* <SearchText
          searchText={searchText}
          onSearchTextChange={onSearchTextChange}
        /> */}
        <BookMarkedOnly
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={onBookmarkedChange}
        />
        <SelectedGenre
          selectedGenre={selectedGenre}
          onSelectedGenreChange={onSelectedGenreChange}
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
