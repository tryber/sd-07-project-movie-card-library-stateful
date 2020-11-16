// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.handleSetState = this.handleSetState.bind(this);

    this.handleFilteredMovies = this.handleFilteredMovies.bind(this);

    this.addMovie = this.addMovie.bind(this);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  addMovie(movie) {
    this.setState((previousState) => ({ movies: [...previousState.movies, movie] }));
  }
  handleFilteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    searchText.toLowerCase();
    let filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText) ||
      movie.subtitle.toLowerCase().includes(searchText) ||
      movie.storyline.toLowerCase().includes(searchText),
    );

    if (bookmarkedOnly) filteredMovies = filteredMovies.filter((movie) => movie.bookmarked === true);

    if (selectedGenre !== '') filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);

    return filteredMovies;
  }

  handleSetState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleSetState}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleSetState}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleSetState}
        />
        <MovieList movies={this.handleFilteredMovies()} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
