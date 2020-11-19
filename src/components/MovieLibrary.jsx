// implement MovieLibrary component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {

  constructor(props) {
    super(props);

    this.getHandler = this.getHandler.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.bookmarked = this.bookmarked.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.selectedGenre = this.selectedGenre.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  getHandler({ target }) {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }));
  }

  addMovie(newMovie) {
    this.setState((previousState) => {
      const newMovieList = [...previousState.movies, newMovie];
      return ({ movies: newMovieList });
    });
  }

  bookmarked({ target }) {
    const { checked } = target;
    let value;
    if (checked) {
      value = true;
    } else {
      value = false;
    }
    this.setState(() => ({ bookmarkedOnly: value }));
  }

  selectedGenre({ target }) {
    const value = target.options[target.selectedIndex].value;
    this.setState(() => ({ selectedGenre: value }));
  }

  filterMovies(searchText, bookmarkedOnly, selectedGenre, movies) {
    let newMovieList = movies;

    if (bookmarkedOnly) {
      newMovieList = newMovieList
      .filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      newMovieList = newMovieList
      .filter((movie) => movie.genre === selectedGenre);
    }

    if (searchText !== '') {
      newMovieList = newMovieList
        .filter((movie) =>
        movie.title.indexOf(searchText) !== -1 ||
        movie.subtitle.indexOf(searchText) !== -1 ||
        movie.storyline.indexOf(searchText) !== -1);
    }

    return newMovieList;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { movies } = this.state;

    if (searchText !== '' || bookmarkedOnly !== false || selectedGenre !== '') {
      movies = this
        .filterMovies(
          searchText,
          bookmarkedOnly,
          selectedGenre,
          movies,
        );
    }

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.getHandler}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.bookmarked}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.selectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
