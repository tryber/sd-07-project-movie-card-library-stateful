import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {


  render() {
    return (
      <div>
        <SearchBar />
        <MovieList
          movies={this.props.movies}
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
