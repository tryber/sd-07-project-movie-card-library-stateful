import React from 'react';
import propTypes from 'prop-types';
import MovieCard, { movieShape } from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape(movieShape),
  ),
};

MovieList.defaultProps = [];
