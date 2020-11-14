// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.setChange = this.setChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  setChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Trecho de código retirado do projeto de Gabriel Deori
  filteredMovies() {
    let filteredMovies = this.state.movies.filter((movie) =>
      movie.title.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
      movie.subtitle.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
      movie.storyline.toLowerCase().includes(this.state.searchText.toLowerCase()))
      .filter((movie) => movie.genre.includes(this.state.selectedGenre));
    if (this.state.bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked);
    }
    return filteredMovies;
  }

  addMovie(newMovie) {
    this.setState((state) => ({ movies: state.movies.concat(newMovie) }));
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.setChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.setChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.setChange}
        />
        <MovieList movies={this.filteredMovies()} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
