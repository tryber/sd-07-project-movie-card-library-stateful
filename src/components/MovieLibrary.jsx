// implement MovieLibrary component here

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';


class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value }, () => {
      if (this.state.searchText !== '') {
        const filteredTextMovies = this.props.movies.filter(
          (movie) =>
            movie.title.split(' ').includes(this.state.searchText) ||
            movie.subtitle.split(' ').includes(this.state.searchText) ||
            movie.storyline.split(' ').includes(this.state.searchText)
      );
        this.setState({ movies: filteredTextMovies });
      } else {
        this.setState({ movies: this.props.movies });
      }
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked }, () => {
      if (this.state.bookmarkedOnly) {
        const filteredBookmarkedMovies = this.props.movies.filter(
          (movie) => movie.bookmarked === this.state.bookmarkedOnly
        );
        this.setState({ movies: filteredBookmarkedMovies });
      } else {
        this.setState({ movies: this.props.movies });
      }
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value }, () => {
      if (target.value !== '') {
        const filteredGenreMovies = this.props.movies.filter(
          (movie) => movie.genre === target.value
        );  
        this.setState({ movies: filteredGenreMovies });
      } else {
        this.setState({ movies: this.props.movies });
      }
    });
  }

  onClick(state) {
    this.setState((prevState, _props) => ({
      movies: prevState.movies.concat([state])
    }))
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick}/>
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
