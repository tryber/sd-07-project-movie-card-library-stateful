
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';


class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.addMovie = this.addMovie.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.updateShowMovies = this.updateShowMovies.bind(this);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      myMovies: movies,
      showMovies: movies,
    };
  }

  // referencia Rafael Guimarães
  filterAllConditions(movie, searchText, bookmarkedOnly, selectedGenre) {
    return (movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText))
        && (bookmarkedOnly ? movie.bookmarked === true : true)
        && (selectedGenre ? movie.genre === selectedGenre : true);
  }

  // referencia Rafael Guimarães
  updateShowMovies() {
    const { myMovies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const showMovies = myMovies
      .filter((movie) => this
        .filterAllConditions(movie, searchText, bookmarkedOnly, selectedGenre));
    this.setState(
      (beforeState) => ({
        ...beforeState,
        showMovies,
      }),
    );
  }

  // referencia Rafael Guimarães
  handleSearch({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      (beforeState) => ({
        ...beforeState,
        [name]: value,
      }),
      this.updateShowMovies,
    );
    return value;
  }

  // referencia Rafael Guimarães
  addMovie(newMovie) {
    this.setState(
      (beforeState) => ({
        ...beforeState,
        myMovies: beforeState.myMovies.concat(newMovie),
      }),
      this.updateShowMovies,
    );
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      showMovies,
    } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleSearch}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleSearch}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleSearch}
        />
        <MovieList movies={showMovies} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  selectedGenre: PropTypes.string,
  movies: PropTypes.array,
}.isRequired;

export default MovieLibrary;
