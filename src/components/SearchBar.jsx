import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import SearchText from './SearchText';
import BookMarkedOnly from './BookMarkedOnly';
import SelectedGenre from './SelectedGenre';

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
