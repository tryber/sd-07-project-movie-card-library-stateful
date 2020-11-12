import React from 'react';

import MovieList from './MovieList';
import movies from '../data';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     test: 'test'
  //   }
  // }
  //functions here if required

  render() {
    return (
      <div className="movie-library">
        <SearchBar />
        <MovieList movies={movies}/>
        {/* <AddMovie /> */}
      </div>
    );
  }

}

export default MovieLibrary;