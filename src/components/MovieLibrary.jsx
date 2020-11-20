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
    console.log(value);
    this.setState({ [name]: value }, () => { this.filterMovieForGenre(); });
  }

  filterMovieForTitle() {
    // eslint-disable-next-line prefer-destructuring
    const state = this.state;
    const { movies } = state;
    let newArrayMovie = [];
    const { searchText } = state;

    if (searchText !== '') {
      console.log(searchText);
      newArrayMovie = movies.filter((item) => item.title.includes(searchText)
      || item.subtitle.includes(searchText)
      || item.storyline.includes(searchText));
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

  /**
   * filterMovie() {
    const state = this.state;
    let { movies } = state;
    let newArrayMovie = [];

    const { bookmarkedOnly, searchText, selectedGenre } = state;

    if (bookmarkedOnly) {
      console.log("bookmakedOnly");
      newArrayMovie = movies.filter((item) => item.bookmarked === bookmarkedOnly);
    } else {
      newArrayMovie = movies;
    }

    if (searchText !== '') {
      console.log("searchText");
      newArrayMovie = movies.filter((item) => item.title.indexOf(searchText) !== -1);
    }
    if (selectedGenre !== '') {
      console.log("selectedGenre");
      newArrayMovie = movies.filter((item) => item.genre === selectedGenre);
    }
    // Porque so funciona com state.moves?
    state.movies = newArrayMovie;

    console.log(movies);
    this.setState(state);
  }

    filterMovie() {
    const { movies } = this.props;
    // eslint-disable-next-line prefer-destructuring
    const state = this.state;

    state.movies = movies
      .filter((movie) => movie.bookmarked === state.bookmarkedOnly
      || movie.title.indexOf(state.searchText)
      || movie.gere === state.selectedGenre);

    this.setState(state);
  } */

  /** {
    title: 'Ghost In The Shell',
    subtitle: 'Ghost In The Shell',
    storyline: 'A hacker known as the Puppet Master is
    hunted by a female cyborg cop and her partner.
    This film is a revised version of Ghost in the Shell (1995).',
    rating: 5,
    imagePath: 'images/Ghost_In_The_Shell_2_0.jpg',
    bookmarked: false,
    genre: 'comedy',
  }, */

  handleAddMovie(newMovie) {
    // eslint-disable-next-line prefer-destructuring
    const state = this.state;
    const { movies } = state;
    state.movies = [...this.state.movies, newMovie];
    // state.movies.push(newMovie);

    console.log(movies.length);
    console.log(movies);
    this.setState(state);
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
