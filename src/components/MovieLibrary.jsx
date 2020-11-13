import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange="function"
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange="function"
          selectedGenre={selectedGenre}
          onSelectedGenreChange="function"
        />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default MovieLibrary;
