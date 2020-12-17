import React from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import movies from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie() {
    console.log("Função Add Movie");
  }

  render() {
    return (
      <div>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

export default MovieLibrary;
