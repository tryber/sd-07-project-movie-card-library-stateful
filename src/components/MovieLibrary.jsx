// implement MovieLibrary component here
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types'

MovieLibrary.PropTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired
};

export default class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies
    };
  }
  render() {
    return (
      <div>
      <SearchBar
        searchText={this.state.searchText}
        bookmarkedOnly={this.state.bookmarkedOnly}
        selectedGenre={this.state.selectedGenre}
      />
      <MovieList movies={this.state.movies}/>
      </div>

    );
  }
}

