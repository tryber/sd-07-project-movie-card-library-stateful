import React from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.filterObjectMovies = this.filterObjectMovies.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      objectMovies: this.props.movies,
    };
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  onClick(stateNewMovie) {
    this.setState({ objectMovies: [...this.state.objectMovies, stateNewMovie] });
  }

  filterObjectMovies() {
    const filterMovies = this.state.objectMovies.filter((movie) =>
      movie.title.toUpperCase().includes(this.state.searchText.toUpperCase()) ||
      movie.subtitle.toUpperCase().includes(this.state.searchText.toUpperCase()) ||
      movie.storyline.toUpperCase().includes(this.state.searchText.toUpperCase()),
    );

    if (this.state.bookmarkedOnly === true && this.state.selectedGenre !== '') {
      return filterMovies
        .filter((movie) => movie.bookmarked === true)
        .filter((movie) => movie.genre === this.state.selectedGenre);
    }

    if (this.state.bookmarkedOnly === true) {
      return filterMovies.filter((movie) => movie.bookmarked === true);
    }

    if (this.state.selectedGenre !== '') {
      return filterMovies.filter((movie) => movie.genre === this.state.selectedGenre);
    }

    return filterMovies;
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
        <MovieList movies={this.filterObjectMovies()} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
