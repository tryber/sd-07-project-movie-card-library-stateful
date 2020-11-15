import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';


class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.searchText = this.searchText.bind(this);
    this.updateMoviesByText = this.updateMoviesByText.bind(this);
    this.bookmarkedOnly = this.bookmarkedOnly.bind(this);
    this.updateMoviesByCheckbox = this.updateMoviesByCheckbox.bind(this);
    this.selectedGenre = this.selectedGenre.bind(this);
    this.updateMoviesByGenre = this.updateMoviesByGenre.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }
  searchText(event) {
    const { target } = event;
    this.setState(
      { [target.name]: target.value },
      this.updateMoviesByText,
    );
  }
  bookmarkedOnly(event) {
    const { target } = event;
    this.setState(
      { [target.name]: target.checked },
      this.updateMoviesByCheckbox,
    );
  }
  updateMoviesByText() {
    const newList = this.state.movies.filter((movie) =>
      movie.title.toLowerCase().includes(this.state.searchText.toLowerCase())
    );
    this.setState({ movies: newList });
    if (this.state.searchText === '') {
      this.setState({ movies: this.props.movies });
    }
  }

  selectedGenre(event) {
    const { target } = event;
    this.setState(
      { [target.name]: target.value },
      this.updateMoviesByGenre,
    );
  }

  updateMoviesByGenre() {
    const newList = this.state.movies.filter(
      (movie) => movie.genre === this.selectedGenre
    );
    this.setState({ movies: newList });
    if (this.state.searchText === '') {
      this.setState({ movies: this.props.movies });
    }
  }
  addNewMovie(movie) {
    this.setState((previousState, _props) => ({
      movies: [...previousState.movies, movie],
    }));
  }

  updateMoviesByCheckbox() {
    if (this.state.bookmarkedOnly === true) {
      const newList = this.state.movies.filter((movie) => movie.bookmarked === true);
      this.setState({ movies: newList });
    } else if (this.state.bookmarkedOnly === false) {
      this.setState({ movies: this.props.movies });
    }
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.searchText}
          bookmarkedOnly={this.bookmarkedOnly}
          selectedGenre={this.selectedGenre}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie addNewMovie={this.addNewMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.func.isRequired };

export default MovieLibrary;
