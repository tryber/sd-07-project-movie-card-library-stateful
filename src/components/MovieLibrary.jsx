import React, { Component } from 'react';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import { movieShape } from './MovieCard';
import '../MovieLibrary.css';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(state) {
    console.log(state);
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <SearchBar />
        <MovieList movies={movies} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: propTypes
    .arrayOf(propTypes
      .shape(movieShape).isRequired).isRequired,
};
