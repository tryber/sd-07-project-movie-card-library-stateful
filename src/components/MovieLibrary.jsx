import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.moviesSearchText = this.moviesSearchText.bind(this);
    this.moviesFavorites = this.moviesFavorites.bind(this);
    this.selectedGenre = this.selectedGenre.bind(this);
    this.returnMovies = this.returnMovies.bind(this);
    this.createMovie = this.createMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  onBookmarkedChange({ target }) {
    const { name } = target;
    const value = target.checked;

    this.setState({ [name]: value });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;

    this.setState({ selectedGenre: value });
  }

  moviesSearchText(movies) {
    const { searchText } = this.state;

    const text = searchText.toLowerCase();
    return movies.filter((movie) => (
      movie.title.toLowerCase().indexOf(text) !== -1 ||
      movie.subtitle.toLowerCase().indexOf(text) !== -1 ||
      movie.storyline.toLowerCase().indexOf(text) !== -1
    ));
  }

  moviesFavorites(movies) {
    return movies.filter((movie) => movie.bookmarked === true);
  }

  selectedGenre(movies) {
    const { selectedGenre } = this.state;
    return movies.filter((movie) => movie.genre === selectedGenre);
  }

  returnMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    let listMovies = [];
    if (searchText !== '') {
      listMovies = this.moviesSearchText(movies);
    } else {
      listMovies = movies;
    }
    if (bookmarkedOnly === true) listMovies = this.moviesFavorites(listMovies);
    if (selectedGenre !== '') listMovies = this.selectedGenre(listMovies);
    return listMovies;
  }

  createMovie(movie) {
    this.setState((state) => ({ movies: [...state.movies, movie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.returnMovies(movies)} />
        <AddMovie
          onSearchTextChange={this.onSearchTextChange}
          onClick={this.createMovie}
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
