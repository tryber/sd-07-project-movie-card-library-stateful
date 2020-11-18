// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const { name } = target;
    const value = target.value;
    this.setState({ [name]: value });
  }
  onBookmarkedChange({ target }) {
    const { name } = target;
    this.setState({ [name]: target.checked });
  }
  onSelectedGenreChange({ target }) {
    const { name } = target;
    const value = target.value;
    this.setState({ [name]: value });
  }
  // fonte Gabriel Deori
  searchMovie() {
    let filteredMovies = this.state.movies
      .filter(
        (movie) =>
          movie.title
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase()) ||
          movie.subtitle
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase()) ||
          movie.storyline
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase()),
      )
      .filter((movie) => movie.genre.includes(this.state.selectedGenre));
    if (this.state.bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked);
    }
    return filteredMovies;
  }

  addNewMovie(movie) {
    const allMovies = [...this.state.movies, movie];
    this.setState({ movies: allMovies });
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
        <MovieList movies={this.searchMovie()} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}
export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
      bookmarked: PropTypes.bool,
      genre: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
