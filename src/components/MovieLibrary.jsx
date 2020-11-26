import React from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import movies from '../data';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default MovieLibrary;
