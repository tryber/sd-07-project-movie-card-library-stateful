/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(newCard) {
    this.setState((estadoAnterior) => ({ movies: [...estadoAnterior.movies, newCard] }));
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

  filterMovies() {
    const movieFilter = this.state.movies.filter((movie) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      movie.title.toUpperCase().includes(this.state.searchText.toUpperCase())
      || movie.subtitle.toUpperCase().includes(this.state.searchText.toUpperCase())
      || movie.storyline.toUpperCase().includes(this.state.searchText.toUpperCase()));
    if (this.state.bookmarkedOnly === true && this.state.selectedGenre) {
      return movieFilter
        .filter((movie) => movie.bookmarked === true)
        .filter((movie) => movie.genre === this.state.selectedGenre);
    }
    if (this.state.bookmarkedOnly) {
      return movieFilter.filter((movie) => movie.bookmarked === true);
    }
    if (this.state.selectedGenre.length) {
      return movieFilter.filter((movie) => movie.genre === this.state.selectedGenre);
    }
    return movieFilter;
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filterMovies()} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  })).isRequired,
};

export default MovieLibrary;
