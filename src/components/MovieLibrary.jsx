// implement MovieLibrary component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types'

class MovieLibrary extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div className="movie-list">
        {movies.map((actual) => (
          <MovieCard movie={actual} key={actual.title} />
        ))}
      </div>
    );
  }
}

MovieLibrary.propTypes = {movies: PropTypes.arrayOf(PropTypes.movies)}

export default MovieLibrary;
