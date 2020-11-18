// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
  }

  onSearchTextChange({ target }) {
    this.setState({ searchText: target.value });
  }
  onBookmarkedChange({ target }) {
    this.setState({ bookmarkedOnly: target.value });
  }
  onSelectedGenreChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  render() {
    const movies = this.state.movies;
    return (
      <div>
        <SearchBar
          onSearchTextChange={this.onSearchTextChange} searchText={this.state.searchText}
          onBookmarkedChange={this.onBookmarkedChange} bookmarkedOnly={this.bookmarkedOnly}
          onSelectedGenreChange={this.onSelectedGenreChange} selectedGenre={this.selectedGenre}
        />
        <MovieList movies={movies} />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.bool.isRequired };

export default MovieLibrary;
