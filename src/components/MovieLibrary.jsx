// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.updateSearchText = this.updateSearchText.bind(this);
    this.updateBookMarkedOnly = this.updateBookMarkedOnly.bind(this);
    this.updateSelectedGenre = this.updateSelectedGenre.bind(this);
    this.updateMovieList = this.updateMovieList.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  updateSearchText({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const filteredMovies = value !== '' ? movies.filter((movie) => movie.title.includes(value) || movie.subtitle.includes(value) || movie.storyline.includes(value)) : movies;
    this.setState(() => ({
      searchText: value,
      movies: filteredMovies,
    }));
  }

  updateBookMarkedOnly({ target }) {
    const { checked } = target;
    const { movies } = this.state;
    const filteredMovies = checked ? movies.filter((movie) => movie.bookmarked) : movies;
    this.setState(() => ({
      bookmarkedOnly: checked,
      movies: filteredMovies,
    }));
  }

  updateSelectedGenre({ target }) {
    const { value } = target;
    const { movies } = this.state;
    const filteredMovies = value !== '' ? movies.filter((movie) => movie.genre === value) : movies;
    this.setState(() => ({
      selectedGenre: value,
      movies: filteredMovies,
    }));
  }

  updateMovieList(movieToAdd) {
    this.setState((previousState) => ({ movies: [...previousState.movies, movieToAdd] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.updateSearchText}
          onBookmarkedChange={this.updateBookMarkedOnly}
          onSelectedGenreChange={this.updateSelectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.updateMovieList} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.shape()).isRequired };
