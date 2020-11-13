// implement MovieLibrary component here
import PropTypes from 'prop-types';
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    if (target.value !== '') {
      const filteredTextMovies = this.props.movies.filter(
        (movie) =>
          movie.title === this.state.searchText ||
          movie.subtitle === this.state.searchText ||
          movie.storyline === this.state.searchText,
      );
      this.setState({ movies: filteredTextMovies });
    } else {
      this.setState({ movies: this.props.movies });
    }
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange({ target }) {
    if (target.checked) {
      const filteredBookmarkedMovies = this.props.movies.filter(
        (movie) => movie.bookmarked === target.checked,
      );
      this.setState({ movies: filteredBookmarkedMovies });
    } else {
      this.setState({ movies: this.props.movies });
    }

    this.setState({ bookmarkedOnly: target.checked });
  }

  onSelectedGenreChange({ target }) {
    if (target.value !== '') {
      const filteredGenreMovies = this.props.movies.filter(
        (movie) => movie.genre === target.value,
      );
      this.setState({ movies: filteredGenreMovies });
    } else {
      this.setState({ movies: this.props.movies });
    }

    this.setState({ selectedGenre: target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
