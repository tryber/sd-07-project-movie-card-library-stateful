// implement MovieLibrary component here
import React from 'react';
import MovieList from './MovieList';
import movies from '../data';

class MovieLibrary extends React.Component {
  render() {
    return (
      <MovieList movies={movies} />
    );
  }
}

export default MovieLibrary;
