import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
          searchText=""
          onSearchTextChange=""
          bookmarkedOnly={false}
          onBookmarkedChange="function"
          selectedGenre=""
          onSelectedGenreChange="function"
        />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default MovieLibrary;
