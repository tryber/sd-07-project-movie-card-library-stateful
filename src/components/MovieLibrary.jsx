import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';
// import MovieList from './MovieList';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
