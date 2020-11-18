import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { filters } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        {filters().map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

MovieList.defaultProps = { filters: () => { } };

MovieList.propTypes = { filters: PropTypes.func };

export default MovieList;
