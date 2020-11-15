import React from 'react';
import '../App.css';
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

export default SearchBar;
