import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = props;

    this.state = { movies };
  }

  render() {
    return (
      <div data-testid="movie-list" className="movie-list">
        {this.state.movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

MovieCard.propTypes = { movies: PropTypes.arrayOf.isRequired };


export default MovieList;
