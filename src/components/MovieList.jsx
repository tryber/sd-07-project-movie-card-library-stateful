import React from 'react';
import MovieCard from './MovieCard';
import Proptypes from 'prop-types';


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

MovieList.propTypes = { movies: Proptypes.array.isRequired };

export default MovieList;
