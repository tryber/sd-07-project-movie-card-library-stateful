import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super();
    this.changeSearchText = this.changeSearchText.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onClick(newMovie) {
    this.setState({ movies: [...this.state.movies, newMovie] });
  }

  onBookmarkedChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ bookmarkedOnly: value });
  }

  changeGenre({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value });
  }

  changeSearchText({ target }) {
    const { value } = target;

    this.setState({ searchText: value });
  }

  filterMovies() {
    if (this.state.bookmarkedOnly === true) {
      return this.state.movies
        .filter((movie) => movie.bookmarked === true);
    }
    if (this.state.selectedGenre !== '') {
      return this.state.movies
        .filter((movie) => movie.genre === this.state.selectedGenre);
    }
    return this.state.movies
      .filter((movie) =>
        movie.title.includes(this.state.searchText) ||
        movie.subtitle.includes(this.state.searchText) ||
        movie.storyline.includes(this.state.searchText));
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.changeSearchText}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.changeGenre}
        />
        <MovieList
          movies={this.filterMovies()}
        />
        <AddMovie
          onClick={this.onClick}
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
