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
    this.addNewMovie = this.addNewMovie(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  handleMovieFilter() {  // Ideia tirada do codigo do Lucas Ribeiro - https://github.com/tryber/sd-07-project-movie-card-library-stateful/pull/127
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    let filteredMovies = movies.filter(
      (movie) =>
        movie.title.includes(searchText) ||
        movie.subtitle.includes(searchText) ||
        movie.storyline.includes(searchText),
       );

    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }

    return filteredMovies;
  }

  addNewMovie(newMovie) {
    this.setState((statePrevius) => ({ movies: [...statePrevius.movies, newMovie] }));
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.handleMovieFilter()} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}
// //Ideia tirada do codigo do Lucas Ribeiro - https://github.com/tryber/sd-07-project-movie-card-library-stateful/pull/127
MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
