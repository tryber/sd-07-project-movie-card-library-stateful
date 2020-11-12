// implement MovieLibrary component here
import React from 'react';
import MovieList from './MovieList';
import movies from '../data';
import Addmovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <MovieList movies={movies} />
        <Addmovie />
      </div>
    );
  }
}

export default MovieLibrary;
