import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }
  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value }, this.moviesFilter);
  }
  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked }, this.moviesFilter);
  }
  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value }, this.moviesFilter);
  }

  moviesFilter() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filteredMovies = [];

    filteredMovies = this.props.movies.filter((movie) =>
      movie.title.includes(searchText) ||
      movie.subtitle.includes(searchText) ||
      movie.storyline.includes(searchText),
    );
    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre !== '') {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }

    this.setState({ movies: filteredMovies });
  }

  addMovie(newMovie) {
    this.setState({ movies: [...this.state.movies, newMovie] });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
