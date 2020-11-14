import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <MovieList />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.array }.isRequired;

export default MovieLibrary;
