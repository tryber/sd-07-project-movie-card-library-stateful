// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  handleSearchInput({ target }) {
    const { value } = target;

    if (value.length === 0) {
      this.setState({ searchText: value, movies: this.props.movies });
      console.log(this.props.movies);
    }

    const newArray = this.state.movies.filter((movie) => movie.title.includes(value) ||
      movie.subtitle.includes(value) || movie.storyline.includes(value),
    );

    this.setState({
      searchText: value,
      movies: newArray,
    });
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
          onSelectedGenreChange={() => {}}
        />
        <MovieList
          movies={this.state.movies}
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf().isRequired };

export default MovieLibrary;
