// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleBookMarked = this.handleBookMarked.bind(this);
    this.handleSelectGenre = this.handleSelectGenre.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  handleBookMarked({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ bookmarkedOnly: value });
  }

  handleSearchInput({ target }) {
    const { value } = target;

    this.setState({ searchText: value });
  }

  handleSelectGenre({ target }) {
    const { value } = target;

    this.setState({ selectedGenre: value });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <SearchBar
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleBookMarked}
          onSearchTextChange={this.handleSearchInput}
          searchText={this.state.searchText}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleSelectGenre}
        />
        <MovieList
          movies={this.state.movies
            .filter((movie) =>
              movie.genre.includes(this.state.selectedGenre) &&
              (movie.title.includes(this.state.searchText) ||
              movie.subtitle.includes(this.state.searchText) ||
              movie.storyline.includes(this.state.searchText)) &&
              (this.state.bookmarkedOnly ? this.state.bookmarkedOnly === movie.bookmarked : true),
            )}
        />

        <AddMovie
          onClick={() => {}}
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf().isRequired };

export default MovieLibrary;
