import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.textChange = this.textChange.bind(this);
    this.markedBook = this.markedBook.bind(this);
    this.genderSelectedChange = this.genderSelectedChange.bind(this);
    this.moviesFiltered = this.moviesFiltered.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: movies,
    };
  }

  textChange({ target }) {
    this.setState({ searchText: target.value });
  }

  markedBook({ target }) {
    this.setState({ bookmarkedOnly: target.checked });
  }

  genderSelectedChange({ target }) {
    this.setState({ selectedGenre: target.value });
  }

  moviesFiltered() {
    if (this.state.bookmarkedOnly === true) {
      return this.state.movies
      .filter((movie) => movie.bookmarkedOnly === true);
    } else if (this.state.selectedGenre !== '') {
      return this.state.movie
      .filter((movie) => movie.genre === this.state.selectedGenre);
    }
    return this.state.movies
      .filter((movie) =>
        movie.title.includes(this.state.searchText) ||
        movie.subtitle.includes(this.state.searchText) ||
        movie.storyline.includes(this.state.searchText));
  }

  // addMovie() {}

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.textChange}
          onBookmarkedChange={this.markedBook}
          selectedGenreGhange={this.genderSelectedChange}
        />
        <MovieList movies={this.moviesFiltered()} />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieLibrary;