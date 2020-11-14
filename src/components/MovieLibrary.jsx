import React, { Component } from 'react';
import propTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import { movieShape } from './MovieCard';
import '../MovieLibrary.css';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  addMovie(movie) {
    this.setState((previousState) => ({ movies: [...previousState.movies, movie] }));
  }

  handleChange({ target }) {
    const { type, name, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({ [name]: value });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const searchUpperCased = searchText.toUpperCase();
    return (
      movies
        .filter((movie) => !bookmarkedOnly || movie.bookmarked)
        .filter((movie) => {
          const { title, subtitle, storyline } = movie;
          return (
            searchUpperCased === ''
        || title.toUpperCase().includes(searchUpperCased)
        || subtitle.toUpperCase().includes(searchUpperCased)
        || storyline.toUpperCase().includes(searchUpperCased)
          );
        })
        .filter((movie) => selectedGenre === '' || movie.genre === selectedGenre)
    );
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.handleChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.handleChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
        />
        <MovieList movies={this.filterMovies()} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: propTypes
    .arrayOf(propTypes
      .shape(movieShape).isRequired).isRequired,
};
