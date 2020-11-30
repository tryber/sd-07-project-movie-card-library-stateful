import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  searchText() {}
  onSearchTextChange() {}
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={this.searchText} onSearchTextChange={this.onSearchTextChange} />
        <MovieList movies={this.props.movies} />
        {/* <AddMovie /> */}
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
