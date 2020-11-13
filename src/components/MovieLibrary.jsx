import React, { Component } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  render() {
    return (
      <form>
        <AddMovie />
        <MovieList />
      </form>
    );
  }
}

export default MovieLibrary;
