/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import propTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.filterMovieForTitle = this.filterMovieForTitle.bind(this);
    this.handleChangeFavorite = this.handleChangeFavorite.bind(this);
    this.filterMovieForFavorite = this.filterMovieForFavorite.bind(this);
    this.handleChangeGere = this.handleChangeGere.bind(this);
    this.filterMovieForGenre = this.filterMovieForGenre.bind(this);
  }

  // tem como passar uma função como callback aqui?
  handleChangeText({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => { this.filterMovieForTitle(); });
  }

  handleChangeFavorite({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => { this.filterMovieForFavorite(); });
  }

  handleChangeGere({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => { this.filterMovieForGenre(); });
  }

  filterMovieForTitle() {
    // eslint-disable-next-line prefer-destructuring
    const state = this.state;
    const { movies } = state;
    let newArrayMovie = [];
    const { searchText } = state;

    if (searchText !== '') {
      newArrayMovie = movies.filter((item) => item.title.indexOf(searchText) !== -1);
    } else {
      newArrayMovie = this.props.movies;
    }
    // Porque so funciona com state.moves?
    state.movies = newArrayMovie;
    this.setState(state);
  }

  filterMovieForFavorite() {
    // eslint-disable-next-line prefer-destructuring
    const state = this.state;
    const { movies } = state;
    let newArrayMovie = [];
    const { bookmarkedOnly } = state;

    if (bookmarkedOnly) {
      newArrayMovie = movies.filter((item) => item.bookmarked === bookmarkedOnly);
    } else {
      newArrayMovie = this.props.movies;
    }
    // Porque so funciona com state.moves?
    state.movies = newArrayMovie;
    this.setState(state);
  }

  filterMovieForGenre() {
    // eslint-disable-next-line prefer-destructuring
    const state = this.state;
    const { movies } = state;
    let newArrayMovie = [];
    const { selectedGenre } = state;

    if (selectedGenre) {
      newArrayMovie = movies.filter((item) => item.genre === selectedGenre);
    } else {
      newArrayMovie = this.props.movies;
    }
    // Porque so funciona com state.moves?
    state.movies = newArrayMovie;
    this.setState(state);
  }

  handleAddMovie(currentState) {
    // adicionar um filme. Precisa atualizar o estado de AddMovie
    let state = this.setState;
    state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.setState(state);

    console.log(currentState);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleChangeText}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleChangeFavorite}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleChangeGere}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.handleAddMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieLibrary;
