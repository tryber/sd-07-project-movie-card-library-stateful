import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const movies = this.props.movies;

    this.computedInputsSearchBar = this.computedInputsSearchBar.bind(this);
    this.addComputedMovie = this.addComputedMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  addComputedMovie(result) {
    this.setState({movies: [...this.state.movies, result] });
  }

  isBookmarkeds(movie) {
    const moviesFiltered = movies.filter((movie) => {
      if (this.state.bookmarkedOnly) {
        return movie.bookmarked === this.state.bookmarkedOnly;
      }
      return movie;
    });
    return moviesFiltered;
  }

  searchField(movies, field) {
    const foundMovies = movies.filter((movie) =>
      movie[field].toLowerCase().includes(this.state.searchText.toLowerCase()));
    return foundMovies;
  }

  searchMoviesInFields(movies) {
    const allMoviesFound = {
      ...this.searchField(movies, 'title'),
      ...this.searchField(movies, 'subtitle'),
      ...this.searchField(movies, 'storyline'),
    };

    const removeRepeated = {
      ...new Set(allMoviesFound.reduce((acc, movie) => [...acc, movie], [])),
    };
    return removeRepeated;
  }

  moviesSearchResult() {
    const moviesGenre = this.state.movies.filter((movie) =>
      movie.genre.includes(this.state.selectedGenre));

    const Bookmarkeds = this.isBookmarkeds(moviesGenre);
    const moviesResult = this.searchMoviesInFields(Bookmarkeds);
    return moviesResult;
  }

  computedInputsSearchBar({ target: {value, checked, dataset, type } }) {
    const isValue = type === 'checkbox' ? checked : value;
    this.setState({ [dataset.key]: isValue });
  }

  render() {
    return (
      <div>
        <SearchBar 
          searchText={this.state.searchText}
          onSearchTextChange={this.state.computedInputsSearchBar}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={}
        />
        <MovieList movies={this.moviesSearchResult()} />
        <AddMovie onClick={this.addComputedMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {movies: PropTypes.arrayOf(PropTypes.object).isRequired };
export default MovieLibrary;