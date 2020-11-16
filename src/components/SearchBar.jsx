import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import SearchText from './SearchText.js';
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
        <SearchText
          searchText={searchText}
          onSearchTextChange={onSearchTextChange}
        />
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
