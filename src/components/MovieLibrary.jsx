// código do readm
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import PropTypes from 'prop-types';


class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    }
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {movies: PropTypes.object};

export default MovieLibrary;
