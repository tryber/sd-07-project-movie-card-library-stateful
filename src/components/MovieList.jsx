import React, { Component } from 'react';
import PopTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends Component {
  constructor() {
    super();

    this.state = { movies: [] };
  }
  render() {
    const { movies } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

MovieList.propType = { movies: PopTypes.array.isRequired };

export default MovieList;
