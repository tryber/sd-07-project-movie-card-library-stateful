import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange({ target: { value } }) {
    this.setState({ searchText: value });
  }

  onBookmarkedChange({ target: { checked } }) {
    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange({ target: { value } }) {
    this.setState({ selectedGenre: value });
  }

  addMovie(movie) {
    this.setState(({ movies }) => ({ movies: [...movies, movie] }));
  }

  searchMovies() {
    const { movies, searchText, selectedGenre, bookmarkedOnly } = this.state;
    let searchedMovies = movies.filter(({ title, subtitle, storyline }) => title.toLowerCase()
      .includes(searchText.toLowerCase())
      || subtitle.toLowerCase()
        .includes(searchText.toLowerCase())
      || storyline.toLowerCase()
        .includes(searchText.toLowerCase()))
      .filter(({ genre }) => genre.includes(selectedGenre));
    if (bookmarkedOnly) {
      searchedMovies = searchedMovies.filter(({ bookmarked }) => bookmarked);
    }
    return searchedMovies;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.searchMovies()} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    MovieCard.propTypes.movie,
  ).isRequired,
};

export default MovieLibrary;
